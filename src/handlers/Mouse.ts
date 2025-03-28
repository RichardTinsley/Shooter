import { State } from "../states/State.js";
import { Cursor } from "../constants/types.js";
import { checkHitBoxCollision } from "../utilities/collisionDetection.js";
import { MenuButton } from "../components/MenuButton.js";

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

      this.mouseOverMenuButton(state);
    });

    window.addEventListener("click", () => {});
  }

  mouseOverMenuButton(state: State) {
    state
      .getState()
      .gui.getMenu()
      .forEach((item: MenuButton) => {
        if (!checkHitBoxCollision(this.cursor, item.hitBox)) item.changeState();
      });
  }
}
