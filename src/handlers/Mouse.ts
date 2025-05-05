import { STATE } from "../constants/states.js";
import { Cursor } from "../constants/types.js";
const size: number = 3;

export enum STYLES {
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
    Mouse.setCursorStyle(STYLES.PLAIN);

    window.addEventListener("mousemove", (e) => {
      Mouse.cursor.x = e.offsetX;
      Mouse.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      if (Mouse.mouseOverEntity) {
        Mouse.mouseOverEntity.mouseClick();
        Mouse.setCursorStyle(STYLES.PLAIN);
      }
    });
  }

  static setCursorStyle(style: string): void {
    Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  static mouseOver(entity: any, style: string) {
    // if (Mouse.mouseOverEntity === entity) return;
    // else entity.setState(STATE.MOUSEOFF);
    if (Mouse.mouseOverEntity) return;

    if (entity.components.hitDetection.checkCollision(Mouse.cursor)) {
      Mouse.setCursorStyle(style);
      Mouse.mouseOverEntity = entity;
      Mouse.mouseOverEntity.setState(STATE.MOUSEOVER);
    } else entity.setState(STATE.MOUSEOFF);
  }

  update() {
    // if (!Mouse.mouseOverEntity) return;

    if (
      !Mouse.mouseOverEntity?.components.hitDetection.checkCollision(
        Mouse.cursor
      )
    ) {
      Mouse.mouseOverEntity?.setState(STATE.MOUSEOFF);
      Mouse.setCursorStyle(STYLES.PLAIN);
      Mouse.mouseOverEntity = null;
    }
  }
}
