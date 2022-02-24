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
Object.defineProperty(exports, "__esModule", { value: true });
class Tween {
    constructor(target, propName, from, to, type, options) {
        this._propName = "";
        this._to = 0;
        this._from = 0;
        this._duration = 0.5;
        this._delay = 0;
        this._onComplete = () => { };
        this._onUpdate = () => { };
        this._updater = 0;
        this._tween = (from, to) => __awaiter(this, void 0, void 0, function* () {
            if (this._target[this._propName] === undefined)
                return;
            this.kill();
            const startTime = this._time;
            const dur = this._duration;
            const del = this._delay;
            const endTime = startTime + dur + del;
            while (this._time < endTime) {
                if (this._time < startTime + del)
                    continue;
                const crrTime = this._time;
                const percentage = (crrTime - startTime) / (endTime - startTime);
                const val = (to - from) * percentage + from;
                this._target[this._propName] = val;
                this._onUpdate();
                yield new Promise(res => {
                    this._updater = requestAnimationFrame(res);
                });
            }
            this.kill();
            this._target[this._propName] = to;
            this._onUpdate();
            this._onComplete();
        });
        this.kill = () => {
            cancelAnimationFrame(this._updater);
        };
        this._target = target;
        this._propName = propName;
        this._from = from;
        this._to = to;
        options = Object.assign(Object.assign({}, Tween._defaultOptions), options);
        this._duration = options === null || options === void 0 ? void 0 : options.duration;
        this._delay = options === null || options === void 0 ? void 0 : options.delay;
        this._onComplete = options === null || options === void 0 ? void 0 : options.onComplete;
        this._onUpdate = options === null || options === void 0 ? void 0 : options.onUpdate;
        if (this._target[this._propName] !== undefined) {
            switch (type) {
                case "to":
                    this._tweenTo();
                    break;
                case "from":
                    this._tweenFrom();
                    break;
                case "fromTo":
                    this._tweenFromTo();
                    break;
                default:
                    break;
            }
        }
        else {
            throw new Error(`prop: ${this._propName} does not exists in ${this._target}`);
        }
    }
    static to(target, propName, to, options) {
        if (target[propName] === undefined)
            throw new Error(`prop: ${propName} does not exists in ${target}`);
        else
            return new Tween(target, propName, 0, to, "to", options);
    }
    static from(target, propName, from, options) {
        if (target[propName] === undefined)
            throw new Error(`prop: ${propName} does not exists in ${target}`);
        return new Tween(target, propName, from, 0, "from", options);
    }
    static fromTo(target, propName, from, to, options) {
        if (target[propName] === undefined)
            throw new Error(`prop: ${propName} does not exists in ${target}`);
        return new Tween(target, propName, from, to, "fromTo", options);
    }
    get _time() {
        return Date.now() / 1000;
    }
    _tweenTo() {
        const from = this._target[this._propName];
        const to = this._to;
        this._tween(from, to);
    }
    _tweenFrom() {
        const from = this._from;
        const to = this._target[this._propName];
        this._tween(from, to);
    }
    _tweenFromTo() {
        const from = this._from;
        const to = this._to;
        this._tween(from, to);
    }
}
exports.default = Tween;
Tween._defaultOptions = {
    duration: 0.5,
    delay: 0,
    onComplete: () => { },
    onUpdate: () => { }
};
