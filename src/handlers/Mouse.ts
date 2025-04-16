import { Screen } from "../screens/Screen.js";
import { Cursor } from "../constants/types.js";
import { ANIMATION } from "../constants/animation.js";
import { PLAIN_CURSOR } from "../constants/types.js";

export class Mouse {
  // static enemySelected: Enemy;
  //static towerSelected:Tower;
  private mouseOverItem: any = PLAIN_CURSOR;

  private cursor: Cursor = {
    x: 0,
    y: 0,
    radius: 3,
    width: 3,
    height: 3,
    style: document.getElementById("canvas")!.style,
  };

  constructor() {
    window.addEventListener("mousemove", (e) => {
      this.cursor.x = e.offsetX;
      this.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => this.mouseOverItem.mouseClick());
  }

  update(screen: Screen) {
    this.mouseOverItem = PLAIN_CURSOR;
    this.mouseOver(screen.getCurrentState().getArray());
    this.setCursor(this.mouseOverItem.getType());
  }

  mouseOver(array: Array<any>) {
    array.forEach((item: any) => {
      if (item.hitDetection.checkCollision(this.cursor)) {
        item.mouseOver(ANIMATION.MOUSEOVER);
        this.mouseOverItem = item;
      } else {
        item.mouseOver(ANIMATION.NORMAL);
      }
    });
  }

  setCursor(style: string) {
    this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  getCursor(): Cursor {
    return this.cursor;
  }
}
