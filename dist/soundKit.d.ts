import { PlayOptions } from "./snd";
export default class SoundKit {
    key: string;
    private _ids;
    private _audioSrc;
    private _masterVolume;
    constructor(key: string);
    get masterVolume(): number;
    set masterVolume(val: number);
    load(): Promise<void>;
    analyze(): Promise<void>;
    play(key: string, options: PlayOptions): void;
    stop(soundKey: string): void;
    fade(volTo: number): void;
}
//# sourceMappingURL=soundKit.d.ts.map