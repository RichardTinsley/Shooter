import { IScreenState, Screen } from "../screens/Screen.js";
import { Cursor } from "../constants/types.js";
import {
  checkCircleCollision,
  checkHitBoxCollision,
} from "../utilities/collisionDetection.js";
import { MenuButton } from "../GUI/menus/MenuButton.js";
import { ANIMATION } from "../constants/animation.js";
import { EmptyTowerSpot } from "../entities/towers/emptyTowerSpot.js";
import { Enemy } from "../entities/enemies/Enemy.js";

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

  constructor(state: Screen) {
    window.addEventListener("mousemove", (e) => {
      this.cursor.x = e.offsetX;
      this.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      this.mouseClick();
    });
  }

  update(state: Screen) {
    this.mouseOverMenuButton(state.getCurrentState());
    this.mouseOverEntity(state.getCurrentState());
    this.setCursor();
  }

  mouseOverMenuButton(state: IScreenState) {
    this.mouseOverItem = undefined;
    state.menu?.getMenuItemsArray().forEach((item: MenuButton) => {
      if (checkHitBoxCollision(this.cursor, item.hitBox)) {
        item.mouseOver(ANIMATION.ANIMATING);
        this.mouseOverItem = item;
      } else {
        item.mouseOver(ANIMATION.FINISHED);
      }
    });
  }

  mouseOverEntity(state: IScreenState) {
    state.getArray().forEach((item: any) => {
      if (
        checkCircleCollision(
          this.cursor,
          item.hitCircle,
          this.cursor.radius,
          item.hitCircle.radius
        )
      ) {
        // item.mouseOver(ANIMATION.ANIMATING);
        this.mouseOverItem = item;
      } else {
        // item.mouseOver(ANIMATION.FINISHED);
      }
    });
  }

  mouseClick() {
    if (this.mouseOverItem) {
      this.mouseOverItem.changeState();
      this.mouseOverItem = undefined;
    }
  }

  setCursor() {
    let style = "Plain";
    if (this.mouseOverItem instanceof MenuButton) style = "MenuItem";
    if (this.mouseOverItem instanceof EmptyTowerSpot) style = "Tower";
    if (this.mouseOverItem instanceof Enemy) style = "Enemy";
    this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  getCursor(): Cursor {
    return this.cursor;
  }
}
