const KEYBOARD = {
    PAUSE: "p",
    DEBUG: "o",
    MUTE: "m",
    RESTART: "r",
};
const keys = new Set();
export class Keyboard {
    constructor(scene) {
        window.addEventListener("keydown", (e) => {
            keys.add(e.key.toLowerCase());
        });
        window.addEventListener("keyup", (e) => {
            if (keys.has(KEYBOARD.PAUSE))
                console.log(KEYBOARD.PAUSE);
            if (keys.has(KEYBOARD.RESTART))
                scene.setState(scene.loadingState);
            if (keys.has(KEYBOARD.DEBUG))
                console.log(KEYBOARD.DEBUG);
            if (keys.has(KEYBOARD.MUTE))
                console.log(KEYBOARD.MUTE);
            keys.clear();
        });
    }
}
//# sourceMappingURL=Keyboard.js.map