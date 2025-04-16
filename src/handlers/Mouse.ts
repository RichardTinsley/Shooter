import { Screen } from "../screens/Screen.js";
import { Cursor } from "../constants/types.js";
import { ANIMATION } from "../constants/animation.js";

export class Mouse {
  // static enemySelected: Enemy;
  //static towerSelected:Tower;
  mouseOverItem: any = undefined;
  private readonly mouseSize: number = 3;

  private cursor: Cursor = {
    x: 0,
    y: 0,
    radius: this.mouseSize,
    width: this.mouseSize,
    height: this.mouseSize,
    style: document.getElementById("canvas")!.style,
  };

  constructor() {
    window.addEventListener("mousemove", (e) => {
      this.cursor.x = e.offsetX;
      this.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => this.mouseClick());
  }

  update(screen: Screen) {
    this.mouseOverItem = undefined;
    this.setCursor("Plain");
    this.mouseOver(screen.getCurrentState().getArray());
  }

  mouseOver(array: Array<any>) {
    array.forEach((item: any) => {
      if (item.hitDetection.checkCollision(this.cursor)) {
        item.mouseOver(ANIMATION.MOUSEOVER);
        this.mouseOverItem = item;
        this.setCursor(this.mouseOverItem.getType());
      } else {
        item.mouseOver(ANIMATION.NORMAL);
      }
    });
  }

  mouseClick() {
    if (!this.mouseOverItem) return;
    this.mouseOverItem.mouseClick();
    this.mouseOverItem = undefined;
  }

  setCursor(style: string) {
    this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  getCursor(): Cursor {
    return this.cursor;
  }
}
