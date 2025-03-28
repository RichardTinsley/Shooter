import { SIZES } from "../constants/game.js";
import { Position, HitBox } from "../constants/types.js";

export class MenuButtonBase {
  public menuItem: any;
  public size = SIZES.TEXT_MENUITEM;
  public width: number;
  public hitBox!: HitBox;
  public position: Position;

  constructor(public text: string, x: number, y: number) {
    this.width = this.text.length * (this.size / 1.75);

    this.position = { x: x, y: y };

    this.hitBox = {
      x: this.position.x - this.width / 2,
      y: this.position.y - this.size / 2,
      width: this.width,
      height: this.size,
    };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuItem.draw(ctx);
  }

  update(): void {
    this.menuItem.update();
  }
  //   collisionDetection(mouse) {
  //     return !checkBoxCollision(mouse, this.hitBox);
  //   }
}
