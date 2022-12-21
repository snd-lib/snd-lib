import AudioNodes from "./audioNode";
import { PlayOptions } from "./snd";
import Tween from "./tween";

export interface SpriteJSON {
	resources: string[];
	spritemap: {
		[key: string]: {
			start: number;
			end: number;
			loop: boolean;
		};
	};
}

export interface AudioData {
	key: string;
	nodes: AudioNodes;
}

declare global {
	var webkitAudioContext: AudioContext;
}

export default class AudioSource {

	public static readonly END: string = "end";
	private static _instances: AudioSource[] = [];
	private static _ctx: AudioContext | null = null;
	private static _isActive: boolean = false;

	private _audioArrayBuffer: ArrayBuffer | null = null;
	private _audioBuffer: AudioBuffer | null = null;
	private _audioList: Map<number, AudioData> = new Map<number, AudioData>();
	private _cnt: number = 1000;
	private _json: SpriteJSON | null = null;
	private _hasStartedLoading: boolean = false;
	private _hasLoaded: boolean = false;
	private _hasStartedAnalysis: boolean = false;
	private _hasAnalyzed: boolean = false;
	private _masterVolume: number = 1;
	private _analyzePromise: Promise<AudioBuffer> | null = null;

	public static get isActive(): boolean {
		return this._isActive;
	}

	public static activate(): void {
		if (this._isActive) return;

		try {
			const AudioContext = window.AudioContext || window.webkitAudioContext;
			this._ctx = new AudioContext();

			const emptySrc = this._ctx.createBufferSource();
			emptySrc.start();
			try {
				emptySrc.stop();
			} catch(e) {
				console.warn(e);
			}
			this._isActive = true;

			this._analyzeAllInstances();

		} catch (err) {
			throw new Error(`an err occurred while AudioSource.setup ${err}`);
		}
	}

	private static _analyzeAllInstances(): void {
		this._instances.forEach((instance: AudioSource) => {
			if (instance._hasLoaded && !instance._hasStartedAnalysis) {
				instance.analyze();
			}
		});
	}

	private static async _createAudioBuffer(buffer: ArrayBuffer): Promise<AudioBuffer> {
		try {
			if (typeof Promise !== 'undefined' && this._ctx!.decodeAudioData.length === 1) {
				return await this._ctx!.decodeAudioData(buffer);
			} else {
				return new Promise<AudioBuffer>((res, rej) => {
					this._ctx!.decodeAudioData(buffer,
						(data: AudioBuffer) => res(data),
						(err: Error) => rej(err)
					);
				});
			}
		} catch (err) {
			throw new Error(`an err occured while AudioSource._createAudioBuffer ${err}`);
		}
	}

	private static async _createAudioArrayBuffer(audioSrc: string): Promise<ArrayBuffer> {
		try {
			const res = await fetch(audioSrc);
			const arrayBuffer = await res.arrayBuffer();
			return arrayBuffer;
		} catch (err) {
			throw new Error(`an err occurred while AudioSource._createAudioArrayBuffer ${err}`);
		}
	}

	constructor() {
		AudioSource._instances.push(this);
	}

	private get _uniqueKey(): number {
		return this._cnt++;
	}

	public set masterVolume(val: number) {
		this._masterVolume = val;
		this._audioList.forEach((audio: AudioData) => {
			audio.nodes.masterVolume = this._masterVolume;
		});
	}

	public get masterVolume(): number {
		return this._masterVolume;
	}

	public async load(audioSrc: string, json: SpriteJSON): Promise<void> {
		if (this._hasStartedLoading) {
			console.warn("The file has already started loading.");
			return;
		}
		this._json = json;
		this._hasStartedLoading = true;
		try {
			this._audioArrayBuffer = await AudioSource._createAudioArrayBuffer(audioSrc);
			this._hasLoaded = true;
		} catch (err) {
			if (err instanceof Error) throw err;
			else throw new Error("unknown error");
		}
	}

	public async analyze(): Promise<void> {
		if (!AudioSource.isActive) return;
		if (this._hasStartedAnalysis) {
			console.warn("analyze(): AudioBuffer has already started analysis");
			return;
		}
		if (!this._hasLoaded || this._audioArrayBuffer == null) {
			console.warn("analyze(): The file hasn't loaded yet.");
			return;
		}

		this._hasStartedAnalysis = true;
		try {
			this._analyzePromise = AudioSource._createAudioBuffer(this._audioArrayBuffer!);
			this._audioBuffer = await this._analyzePromise;
			this._analyzePromise = null;
			this._hasAnalyzed = true;
		} catch (err) {
			if (err instanceof Error) throw err;
			else throw new Error("unknown error");
		}
	}

