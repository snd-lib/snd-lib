/// <reference types="node" />
import EventEmitter from "events";
import { KitKinds } from "./constant";
export interface SndOptions {
    easySetup?: boolean;
    muteOnWindowBlur?: boolean;
    preloadSoundKit?: null | KitKinds;
}
export interface PlayOptions {
    loop?: boolean;
    volume?: number;
    duration?: number;
    delay?: number;
    callback?: (id: number) => void;
}
export default class Snd extends EventEmitter {
    static readonly CHANGE_SOUND_KIT: string;
    static readonly SOUNDS: Readonly<import("./types").SoundKeys>;
    static readonly KITS: Readonly<{
        [key: string]: KitKinds;
    }>;
    private static _instances;
    private static _initializedSoundKits;
    private static _masterVolume;
    private _soundKit;
    private _dom;
    private _vol;
    private _isMutedByDeveloper;
    private _isMutedByWindow;
    private _isWindowBlurred;
    private _muteOnWindowBlur;
    private _fadeVol;
    private _windowVol;
    private _fadeTweenByDeveloper;
    private _fadeTweenByWindowEvent;
    private static _defaultOptions;
    private static _defaultPlayOptions;
    static get masterVolume(): number;
    static set masterVolume(val: number);
    constructor(options?: SndOptions);
    get kit(): string;
    get isMuted(): boolean;
    get isWindowBlurred(): boolean;
    private get _fadeVolume();
    private set _fadeVolume(value);
    private get _windowVolume();
    private set _windowVolume(value);
    private get _volume();
    private set _volume(value);
    load(soundKitKey: string): Promise<void>;
    play(soundKey: string, options?: PlayOptions): void;
    stop(key: string): void;
    mute(): void;
    unmute(): void;
    playTap(options?: PlayOptions): void;
    playSwipe(options?: PlayOptions): void;
    playType(options?: PlayOptions): void;
    playButton(options?: PlayOptions): void;
    playCaution(options?: PlayOptions): void;
    playCelebration(options?: PlayOptions): void;
    playDisabled(options?: PlayOptions): void;
    playNotification(options?: PlayOptions): void;
    playProgressLoop(options?: PlayOptions): void;
    playRingtoneLoop(options?: PlayOptions): void;
    playSelect(options?: PlayOptions): void;
    playTransitionUp(options?: PlayOptions): void;
    playTransitionDown(options?: PlayOptions): void;
    playToggleOn(options?: PlayOptions): void;
    playToggleOff(options?: PlayOptions): void;
    private _playRandom;
    private _onVisibilityChange;
    private _onBlur;
    private _onFocus;
    private _muteOnBlur;
    private _unmuteOnFocus;
    private _fadeByDeveloper;
    private _fadeByWindowEvent;
    private _onInteract;
}
//# sourceMappingURL=snd.d.ts.map