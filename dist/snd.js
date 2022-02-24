"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const constant_1 = require("./constant");
const soundKit_1 = __importDefault(require("./soundKit"));
const domInteraction_1 = __importDefault(require("./domInteraction"));
const tween_1 = __importDefault(require("./tween"));
const audioSource_1 = __importDefault(require("./audioSource"));
class Snd extends events_1.default {
    constructor(options) {
        super();
        this._soundKit = new soundKit_1.default(constant_1.KITS.SND01);
        this._dom = null;
        this._vol = 1;
        this._isMutedByDeveloper = false;
        this._isMutedByWindow = false;
        this._isWindowBlurred = false;
        this._muteOnWindowBlur = false;
        this._fadeVol = 1;
        this._windowVol = 1;
        this._fadeTweenByDeveloper = null;
        this._fadeTweenByWindowEvent = null;
        this._onVisibilityChange = () => {
            window.document.hidden ? this._onBlur() : this._onFocus();
        };
        this._onBlur = () => {
            if (this._muteOnWindowBlur)
                this._muteOnBlur();
            this._isWindowBlurred = true;
        };
        this._onFocus = () => {
            if (this._muteOnWindowBlur)
                this._unmuteOnFocus();
            this._isWindowBlurred = false;
        };
        this._onInteract = (event) => {
            this.play(event);
        };
        if (typeof window === "undefined")
            return;
        Snd._instances.push(this);
        options = Object.assign(Object.assign({}, Snd._defaultOptions), options);
        this._muteOnWindowBlur = options.muteOnWindowBlur || false;
        if (options === null || options === void 0 ? void 0 : options.easySetup) {
            this._dom = new domInteraction_1.default();
            this._dom.on(domInteraction_1.default.INTERACT, this._onInteract);
        }
        if (options.preloadSoundKit)
            this.load(options.preloadSoundKit);
        const initAudioContext = () => {
            audioSource_1.default.activate();
            window.removeEventListener("click", initAudioContext);
            window.removeEventListener("touchstart", initAudioContext);
        };
        window.addEventListener("click", initAudioContext, { once: true });
        window.addEventListener("touchstart", initAudioContext, { once: true });
        const isSp = navigator.userAgent.match(/iPhone|Android.+Mobile/) != null;
        if (isSp) {
            window.addEventListener("visibilitychange", this._onVisibilityChange);
        }
        else {
            window.addEventListener("blur", this._onBlur);
            window.addEventListener("focus", this._onFocus);
        }
    }
    static get masterVolume() { return this._masterVolume; }
    static set masterVolume(val) {
        this._masterVolume = val;
        this._instances.forEach((instance) => {
            instance._soundKit.masterVolume = this._masterVolume * instance._volume;
        });
    }
    get kit() { return this._soundKit.key; }
    get isMuted() { return this._isMutedByDeveloper || this._isMutedByWindow; }
    get isWindowBlurred() { return this._isWindowBlurred; }
    get _fadeVolume() { return this._fadeVol; }
    set _fadeVolume(val) {
        this._fadeVol = val;
        this._volume = this._fadeVol * this._windowVolume;
    }
    get _windowVolume() { return this._windowVol; }
    set _windowVolume(val) {
        this._windowVol = val;
        this._volume = this._fadeVolume * this._windowVol;
    }
    get _volume() {
        return this._vol;
    }
    set _volume(val) {
        this._vol = val;
        this._soundKit.masterVolume = this._vol * Snd._masterVolume;
    }
    load(soundKitKey) {
        return __awaiter(this, void 0, void 0, function* () {
            this._soundKit.fade(0);
            const oldKey = this._soundKit.key;
            const kit = Snd._initializedSoundKits.get(soundKitKey);
            if (kit === undefined) {
                const newKit = new soundKit_1.default(soundKitKey);
                Snd._initializedSoundKits.set(soundKitKey, newKit);
                yield newKit.load();
                yield newKit.analyze();
                this._soundKit = newKit;
            }
            else {
                this._soundKit = kit;
            }
            this._soundKit.fade(1);
            const crrKey = this._soundKit.key;
            if (oldKey !== crrKey)
                this.emit(Snd.CHANGE_SOUND_KIT, crrKey, oldKey);
        });
    }
    play(soundKey, options = {}) {
        options = Object.assign(Object.assign({}, Snd._defaultPlayOptions), options);
        if (this.isWindowBlurred)
            return;
        if (soundKey === constant_1.SOUNDS.TAP)
            return this.playTap(options);
        if (soundKey === constant_1.SOUNDS.TYPE)
            return this.playType(options);
        if (soundKey === constant_1.SOUNDS.SWIPE)
            return this.playSwipe(options);
        this._soundKit.play(soundKey, options);
    }
    stop(key) {
        this._soundKit.stop(key);
    }
    mute() {
        this._isMutedByDeveloper = true;
        this._fadeByDeveloper(0, 0.3);
    }
    unmute() {
        this._isMutedByDeveloper = false;
        this._fadeByDeveloper(1, 0.3);
    }
    playTap(options = {}) {
        this._playRandom(constant_1.TAP_SOUND_KEYS, options);
    }
    playSwipe(options = {}) {
        this._playRandom(constant_1.SWIPE_SOUND_KEYS, options);
    }
    playType(options = {}) {
        this._playRandom(constant_1.TYPE_SOUND_KEYS, options);
    }
    playButton(options = {}) {
        this.play(Snd.SOUNDS.BUTTON, options);
    }
    playCaution(options = {}) {
        this.play(Snd.SOUNDS.CAUTION, options);
    }
    playCelebration(options = {}) {
        this.play(Snd.SOUNDS.CELEBRATION, options);
    }
    playDisabled(options = {}) {
        this.play(Snd.SOUNDS.DISABLED, options);
    }
    playNotification(options = {}) {
        this.play(Snd.SOUNDS.NOTIFICATION, options);
    }
    playProgressLoop(options = {}) {
        this.play(Snd.SOUNDS.PROGRESS_LOOP, options);
    }
    playRingtoneLoop(options = {}) {
        this.play(Snd.SOUNDS.RINGTONE_LOOP, options);
    }
    playSelect(options = {}) {
        this.play(Snd.SOUNDS.SELECT, options);
    }
    playTransitionUp(options = {}) {
        this.play(Snd.SOUNDS.TRANSITION_UP, options);
    }
    playTransitionDown(options = {}) {
        this.play(Snd.SOUNDS.TRANSITION_DOWN, options);
    }
    playToggleOn(options = {}) {
        this.play(Snd.SOUNDS.TOGGLE_ON, options);
    }
    playToggleOff(options = {}) {
        this.play(Snd.SOUNDS.TOGGLE_OFF, options);
    }
    _playRandom(keys, options = {}) {
        this.play(keys[Math.floor(Math.random() * keys.length)], options);
    }
    _muteOnBlur() {
        this._isMutedByWindow = true;
        this._fadeByWindowEvent(0, 0.3);
    }
    _unmuteOnFocus() {
        this._isMutedByWindow = false;
        this._fadeByWindowEvent(1, 0.3);
    }
    _fadeByDeveloper(volumeTo, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._fadeTweenByDeveloper != null)
                this._fadeTweenByDeveloper.kill();
            this._fadeTweenByDeveloper = tween_1.default.to(this, "_fadeVolume", volumeTo, { duration });
        });
    }
    _fadeByWindowEvent(volumeTo, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._fadeTweenByWindowEvent != null)
                this._fadeTweenByWindowEvent.kill();
            this._fadeTweenByWindowEvent = tween_1.default.to(this, "_windowVolume", volumeTo, { duration });
        });
    }
}
exports.default = Snd;
Snd.CHANGE_SOUND_KIT = "change_sound_kit";
Snd.SOUNDS = constant_1.SOUNDS;
Snd.KITS = constant_1.KITS;
Snd._instances = [];
Snd._initializedSoundKits = new Map();
Snd._masterVolume = 1;
Snd._defaultOptions = {
    muteOnWindowBlur: true,
    easySetup: false,
    preloadSoundKit: null,
};
Snd._defaultPlayOptions = {
    loop: false,
    volume: 1,
    delay: 0,
    duration: -1,
    callback: () => { }
};
