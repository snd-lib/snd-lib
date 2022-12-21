"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOGGLE_SOUND_KEYS = exports.TYPE_SOUND_KEYS = exports.SWIPE_SOUND_KEYS = exports.TAP_SOUND_KEYS = exports.EVENT_CLASS_NAMES = exports.SOUNDS = exports.ENABLE_TAGS = exports.KIT_INFO = exports.KITS = void 0;
const _01_json_1 = __importDefault(require("./json/01.json"));
const _02_json_1 = __importDefault(require("./json/02.json"));
const _03_json_1 = __importDefault(require("./json/03.json"));
const BUTTON = "button";
const CAUTION = "caution";
const CELEBRATION = "celebration";
const DISABLED = "disabled";
const NOTIFICATION = "notification";
const PROGRESS_LOOP = "progress_loop";
const RINGTONE_LOOP = "ringtone_loop";
const SELECT = "select";
const SWIPE = "swipe";
const SWIPE_01 = "swipe_01";
const SWIPE_02 = "swipe_02";
const SWIPE_03 = "swipe_03";
const SWIPE_04 = "swipe_04";
const SWIPE_05 = "swipe_05";
const TAP = "tap";
const TAP_01 = "tap_01";
const TAP_02 = "tap_02";
const TAP_03 = "tap_03";
const TAP_04 = "tap_04";
const TAP_05 = "tap_05";
const TOGGLE = "toggle";
const TOGGLE_OFF = "toggle_off";
const TOGGLE_ON = "toggle_on";
const TRANSITION_DOWN = "transition_down";
const TRANSITION_UP = "transition_up";
const TYPE = "type";
const TYPE_01 = "type_01";
const TYPE_02 = "type_02";
const TYPE_03 = "type_03";
const TYPE_04 = "type_04";
const TYPE_05 = "type_05";
const TAP_SOUND_KEYS = [
    TAP_01,
    TAP_02,
    TAP_03,
    TAP_04,
    TAP_05
];
exports.TAP_SOUND_KEYS = TAP_SOUND_KEYS;
const SWIPE_SOUND_KEYS = [
    SWIPE_01,
    SWIPE_02,
    SWIPE_03,
    SWIPE_04,
    SWIPE_05
];
exports.SWIPE_SOUND_KEYS = SWIPE_SOUND_KEYS;
const TYPE_SOUND_KEYS = [
    TYPE_01,
    TYPE_02,
    TYPE_03,
    TYPE_04,
    TYPE_05
];
exports.TYPE_SOUND_KEYS = TYPE_SOUND_KEYS;
const TOGGLE_SOUND_KEYS = [
    TOGGLE_ON,
    TOGGLE_OFF
];
exports.TOGGLE_SOUND_KEYS = TOGGLE_SOUND_KEYS;
const _SOUND_KEYS = {
    BUTTON,
    CAUTION,
    CELEBRATION,
    DISABLED,
    NOTIFICATION,
    PROGRESS_LOOP,
    RINGTONE_LOOP,
    SELECT,
    SWIPE,
    TAP,
    TOGGLE_ON,
    TOGGLE_OFF,
    TRANSITION_DOWN,
    TRANSITION_UP,
    TYPE
};
const _EVENT_CLASS_NAMES = {
    [BUTTON]: `snd__${BUTTON}`,
    [CAUTION]: `snd__${CAUTION}`,
    [CELEBRATION]: `snd__${CELEBRATION}`,
    [DISABLED]: `snd__${DISABLED}`,
    [NOTIFICATION]: `snd__${NOTIFICATION}`,
    [PROGRESS_LOOP]: `snd__${PROGRESS_LOOP}`,
    [RINGTONE_LOOP]: `snd__${RINGTONE_LOOP}`,
    [SELECT]: `snd__${SELECT}`,
    [SWIPE]: `snd__${SWIPE}`,
    [TAP]: `snd__${TAP}`,
    [TOGGLE]: `snd__${TOGGLE}`,
    [TRANSITION_DOWN]: `snd__${TRANSITION_DOWN}`,
    [TRANSITION_UP]: `snd__${TRANSITION_UP}`,
    [TYPE]: `snd__${TYPE}`,
};
const SOUNDS = Object.freeze(_SOUND_KEYS);
exports.SOUNDS = SOUNDS;
const EVENT_CLASS_NAMES = Object.freeze(_EVENT_CLASS_NAMES);
exports.EVENT_CLASS_NAMES = EVENT_CLASS_NAMES;
const TAG_EVENT_SOUND = {
    "input:text,email,number,password,search,url,tel": {
        events: {
            "input": "type"
        }
    },
    "input:checkbox": {
        events: {
            "change": "toggle"
        }
    },
    "input:radio": {
        events: {
            "change": "select"
        }
    },
    "input:button,reset,submit": {
        events: {
            "click": "button,caution,celebration,disabled,notification,tap,transition_down,transition_up"
        }
    },
    "select": {
        events: {
            "change": "select"
        }
    },
    "any": {
        events: {
            "click": "button,caution,celebration,disabled,notification,tap,transition_down,transition_up"
        }
    }
};
exports.ENABLE_TAGS = TAG_EVENT_SOUND;
const _KITS = {
    SND01: "01",
    SND02: "02",
    SND03: "03",
};
const KITS = Object.freeze(_KITS);
exports.KITS = KITS;
const _KIT_INFO = {
    [KITS.SND01]: {
        json: _01_json_1.default,
        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/assets/sounds/sprite/01/audioSprite.mp3",
    },
    [KITS.SND02]: {
        json: _02_json_1.default,
        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/assets/sounds/sprite/02/audioSprite.mp3",
    },
    [KITS.SND03]: {
        json: _03_json_1.default,
        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/assets/sounds/sprite//03/audioSprite.mp3",
    },
};
const KIT_INFO = Object.freeze(_KIT_INFO);
exports.KIT_INFO = KIT_INFO;
