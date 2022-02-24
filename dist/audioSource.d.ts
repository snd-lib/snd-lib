import AudioNodes from "./audioNode";
import { PlayOptions } from "./snd";
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
    static readonly END: string;
    private static _instances;
    private static _ctx;
    private static _isActive;
    private _audioArrayBuffer;
    private _audioBuffer;
    private _audioList;
    private _cnt;
    private _json;
    private _hasStartedLoading;
    private _hasLoaded;
    private _hasStartedAnalysis;
    private _hasAnalyzed;
    private _masterVolume;
    private _analyzePromise;
    static get isActive(): boolean;
    static activate(): void;
    private static _analyzeAllInstances;
    private static _createAudioBuffer;
    private static _createAudioArrayBuffer;
    constructor();
    private get _uniqueKey();
    set masterVolume(val: number);
    get masterVolume(): number;
    load(audioSrc: string, json: SpriteJSON): Promise<void>;
    analyze(): Promise<void>;
    play(key: string, options: PlayOptions): number;
    stop(id: number, delay?: number): void;
    setVolume(vol: number, id: number): void;
    setLoop(loop: boolean, id: number): void;
    fade(volTo: number, duration: number, id: number): Promise<void>;
    fadeAll(volTo: number): void;
    private _play;
    private _playLater;
}
//# sourceMappingURL=audioSource.d.ts.map