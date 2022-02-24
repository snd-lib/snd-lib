import EventEmitter from "events";
import { EVENT_CLASS_NAMES, TOGGLE_SOUND_KEYS, ENABLE_TAGS } from "./constant";

const isTouchDevice: boolean = typeof window !== "undefined" && window.ontouchstart !== undefined

export default class DOMInteraction extends EventEmitter {

	public static readonly INTERACT: "interact"

	constructor() {
		super()
		this._init()
	}

	private _init(): void {
		for (const key in EVENT_CLASS_NAMES) {
			const className = EVENT_CLASS_NAMES[key]
			const elements: HTMLCollection = document.getElementsByClassName(className)

			for (let i = 0; i < elements.length; i++) {
				const el = elements[i]
				const soundKey = key.replace("snd__", "")
				const eventName = this._getEventName(soundKey, el as HTMLElement)
				if (eventName == null) break

				this._listen(el as HTMLElement, eventName, soundKey)
			}
		}
	}

	private _getEventName(soundKey: string, element: HTMLElement): string | null {
		const tagName = element.tagName.toLowerCase()

		for (const tagString in ENABLE_TAGS) {

			if (tagName == "input" && tagString.match("input") != null) {
				const type = (element as HTMLInputElement).type || ""
				const types = tagString.split(":")[1].split(",")
				for (const event in ENABLE_TAGS[tagString].events) {
					for (const i in types) {
						if (type != types[i]) continue
						const sounds = ENABLE_TAGS[tagString].events[event].split(",")
						for (const j in sounds) {
							if (soundKey == sounds[j]) return event
						}
					}
				}
			} else {
				if (tagString == tagName || tagString == "any") {
					for (const event in ENABLE_TAGS[tagString].events) {
						const sounds = ENABLE_TAGS[tagString].events[event].split(",")
						for (const i in sounds) {
							if (soundKey == sounds[i]) return event
						}
					}
				}
			}
		}

		return null
	}

	private _listen(element: HTMLElement, eventName: string, soundKey: string): void {
		element.addEventListener(eventName, (e) => this._process(e, eventName, soundKey));
	}

	private _process(e: Event, eventName: string, soundKey: string): void {
		const target: HTMLElement = e.target as HTMLElement

		if (!target.classList.contains(`snd__${soundKey}`)) return
		if (soundKey == "toggle") {
			soundKey = (target as HTMLInputElement).checked ? TOGGLE_SOUND_KEYS[0] : TOGGLE_SOUND_KEYS[1]
		}

		this._emit(target as HTMLElement, eventName, soundKey)
	}

	private _emit(DOM: HTMLElement, event: string, soundKey: string): void {
		if (document.documentElement.classList.contains("muted")) return
		this.emit(DOMInteraction.INTERACT, soundKey)
	}

}