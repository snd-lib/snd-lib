import EventEmitter from "events";
import { KitKinds, KITS, SOUNDS, SWIPE_SOUND_KEYS, TAP_SOUND_KEYS, TYPE_SOUND_KEYS } from "./constant";
import SoundKit from "./soundKit";
import DOMInteraction from "./domInteraction";
import Tween from "./tween";
import AudioSource from "./audioSource";

export interface SndOptions {
	easySetup?: boolean;
	muteOnWindowBlur?: boolean;
	preloadSoundKit?: null | KitKinds;
}

export interface PlayOptions {
	index?: null | 0 | 1 | 2 | 3 | 4;
	loop?: boolean;
	volume?: number;
	duration?: number;
	delay?: number;
	callback?: (id: number) => void;
}

export default class Snd extends EventEmitter {

	public static readonly CHANGE_SOUND_KIT: string = "change_sound_kit";
	public static readonly SOUNDS = SOUNDS;
	public static readonly KITS = KITS;

	private static _instances: Snd[] = [];
	private static _initializedSoundKits: Map<string, SoundKit> = new Map<string, SoundKit>();
	private static _masterVolume: number = 1;

	private _soundKit: SoundKit = new SoundKit(KITS.SND01);
	private _dom: DOMInteraction | null = null;
	private _vol: number = 1;
	private _isMutedByDeveloper: boolean = false;
	private _isMutedByWindow: boolean = false;
	private _isWindowBlurred: boolean = false;
	private _muteOnWindowBlur: boolean = false;
	private _fadeVol: number = 1;
	private _windowVol: number = 1;
	private _fadeTweenByDeveloper: Tween | null = null;
	private _fadeTweenByWindowEvent: Tween | null = null;
	private static _defaultOptions: SndOptions = {
		muteOnWindowBlur: true,
		easySetup: false,
		preloadSoundKit: null,
	};
	private static _defaultPlayOptions: PlayOptions = {
		index: null,
		loop: false,
		volume: 1,
		delay: 0,
		duration: -1,
		callback: () => { }
	};

	public static get masterVolume(): number { return this._masterVolume; }
	public static set masterVolume(val: number) {
		this._masterVolume = val;
		this._instances.forEach((instance: Snd) => {
			instance._soundKit.masterVolume = this._masterVolume * instance._volume;
		});
	}

	constructor(options?: SndOptions) {
		super();
		if (typeof window === "undefined") return;
		Snd._instances.push(this);

		options = {
			...Snd._defaultOptions,
			...options,
		};
		this._muteOnWindowBlur = options.muteOnWindowBlur || false;

		if (options?.easySetup) {
			this._dom = new DOMInteraction();
			this._dom.on(DOMInteraction.INTERACT, this._onInteract);
		}
		if (options.preloadSoundKit) this.load(options.preloadSoundKit);

		const initAudioContext = (): void => {
			AudioSource.activate();
			window.removeEventListener("click", initAudioContext);
			window.removeEventListener("touchstart", initAudioContext);
		};
		window.addEventListener("click", initAudioContext, { once: true });
		window.addEventListener("touchstart", initAudioContext, { once: true });

		const isSp = navigator.userAgent.match(/iPhone|Android.+Mobile/) != null;
		if (isSp) {
			window.addEventListener("visibilitychange", this._onVisibilityChange);
		} else {
			window.addEventListener("blur", this._onBlur);
			window.addEventListener("focus", this._onFocus);
		}

	}

	public get kit(): string { return this._soundKit.key; }
	public get isMuted(): boolean { return this._isMutedByDeveloper || this._isMutedByWindow; }
	public get isWindowBlurred(): boolean { return this._isWindowBlurred; }

	private get _fadeVolume(): number { return this._fadeVol; }
	private set _fadeVolume(val: number) {
		this._fadeVol = val;
		this._volume = this._fadeVol * this._windowVolume;
	}

	private get _windowVolume(): number { return this._windowVol; }
	private set _windowVolume(val: number) {
		this._windowVol = val;
		this._volume = this._fadeVolume * this._windowVol;
	}

	private get _volume(): number {
		return this._vol;
	}
	private set _volume(val: number) {
		this._vol = val;
		this._soundKit.masterVolume = this._vol * Snd._masterVolume;
	}

