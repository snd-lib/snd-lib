"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const constant_1 = require("./constant");
const isTouchDevice = typeof window !== "undefined" && window.ontouchstart !== undefined;
class DOMInteraction extends events_1.default {
    constructor() {
        super();
        this._init();
    }
    _init() {
        for (const key in constant_1.EVENT_CLASS_NAMES) {
            const className = constant_1.EVENT_CLASS_NAMES[key];
            const elements = document.getElementsByClassName(className);
            for (let i = 0; i < elements.length; i++) {
                const el = elements[i];
                const soundKey = key.replace("snd__", "");
                const eventName = this._getEventName(soundKey, el);
                if (eventName == null)
                    break;
                this._listen(el, eventName, soundKey);
            }
        }
    }
    _getEventName(soundKey, element) {
        const tagName = element.tagName.toLowerCase();
        for (const tagString in constant_1.ENABLE_TAGS) {
            if (tagName == "input" && tagString.match("input") != null) {
                const type = element.type || "";
                const types = tagString.split(":")[1].split(",");
                for (const event in constant_1.ENABLE_TAGS[tagString].events) {
                    for (const i in types) {
                        if (type != types[i])
                            continue;
                        const sounds = constant_1.ENABLE_TAGS[tagString].events[event].split(",");
                        for (const j in sounds) {
                            if (soundKey == sounds[j])
                                return event;
                        }
                    }
                }
            }
            else {
                if (tagString == tagName || tagString == "any") {
                    for (const event in constant_1.ENABLE_TAGS[tagString].events) {
                        const sounds = constant_1.ENABLE_TAGS[tagString].events[event].split(",");
                        for (const i in sounds) {
                            if (soundKey == sounds[i])
                                return event;
                        }
                    }
                }
            }
        }
        return null;
    }
    _listen(element, eventName, soundKey) {
        element.addEventListener(eventName, (e) => this._process(e, eventName, soundKey));
    }
    _process(e, eventName, soundKey) {
        const target = e.target;
        if (!target.classList.contains(`snd__${soundKey}`))
            return;
        if (soundKey == "toggle") {
            soundKey = target.checked ? constant_1.TOGGLE_SOUND_KEYS[0] : constant_1.TOGGLE_SOUND_KEYS[1];
        }
        this._emit(target, eventName, soundKey);
    }
    _emit(DOM, event, soundKey) {
        if (document.documentElement.classList.contains("muted"))
            return;
        this.emit(DOMInteraction.INTERACT, soundKey);
    }
}
exports.default = DOMInteraction;
