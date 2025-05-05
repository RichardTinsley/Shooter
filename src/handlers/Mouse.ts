import { STATE } from "../constants/states.js";
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
  static mouseOverEntity: any;

  static cursor: Cursor = {
    x: 0,
    y: 0,
    radius: size / 2,
    width: size,
    height: size,
    style: document.getElementById("canvas")!.style,
  };

  constructor() {
    Mouse.setCursor(null);

    window.addEventListener("mousemove", (e) => {
      Mouse.cursor.x = e.offsetX;
      Mouse.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      if (Mouse.mouseOverEntity) {
        Mouse.mouseOverEntity.mouseClick();
        Mouse.setCursor(null);
      }
    });
  }

  static setCursor(entity: any, style: string = CURSOR_STYLES.PLAIN): void {
    Mouse.mouseOverEntity = entity;
    if (Mouse.mouseOverEntity) Mouse.mouseOverEntity.setState(STATE.MOUSEOVER);

    Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  static mouseOver(entity: any, style: string) {
    if (Mouse.mouseOverEntity === entity) return;

    if (entity.components.hitDetection.checkCollision(Mouse.cursor))
      Mouse.setCursor(entity, style);
  }

  update() {
    if (!Mouse.mouseOverEntity) return;

    if (
      Mouse.mouseOverEntity.components.hitDetection.checkCollision(Mouse.cursor)
    )
      return;
    else {
      Mouse.mouseOverEntity.setState(STATE.MOUSEOFF);
      Mouse.setCursor(null);
    }
  }
}
