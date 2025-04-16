const KEYBOARD = {
    PAUSE: "p",
    DEBUG: "o",
    MUTE: "m",
    RESTART: "r",
};
const keys = new Set();
export class Keyboard {
    constructor(state, debug) {
        this.state = state;
        this.debug = debug;
        window.addEventListener("keydown", (e) => keys.add(e.key.toLowerCase()));
        window.addEventListener("keyup", (e) => {
            if (keys.has(KEYBOARD.PAUSE))
                console.log(KEYBOARD.PAUSE);
            if (keys.has(KEYBOARD.RESTART))
                console.log(KEYBOARD.RESTART);
            if (keys.has(KEYBOARD.DEBUG))
                debug.switchDebugMode();
            if (keys.has(KEYBOARD.MUTE))
                console.log(KEYBOARD.MUTE);
            keys.clear();
        });
    }
}
//# sourceMappingURL=Keyboard.js.map