import { Screen } from "../screens/Screen.js";
import { Cursor } from "../constants/types.js";
import { ANIMATION } from "../constants/animation.js";
import { EmptyTowerSpot } from "../entities/towers/emptyTowerSpot.js";
// import { Enemy } from "../entities/enemies/Enemy.js";
import { MenuButton } from "../GUI/menus/MenuButton.js";

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

  constructor(state: Screen) {
    window.addEventListener("mousemove", (e) => {
      this.cursor.x = e.offsetX;
      this.cursor.y = e.offsetY;
    });

    window.addEventListener("click", () => this.mouseClick());
  }

  update(screen: Screen) {
    this.mouseOver(screen.getCurrentState().getArray());
    this.setCursor();
  }

  mouseOver(array: Array<any>) {
    this.mouseOverItem = undefined;
    array.forEach((item: any) => {
      if (item.hitDetection.checkCollision(this.cursor)) {
        item.mouseOver(ANIMATION.MOUSEOVER);
        this.mouseOverItem = item;
      } else {
        item.mouseOver(ANIMATION.NORMAL);
      }
    });
  }

  mouseClick() {
    if (!this.mouseOverItem) return;

    if (this.mouseOverItem instanceof MenuButton)
      this.mouseOverItem.changeScreen();

    // if (this.mouseOverItem instanceof Enemy)
    // if(Mouse.selectedEnemy !== this.mouseOverItem)
    //   Mouse.selectedEnemy.mouseClick("NOLONGERSELECTED")
    //   Mouse.selectedEnemy = this.mouseOverItem
    //   Mouse.selectedEnemy.mouseClick()

    this.mouseOverItem = undefined;
  }

  setCursor() {
    let style: string = "Plain";
    if (this.mouseOverItem instanceof MenuButton) style = "MenuButton";
    if (this.mouseOverItem instanceof EmptyTowerSpot) style = "Tower";
    // if (this.mouseOverItem instanceof Enemy) style = "Enemy";
    this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
  }

  getCursor(): Cursor {
    return this.cursor;
  }
}
