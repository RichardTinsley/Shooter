import { IState, State } from "../states/State.js";
import { Cursor } from "../constants/types.js";
import { checkHitBoxCollision } from "../utilities/collisionDetection.js";
import { MenuButton } from "../GUI/components/MenuButton.js";
import { ANIMATION } from "../constants/animation.js";

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

  mouseOverItem: MenuButton | undefined = undefined;

  constructor(state: State) {
    window.addEventListener("mousemove", (e) => {
      this.cursor.x = e.offsetX;
      this.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      this.mouseClick();
    });
  }

  update(state: State) {
    this.mouseOverItem = this.mouseOverMenuButton(state.getCurrentState());
    this.setCursor();
  }

  mouseOverMenuButton(state: IState): MenuButton | undefined {
    return state.gui.getMenu().find((item: MenuButton) => {
      if (checkHitBoxCollision(this.cursor, item.hitBox)) {
        item.mouseOver(ANIMATION.ANIMATING);
        return item;
      } else {
        item.mouseOver(ANIMATION.FINISHED);
        this.mouseOverItem = undefined;
      }
    });
  }

  mouseClick() {
    if (this.mouseOverItem) {
      this.mouseOverItem.changeState();
    }
  }

  setCursor() {
    let style = "Plain";
    if (this.mouseOverItem instanceof MenuButton) style = "MenuItem";

    this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  getCursor(): Cursor {
    return this.cursor;
  }
}
