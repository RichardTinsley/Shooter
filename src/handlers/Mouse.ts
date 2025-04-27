import { Cursor } from "../constants/types.js";
const size: number = 3;

export enum STYLES {
  PLAIN = "Plain",
  TOWER = "Tower",
  ENEMY = "Enemy",
  MENUBUTTON = "MenuButton",
}

export class Mouse {
  // static enemySelected: Enemy; //IClickAble
  // static towerSelected:Tower; //IClickAble

  static cursor: Cursor = {
    x: 0,
    y: 0,
    radius: size,
    width: size,
    height: size,
    style: document.getElementById("canvas")!.style,
    mouseOverEntity: undefined,
  };

  constructor() {
    window.addEventListener("mousemove", (e) => {
      Mouse.cursor.x = e.offsetX;
      Mouse.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () =>
      Mouse.cursor.mouseOverEntity!.mouseClick()
    );
  }

  static setCursor(style: string) {
    Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }
}
