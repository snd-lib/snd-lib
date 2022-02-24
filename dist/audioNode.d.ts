export default class AudioNodes {
    audioSrc: AudioBufferSourceNode | null;
    private _gain;
    private _tail;
    private _volume;
    private _masterVolume;
    constructor(audioBufferSourceNode: AudioBufferSourceNode, gainNode: GainNode);
    set volume(val: number);
    get volume(): number;
    set masterVolume(val: number);
    get masterVolume(): number;
    private _setVolume;
    connect(audioNode: AudioNode): AudioNodes;
}
//# sourceMappingURL=audioNode.d.ts.map