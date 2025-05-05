import { Cursor } from "../constants/types.js";
const size: number = 3;

export enum CURSOR_STYLES {
  PLAIN = "Plain",
  TOWER = "Tower",
  ENEMY = "Enemy",
  MENUBUTTON = "MenuButton",
}

export class Mouse {
  // static enemySelected: IClickable;
  // static towerSelected: IClickable;

  static cursor: Cursor = {
    x: 0,
    y: 0,
    radius: size / 2,
    width: size,
    height: size,
    style: document.getElementById("canvas")!.style,
    mouseOverEntity: null,
  };

  constructor() {
    Mouse.setCursor(null);

    window.addEventListener("mousemove", (e) => {
      Mouse.cursor.x = e.offsetX;
      Mouse.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      if (Mouse.cursor.mouseOverEntity !== null) {
        Mouse.cursor.mouseOverEntity.mouseClick();
        Mouse.setCursor(null);
      }
    });
  }

  static setCursor(entity: any, style: string = CURSOR_STYLES.PLAIN): void {
    Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    Mouse.cursor.mouseOverEntity = entity;
  }
}
