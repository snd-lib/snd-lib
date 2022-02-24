export interface SoundKeys {
    BUTTON: "button";
    CAUTION: "caution";
    CELEBRATION: "celebration";
    DISABLED: "disabled";
    NOTIFICATION: "notification";
    PROGRESS_LOOP: "progress_loop";
    RINGTONE_LOOP: "ringtone_loop";
    SELECT: "select";
    SWIPE: "swipe";
    TAP: "tap";
    TOGGLE_ON: "toggle_on";
    TOGGLE_OFF: "toggle_off";
    TRANSITION_DOWN: "transition_down";
    TRANSITION_UP: "transition_up";
    TYPE: "type";
}
export interface DOMEventSound {
    [key: string]: {
        events: {
            [key: string]: string;
        };
    };
}
//# sourceMappingURL=types.d.ts.map