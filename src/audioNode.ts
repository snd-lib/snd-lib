
export default class AudioNodes {

	public audioSrc: AudioBufferSourceNode | null = null;
	private _gain: GainNode | null = null;
	private _tail: AudioNode | null = null;
	private _volume: number = 1;
	private _masterVolume: number = 1;

	constructor(audioBufferSourceNode: AudioBufferSourceNode, gainNode: GainNode) {
		this.audioSrc = audioBufferSourceNode;
		this._gain = gainNode;
		this._tail = this.audioSrc;
	}

	public set volume(val: number) {
		this._volume = val;
		this._setVolume();
	}

	public get volume(): number {
		return this._volume;
	}

	public set masterVolume(val: number) {
		this._masterVolume = val;
		this._setVolume();
	}

	public get masterVolume(): number {
		return this._masterVolume;
	}

	private _setVolume(): void {
		if (this._gain !== null) this._gain.gain.value = this.volume * this.masterVolume;
	}

	public connect(audioNode: AudioNode): AudioNodes {
		this._tail?.connect(audioNode);
		this._tail = audioNode;
		return this;
	}

}