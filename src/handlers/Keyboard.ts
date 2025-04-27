import { Screen } from "../screens/Screen.js";
import { Debug } from "./Debug.js";

const KEYS = {
  PAUSE: "p",
  DEBUG: "o",
  MUTE: "m",
  RESTART: "r",
};

const keys: Set<string> = new Set();

export class Keyboard {
  constructor(public state: Screen, public debug: Debug) {
    window.addEventListener("keydown", (e) => keys.add(e.key.toLowerCase()));

    window.addEventListener("keyup", (e) => {
      if (keys.has(KEYS.PAUSE)) console.log(KEYS.PAUSE);

      if (keys.has(KEYS.RESTART)) console.log(KEYS.RESTART);

      if (keys.has(KEYS.DEBUG)) debug.switchDebugMode();

      if (keys.has(KEYS.MUTE)) console.log(KEYS.MUTE);

      keys.clear();
    });
  }
}
