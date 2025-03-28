import { State } from "../states/State.js";
import { Cursor } from "../constants/types.js";

const mouseSize: number = 3;

export class Mouse {
  cursor: Cursor = {
    x: 0,
    y: 0,
    radius: mouseSize,
    width: mouseSize,
    height: mouseSize,
    style: document.getElementById("canvas")!.style,
  };

  constructor(state: State) {
    window.addEventListener("mousemove", (e) => {
      this.cursor.x = e.offsetX;
      this.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      state.getState().screen;
    });
  }

  onMouseClick() {}
}
