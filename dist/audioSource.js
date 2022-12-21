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
const audioNode_1 = __importDefault(require("./audioNode"));
const tween_1 = __importDefault(require("./tween"));
class AudioSource {
    constructor() {
        this._audioArrayBuffer = null;
        this._audioBuffer = null;
        this._audioList = new Map();
        this._cnt = 1000;
        this._json = null;
        this._hasStartedLoading = false;
        this._hasLoaded = false;
        this._hasStartedAnalysis = false;
        this._hasAnalyzed = false;
        this._masterVolume = 1;
        this._analyzePromise = null;
        AudioSource._instances.push(this);
    }
    static get isActive() {
        return this._isActive;
    }
    static activate() {
        if (this._isActive)
            return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this._ctx = new AudioContext();
            const emptySrc = this._ctx.createBufferSource();
            emptySrc.start();
            try {
                emptySrc.stop();
            }
            catch (e) {
                console.warn(e);
            }
            this._isActive = true;
            this._analyzeAllInstances();
        }
        catch (err) {
            throw new Error(`an err occurred while AudioSource.setup ${err}`);
        }
    }
    static _analyzeAllInstances() {
        this._instances.forEach((instance) => {
            if (instance._hasLoaded && !instance._hasStartedAnalysis) {
                instance.analyze();
            }
        });
    }
    static _createAudioBuffer(buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof Promise !== 'undefined' && this._ctx.decodeAudioData.length === 1) {
                    return yield this._ctx.decodeAudioData(buffer);
                }
                else {
                    return new Promise((res, rej) => {
                        this._ctx.decodeAudioData(buffer, (data) => res(data), (err) => rej(err));
                    });
                }
            }
            catch (err) {
                throw new Error(`an err occured while AudioSource._createAudioBuffer ${err}`);
            }
        });
    }
    static _createAudioArrayBuffer(audioSrc) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(audioSrc);
                const arrayBuffer = yield res.arrayBuffer();
                return arrayBuffer;
            }
            catch (err) {
                throw new Error(`an err occurred while AudioSource._createAudioArrayBuffer ${err}`);
            }
        });
    }
    get _uniqueKey() {
        return this._cnt++;
    }
    set masterVolume(val) {
        this._masterVolume = val;
        this._audioList.forEach((audio) => {
            audio.nodes.masterVolume = this._masterVolume;
        });
    }
    get masterVolume() {
        return this._masterVolume;
    }
    load(audioSrc, json) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._hasStartedLoading) {
                console.warn("The file has already started loading.");
                return;
            }
            this._json = json;
            this._hasStartedLoading = true;
            try {
                this._audioArrayBuffer = yield AudioSource._createAudioArrayBuffer(audioSrc);
                this._hasLoaded = true;
            }
            catch (err) {
                if (err instanceof Error)
                    throw err;
                else
                    throw new Error("unknown error");
            }
        });
    }
    analyze() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!AudioSource.isActive)
                return;
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
                this._analyzePromise = AudioSource._createAudioBuffer(this._audioArrayBuffer);
                this._audioBuffer = yield this._analyzePromise;
                this._analyzePromise = null;
                this._hasAnalyzed = true;
            }
            catch (err) {
                if (err instanceof Error)
                    throw err;
                else
                    throw new Error("unknown error");
            }
        });
    }
    play(key, options) {
        var _a, _b;
        if (!this._hasLoaded) {
            console.warn("play(): The file hasn't loaded yet.");
            return -999;
        }
        if (!this._hasAnalyzed) {
            if (!this._hasStartedAnalysis) {
                try {
                    AudioSource.activate();
                }
                catch (err) {
                    console.warn("play(): Can not play audio before initialization (AudioContext must be initialization by pointer event).");
                    return -999;
                }
            }
            if (this._analyzePromise != null) {
                const id = this._uniqueKey;
                this._playLater(id, key, options);
                return id;
            }
            else {
                console.warn(("_analyzePromise is null"));
                return -999;
            }
        }
        if (this._json === null || !this._json.spritemap || !(key in this._json.spritemap)) {
            throw new Error(`json error: ${this._json}`);
        }
        if (((_a = AudioSource._ctx) === null || _a === void 0 ? void 0 : _a.state) == "interrupted") {
            const id = this._uniqueKey;
            (_b = AudioSource._ctx) === null || _b === void 0 ? void 0 : _b.resume().then(() => {
                this.play(key, options);
            });
            return id;
        }
        const id = this._uniqueKey;
        this._play(id, key, options);
        this.setLoop(options.loop, id);
        this.setVolume(options.volume, id);
        return id;
    }
    stop(id, delay = 0) {
        var _a;
        if (!this._audioList.has(id))
            return;
        (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes.audioSrc.stop(AudioSource._ctx.currentTime + delay);
        this._audioList.delete(id);
    }
    setVolume(vol, id) {
        var _a;
        if (!this._audioList.has(id))
            return;
        const audioNodes = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes;
        if (audioNodes !== null && audioNodes.volume !== null)
            audioNodes.volume = vol;
    }
    setLoop(loop, id) {
        var _a, _b;
        if (!this._audioList.has(id))
            return;
        const key = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.key;
        const audioNodes = (_b = this._audioList.get(id)) === null || _b === void 0 ? void 0 : _b.nodes;
        if (loop) {
            const start = this._json.spritemap[key].start;
            const end = this._json.spritemap[key].end;
            audioNodes.audioSrc.loop = true;
            audioNodes.audioSrc.loopStart = start;
            audioNodes.audioSrc.loopEnd = end;
        }
        else {
            audioNodes.audioSrc.loop = false;
        }
    }
    fade(volTo, duration, id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._audioList.has(id))
                return;
            const audioNodes = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes;
            yield new Promise((res) => {
                tween_1.default.to(audioNodes, "volume", volTo, {
                    duration: duration,
                    onComplete: res
                });
            });
        });
    }
    fadeAll(volTo) {
        this._audioList.forEach((_, id) => {
            this.fade(volTo, 0.5, id).then(_ => this.stop(id));
        });
    }
    _play(id, key, options) {
        const audioSrc = AudioSource._ctx.createBufferSource();
        audioSrc.buffer = this._audioBuffer;
        const gainNode = AudioSource._ctx.createGain();
        const audioNodes = new audioNode_1.default(audioSrc, gainNode);
        audioNodes.masterVolume = this.masterVolume;
        audioNodes.connect(gainNode).connect(AudioSource._ctx.destination);
        const start = this._json.spritemap[key].start;
        const end = this._json.spritemap[key].end;
        if (options.loop) {
            audioNodes.audioSrc.start(AudioSource._ctx.currentTime + options.delay, start, end);
        }
        else {
            const dur = Math.max(end - start, 0.1);
            audioNodes.audioSrc.start(AudioSource._ctx.currentTime + options.delay, start, dur);
        }
        audioNodes.audioSrc.onended = () => {
            this.stop(id);
            audioNodes.audioSrc.disconnect();
            audioNodes.audioSrc.buffer = null;
            options.callback(id);
        };
        this._audioList.set(id, {
            key,
            nodes: audioNodes,
        });
    }
    _playLater(id, key, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._analyzePromise;
            this._play(id, key, options);
            this.setLoop(options.loop, id);
            this.setVolume(options.volume, id);
        });
    }
}
exports.default = AudioSource;
AudioSource.END = "end";
AudioSource._instances = [];
AudioSource._ctx = null;
AudioSource._isActive = false;
