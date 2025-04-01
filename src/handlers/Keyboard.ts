import { Screen } from "../screens/Screen.js";
import { Debug } from "./Debug.js";

const KEYBOARD = {
  PAUSE: "p",
  DEBUG: "o",
  MUTE: "m",
  RESTART: "r",
};

const keys: Set<string> = new Set();

export class Keyboard {
  constructor(public state: Screen, public debug: Debug) {
    window.addEventListener("keydown", (e) => {
      keys.add(e.key.toLowerCase());
    });

    window.addEventListener("keyup", (e) => {
      if (keys.has(KEYBOARD.PAUSE)) console.log(KEYBOARD.PAUSE);

      if (keys.has(KEYBOARD.RESTART)) console.log(KEYBOARD.RESTART);

      if (keys.has(KEYBOARD.DEBUG)) debug.switchDebugMode();

      if (keys.has(KEYBOARD.MUTE)) console.log(KEYBOARD.MUTE);

      keys.clear();
    });
  }
}
