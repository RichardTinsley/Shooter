import { Cursor } from "../constants/types.js";
const size: number = 3;

export enum CURSOR_STYLES {
  PLAIN = "Plain",
  TOWER = "Tower",
  ENEMY = "Enemy",
  MENUBUTTON = "MenuButton",
}

const cursor: Cursor = {
  x: 0,
  y: 0,
  radius: size,
  width: size,
  height: size,
  style: document.getElementById("canvas")!.style,
  mouseOverEntity: null,
};

export class Mouse {
  // static enemySelected: Enemy; //IClickAble
  // static towerSelected:Tower; //IClickAble

  constructor() {
    Mouse.setCursor(CURSOR_STYLES.PLAIN);

    window.addEventListener("mousemove", (e) => {
      cursor.x = e.offsetX;
      cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => {
      if (cursor.mouseOverEntity !== null) {
        cursor.mouseOverEntity.mouseClick();
        // Mouse.setCursor(STYLES.PLAIN);
      }
    });
  }

  static setCursor(style: string) {
    cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  static mouseOverEntity(
    entity: any,
    MouseOver: any,
    MouseOff: any,
    style: string
  ): void {
    if (entity.hitDetection.checkCollision(cursor)) {
      if (!entity.isMouseOver) {
        entity.isMouseOver = !entity.isMouseOver;
        Mouse.setCursor(style);
        entity.state = new MouseOver(entity);
        cursor.mouseOverEntity = entity;
      }
    } else {
      if (entity.isMouseOver) {
        entity.isMouseOver = !entity.isMouseOver;
        Mouse.setCursor(CURSOR_STYLES.PLAIN);
        entity.state = new MouseOff(entity);
        cursor.mouseOverEntity = null;
      }
    }
  }
}
