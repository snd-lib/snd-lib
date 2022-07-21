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
const constant_1 = require("./constant");
const audioSource_1 = __importDefault(require("./audioSource"));
class SoundKit {
    constructor(key) {
        this._ids = new Map();
        this._audioSrc = new audioSource_1.default();
        this._masterVolume = 1;
        this.key = key;
    }
    get masterVolume() {
        return this._masterVolume;
    }
    set masterVolume(val) {
        this._masterVolume = val;
        this._audioSrc.masterVolume = this._masterVolume;
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            const json = constant_1.KIT_INFO[this.key].json;
            const audioSrc = constant_1.KIT_INFO[this.key].audioSrc;
            try {
                yield this._audioSrc.load(audioSrc, json);
            }
            catch (err) {
                throw err;
            }
        });
    }
    analyze() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._audioSrc.analyze();
            }
            catch (err) {
                throw err;
            }
        });
    }
    play(key, options) {
        const oldId = this._ids.get(key);
        if (oldId !== undefined)
            this._audioSrc.fade(0, 0.05, oldId);
        const id = this._audioSrc.play(key, options);
        const fadeoutDuration = 0.05;
        if (options.duration > fadeoutDuration) {
            setTimeout(() => {
                this._audioSrc.fade(0, fadeoutDuration, id);
            }, (options.duration - fadeoutDuration) * 1000);
        }
        this._ids.set(key.replace(/_[0-9][0-9]/, ""), id);
    }
    stop(soundKey) {
        const id = this._ids.get(soundKey);
        if (id)
            this._audioSrc.stop(id);
        else
            console.warn(`[SoundKit.stop()] key: ${soundKey} haven't played`);
    }
    fade(volTo) {
        this._audioSrc.fadeAll(volTo);
    }
}
exports.default = SoundKit;
