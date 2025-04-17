import { Screen } from "../screens/Screen.js";
import { Cursor } from "../constants/types.js";
import { ANIMATION } from "../constants/animation.js";
import { PLAIN_CURSOR } from "../constants/types.js";

export class Mouse {
  // static enemySelected: Enemy; //IClickAble
  //static towerSelected:Tower; //IClickAble
  private mouseOverEntity: any = PLAIN_CURSOR;

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

    window.addEventListener("click", () => this.mouseOverEntity.mouseClick());
  }

  update(screen: Screen) {
    this.mouseOverEntity = PLAIN_CURSOR;
    this.mouseOver(screen.getCurrentState().getArray());
    this.setCursor(this.mouseOverEntity.getType());
  }

  mouseOver(array: Array<any>) {
    array.forEach((entity: any) => {
      if (entity.hitDetection.checkCollision(this.cursor)) {
        this.mouseOverEntity = entity;
        this.mouseOverEntity.mouseOver(ANIMATION.MOUSEOVER);
      } else {
        entity.mouseOver(ANIMATION.NORMAL);
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
