import { SoundKeys, DOMEventSound } from "./types";
declare const TAP_SOUND_KEYS: string[];
declare const SWIPE_SOUND_KEYS: string[];
declare const TYPE_SOUND_KEYS: string[];
declare const TOGGLE_SOUND_KEYS: string[];
declare const SOUNDS: Readonly<SoundKeys>;
declare const EVENT_CLASS_NAMES: Readonly<{
    [key: string]: string;
}>;
declare const TAG_EVENT_SOUND: DOMEventSound;
export declare type KitKinds = "01" | "02" | "03";
declare const KITS: Readonly<{
    [key: string]: KitKinds;
}>;
declare const KIT_INFO: Readonly<{
    [key: string]: {
        json: any;
        audioSrc: string;
    };
}>;
export { KITS, KIT_INFO, TAG_EVENT_SOUND as ENABLE_TAGS, SOUNDS, EVENT_CLASS_NAMES, TAP_SOUND_KEYS, SWIPE_SOUND_KEYS, TYPE_SOUND_KEYS, TOGGLE_SOUND_KEYS };
//# sourceMappingURL=constant.d.ts.map