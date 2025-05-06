import { STATE } from "../constants/states.js";
import { Cursor } from "../constants/types.js";

export enum STYLES {
  PLAIN = "Plain",
  TOWER = "Tower",
  ENEMY = "Enemy",
  MENUBUTTON = "MenuButton",
}
let mouseOverEntity: any;

export class Mouse {
  // static enemySelected: IClickable;
  // static towerSelected: IClickable;

  static cursor: Cursor = {
    x: 0,
    y: 0,
    radius: 1.5,
    width: 3,
    height: 3,
    style: document.getElementById("canvas")!.style,
  };

  constructor() {
    Mouse.setCursorStyle(STYLES.PLAIN);

    window.addEventListener("mousemove", (e) => {
      Mouse.cursor.x = e.offsetX;
      Mouse.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      if (mouseOverEntity) {
        mouseOverEntity.mouseClick();
        Mouse.setCursorStyle(STYLES.PLAIN);
      }
    });
  }

  static setCursorStyle(style: string): void {
    Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  static mouseOver(entity: any, style: string) {
    if (entity.components.hitDetection.checkCollision(Mouse.cursor)) {
      if (
        mouseOverEntity?.components.position.y > entity.components.position.y
      ) {
        entity.setState(STATE.MOUSEOFF);
      } else {
        Mouse.setCursorStyle(style);
        mouseOverEntity = entity;
        mouseOverEntity.setState(STATE.MOUSEOVER);
      }
    } else {
      entity.setState(STATE.MOUSEOFF);
    }
  }

  update() {
    if (
      !mouseOverEntity?.components.hitDetection.checkCollision(Mouse.cursor)
    ) {
      Mouse.setCursorStyle(STYLES.PLAIN);
      mouseOverEntity?.setState(STATE.MOUSEOFF);
      mouseOverEntity = null;
    }
  }
}