	public async load(soundKitKey: string): Promise<void> {
		this._soundKit.fade(0);
		const oldKey = this._soundKit.key;
		const kit = Snd._initializedSoundKits.get(soundKitKey);

		if (kit === undefined) {
			const newKit = new SoundKit(soundKitKey);
			Snd._initializedSoundKits.set(soundKitKey, newKit);
			await newKit.load();
			await newKit.analyze();
			this._soundKit = newKit;
		} else {
			this._soundKit = kit;
		}

		this._soundKit.fade(1);
		const crrKey = this._soundKit.key;
		if (oldKey !== crrKey) this.emit(Snd.CHANGE_SOUND_KIT, crrKey, oldKey);
	}

	public play(soundKey: string, options: PlayOptions = {}): void {
		options = {
			...Snd._defaultPlayOptions,
			...options
		};
		if (this.isWindowBlurred) return;
		if (soundKey === SOUNDS.TAP) return this.playTap(options);
		if (soundKey === SOUNDS.TYPE) return this.playType(options);
		if (soundKey === SOUNDS.SWIPE) return this.playSwipe(options);
		if (!(soundKey.includes(SOUNDS.TAP) || soundKey.includes(SOUNDS.TYPE) || soundKey.includes(SOUNDS.SWIPE))) {
			if ( options.index !== null && options.index !== undefined && options.index !== 0 ){
				throw("Index out of range");
			}
		}
		this._soundKit.play(soundKey, options);
	}

	public stop(key: string): void {
		this._soundKit.stop(key);
	}

	public mute(): void {
		this._isMutedByDeveloper = true;
		this._fadeByDeveloper(0, 0.3);
	}

	public unmute(): void {
		this._isMutedByDeveloper = false;
		this._fadeByDeveloper(1, 0.3);
	}

	public playTap(options: PlayOptions = {}): void {
		this._playRandom(TAP_SOUND_KEYS, options);
	}

	public playSwipe(options: PlayOptions = {}): void {
		this._playRandom(SWIPE_SOUND_KEYS, options);
	}

	public playType(options: PlayOptions = {}): void {
		this._playRandom(TYPE_SOUND_KEYS, options);
	}

	public playButton(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.BUTTON, options);
	}

	public playCaution(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.CAUTION, options);
	}

	public playCelebration(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.CELEBRATION, options);
	}

	public playDisabled(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.DISABLED, options);
	}

	public playNotification(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.NOTIFICATION, options);
	}

	public playProgressLoop(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.PROGRESS_LOOP, options);
	}

	public playRingtoneLoop(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.RINGTONE_LOOP, options);
	}

	public playSelect(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.SELECT, options);
	}

	public playTransitionUp(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.TRANSITION_UP, options);
	}

	public playTransitionDown(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.TRANSITION_DOWN, options);
	}

	public playToggleOn(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.TOGGLE_ON, options);
	}

	public playToggleOff(options: PlayOptions = {}): void {
		this.play(Snd.SOUNDS.TOGGLE_OFF, options);
	}

	private _playRandom(keys: string[], options: PlayOptions = {}): void {
		if(options.index !== null && options.index !== undefined){
			if(options.index < 0 && options.index >= keys.length){
				throw("Index out of range");
			}
			this.play(keys[options.index], options);
			return;
		} 
		this.play(keys[Math.floor(Math.random() * keys.length)], options);
	}

	private _onVisibilityChange = (): void => {
		window.document.hidden ? this._onBlur() : this._onFocus();
	};

	private _onBlur = (): void => {
		if (this._muteOnWindowBlur) this._muteOnBlur();
		this._isWindowBlurred = true;
	};

	private _onFocus = (): void => {
		if (this._muteOnWindowBlur) this._unmuteOnFocus();
		this._isWindowBlurred = false;
	};

	private _muteOnBlur(): void {
		this._isMutedByWindow = true;
		this._fadeByWindowEvent(0, 0.3);
	}

	private _unmuteOnFocus(): void {
		this._isMutedByWindow = false;
		this._fadeByWindowEvent(1, 0.3);
	}

	private async _fadeByDeveloper(volumeTo: number, duration: number): Promise<void> {
		if (this._fadeTweenByDeveloper != null) this._fadeTweenByDeveloper.kill();
		this._fadeTweenByDeveloper = Tween.to(this, "_fadeVolume", volumeTo, { duration });
	}

	private async _fadeByWindowEvent(volumeTo: number, duration: number): Promise<void> {
		if (this._fadeTweenByWindowEvent != null) this._fadeTweenByWindowEvent.kill();
		this._fadeTweenByWindowEvent = Tween.to(this, "_windowVolume", volumeTo, { duration });
	}

	private _onInteract = (event: string): void => {
		this.play(event);
	};

}