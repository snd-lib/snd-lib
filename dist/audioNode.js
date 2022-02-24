"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AudioNodes {
    constructor(audioBufferSourceNode, gainNode) {
        this.audioSrc = null;
        this._gain = null;
        this._tail = null;
        this._volume = 1;
        this._masterVolume = 1;
        this.audioSrc = audioBufferSourceNode;
        this._gain = gainNode;
        this._tail = this.audioSrc;
    }
    set volume(val) {
        this._volume = val;
        this._setVolume();
    }
    get volume() {
        return this._volume;
    }
    set masterVolume(val) {
        this._masterVolume = val;
        this._setVolume();
    }
    get masterVolume() {
        return this._masterVolume;
    }
    _setVolume() {
        if (this._gain !== null)
            this._gain.gain.value = this.volume * this.masterVolume;
    }
    connect(audioNode) {
        var _a;
        (_a = this._tail) === null || _a === void 0 ? void 0 : _a.connect(audioNode);
        this._tail = audioNode;
        return this;
    }
}
exports.default = AudioNodes;