	public play(key: string, options: PlayOptions): number {
		if (!this._hasLoaded) {
			console.warn("play(): The file hasn't loaded yet.");
			return -999;
		}
		if (!this._hasAnalyzed) {
			if (!this._hasStartedAnalysis) {
				try {
					AudioSource.activate();
				} catch (err) {
					console.warn("play(): Can not play audio before initialization (AudioContext must be initialization by pointer event).");
					return -999;
				}
			}

			if (this._analyzePromise != null) {
				const id = this._uniqueKey;
				this._playLater(id, key, options);
				return id;
			} else {
				console.warn(("_analyzePromise is null"));
				return -999;
			}
		}

		if (this._json === null || !this._json.spritemap || !(key in this._json.spritemap)) {
			throw new Error(`json error: ${this._json}`);
		}

		if ((AudioSource._ctx?.state as string) == "interrupted") {
			const id = this._uniqueKey;
			AudioSource._ctx?.resume().then(() => {
				this.play(key, options);
			});
			return id;
		}

		const id = this._uniqueKey;
		this._play(id, key, options);
		this.setLoop(options.loop!, id);
		this.setVolume(options.volume!, id)

		return id;
	}

	public stop(id: number, delay: number = 0): void {
		if (!this._audioList.has(id)) return;

		this._audioList.get(id)?.nodes.audioSrc!.stop(AudioSource._ctx!.currentTime + delay);
		this._audioList.delete(id);
	}

	public setVolume(vol: number, id: number): void {
		if (!this._audioList.has(id)) return;

		const audioNodes: AudioNodes = this._audioList.get(id)?.nodes!;
		if (audioNodes !== null && audioNodes.volume !== null) audioNodes.volume = vol;
	}

	public setLoop(loop: boolean, id: number): void {
		if (!this._audioList.has(id)) return;

		const key = this._audioList.get(id)?.key;
		const audioNodes = this._audioList.get(id)?.nodes;

		if (loop) {
			const start = this._json!.spritemap[key!].start;
			const end = this._json!.spritemap[key!].end;
			audioNodes!.audioSrc!.loop = true;
			audioNodes!.audioSrc!.loopStart = start;
			audioNodes!.audioSrc!.loopEnd = end;
		} else {
			audioNodes!.audioSrc!.loop = false;
		}
	}

	public async fade(volTo: number, duration: number, id: number): Promise<void> {
		if (!this._audioList.has(id)) return;
		const audioNodes = this._audioList.get(id)?.nodes;

		await new Promise<void>((res: () => void) => {
			Tween.to(audioNodes, "volume", volTo, {
				duration: duration,
				onComplete: res
			});
		});

	}

	public fadeAll(volTo: number): void {
		this._audioList.forEach((_: AudioData, id: number) => {
			this.fade(volTo, 0.5, id).then(_ => this.stop(id));
		});
	}

	private _play(id: number, key: string, options: PlayOptions): void {
		const audioSrc: AudioBufferSourceNode = AudioSource._ctx!.createBufferSource();
		audioSrc!.buffer = this._audioBuffer;

		const gainNode = AudioSource._ctx!.createGain();
		const audioNodes: AudioNodes = new AudioNodes(audioSrc, gainNode);
		audioNodes.masterVolume = this.masterVolume;
		audioNodes.connect(gainNode).connect(AudioSource._ctx!.destination);

		const start = this._json!.spritemap[key].start;
		const end = this._json!.spritemap[key].end;

		if (options.loop!) {
			audioNodes.audioSrc!.start(AudioSource._ctx!.currentTime + options.delay!, start, end);
		} else {
			const dur = Math.max(end - start, 0.1);
			audioNodes.audioSrc!.start(AudioSource._ctx!.currentTime + options.delay!, start, dur);
		}

		audioNodes.audioSrc!.onended = () => {
			this.stop(id);
			audioNodes.audioSrc!.disconnect();
			audioNodes.audioSrc!.buffer = null;
			options.callback!(id);
		};

		this._audioList.set(id, {
			key,
			nodes: audioNodes,
		});
	}

	private async _playLater(id: number, key: string, options: PlayOptions): Promise<void> {
		await this._analyzePromise!;
		this._play(id, key, options);
		this.setLoop(options.loop!, id);
		this.setVolume(options.volume!, id)
	}
}