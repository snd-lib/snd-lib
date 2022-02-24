interface Options {
    duration?: number;
    delay?: number;
    onComplete?: () => void;
    onUpdate?: () => void;
}
export default class Tween {
    private static _defaultOptions;
    private _target;
    private _propName;
    private _to;
    private _from;
    private _duration;
    private _delay;
    private _onComplete;
    private _onUpdate;
    private _updater;
    static to(target: any, propName: string, to: number, options?: Options): Tween;
    static from(target: any, propName: string, from: number, options?: Options): Tween;
    static fromTo(target: any, propName: string, from: number, to: number, options?: Options): Tween;
    private constructor();
    private get _time();
    private _tweenTo;
    private _tweenFrom;
    private _tweenFromTo;
    private _tween;
    kill: () => void;
}
export {};
//# sourceMappingURL=tween.d.ts.map