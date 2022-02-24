import { KIT_INFO } from "./constant";
import AudioSource from "./audioSource";
import { PlayOptions } from "./snd";

export default class SoundKit {

	public key: string;
	private _ids: Map<string, number> = new Map<string, number>();
	private _audioSrc: AudioSource = new AudioSource();
	private _masterVolume: number = 1;

	constructor(key: string) {
		this.key = key;
	}

	public get masterVolume(): number {
		return this._masterVolume;
	}

	public set masterVolume(val: number) {
		this._masterVolume = val;
		this._audioSrc.masterVolume = this._masterVolume;
	}

	public async load(): Promise<void> {
		const json = KIT_INFO[this.key].json;
		const audioSrc = KIT_INFO[this.key].audioSrc;
		try {
			await this._audioSrc.load(audioSrc, json);
		} catch (err) {
			throw err;
		}
	}

	public async analyze(): Promise<void> {
		try {
			await this._audioSrc.analyze();
		} catch (err) {
			throw err;
		}
	}

	public play(key: string, options: PlayOptions): void {
		const oldId = this._ids.get(key);
		if (oldId !== undefined) this._audioSrc.fade(0, 0.05, oldId);

		const id = this._audioSrc.play(key, options);
		const fadeoutDuration: number = 0.05;
		if (options.duration! > fadeoutDuration) {
			setTimeout(() => {
				this._audioSrc.fade(0, fadeoutDuration, id);
			}, (options.duration! - fadeoutDuration) * 1000);
		}

		this._ids.set(key, id);
	}

	public stop(soundKey: string): void {
		const id = this._ids.get(soundKey);
		if (id) this._audioSrc.stop(id);
		else console.warn(`[SoundKit.stop()] key: ${soundKey} haven't played`);
	}

	public fade(volTo: number): void {
		this._audioSrc.fadeAll(volTo);
	}

}
