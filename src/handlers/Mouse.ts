import { State } from "../states/State.js";
import { Cursor } from "../constants/types.js";
import { checkHitBoxCollision } from "../utilities/collisionDetection.js";

const mouseSize: number = 3;

export class Mouse {
  private cursor: Cursor = {
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

      state
        .getState()
        .screen.getMenu()
        .forEach((item) => {
          if (!checkHitBoxCollision(this.cursor, item.hitBox))
            console.log("OMG");
        });
    });

    window.addEventListener("click", () => {});
  }
}
