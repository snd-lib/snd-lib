interface Options {
	duration?: number;
	delay?: number;
	onComplete?: () => void;
	onUpdate?: () => void;
}

type TweenType = "to" | "from" | "fromTo";

export default class Tween {

	private static _defaultOptions: Options = {
		duration: 0.5,
		delay: 0,
		onComplete: () => { },
		onUpdate: () => { }
	};

	private _target: any;
	private _propName: string = "";
	private _to: number = 0;
	private _from: number = 0;
	private _duration: number = 0.5;
	private _delay: number = 0;
	private _onComplete: () => void = () => { };
	private _onUpdate: () => void = () => { };
	private _updater: number = 0;

	public static to(target: any, propName: string, to: number, options?: Options): Tween {
		if (target[propName] === undefined) throw new Error(`prop: ${propName} does not exists in ${target}`);
		else return new Tween(target, propName, 0, to, "to", options);
	}

	public static from(target: any, propName: string, from: number, options?: Options): Tween {
		if (target[propName] === undefined) throw new Error(`prop: ${propName} does not exists in ${target}`);
		return new Tween(target, propName, from, 0, "from", options);
	}

	public static fromTo(target: any, propName: string, from: number, to: number, options?: Options): Tween {
		if (target[propName] === undefined) throw new Error(`prop: ${propName} does not exists in ${target}`);
		return new Tween(target, propName, from, to, "fromTo", options);
	}

	private constructor(target: any, propName: string, from: number, to: number, type: TweenType, options?: Options) {
		this._target = target;
		this._propName = propName;
		this._from = from;
		this._to = to;
		options = {
			...Tween._defaultOptions,
			...options
		};
		this._duration = options?.duration!;
		this._delay = options?.delay!;
		this._onComplete = options?.onComplete!;
		this._onUpdate = options?.onUpdate!;

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
		} else {
			throw new Error(`prop: ${this._propName} does not exists in ${this._target}`);
		}
	}

	private get _time(): number {
		return Date.now() / 1000;
	}

	private _tweenTo(): void {
		const from = this._target[this._propName];
		const to = this._to;
		this._tween(from, to);
	}

	private _tweenFrom(): void {
		const from = this._from;
		const to = this._target[this._propName];
		this._tween(from, to);
	}

	private _tweenFromTo(): void {
		const from = this._from;
		const to = this._to;
		this._tween(from, to);
	}

	private _tween = async (from: number, to: number): Promise<void> => {
		if (this._target[this._propName] === undefined) return;

		this.kill();

		const startTime = this._time;
		const dur = this._duration;
		const del = this._delay;
		const endTime = startTime + dur + del;

		while (this._time < endTime) {
			if (this._time < startTime + del) continue;

			const crrTime = this._time;
			const percentage = (crrTime - startTime) / (endTime - startTime);
			const val = (to - from) * percentage + from;

			this._target[this._propName] = val;
			this._onUpdate();
			await new Promise(res => {
				this._updater = requestAnimationFrame(res);
			});
		}
		this.kill();
		this._target[this._propName] = to;
		this._onUpdate();
		this._onComplete();
	};

	public kill = (): void => {
		cancelAnimationFrame(this._updater);
	};

}