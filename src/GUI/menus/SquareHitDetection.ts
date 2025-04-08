import { Cursor, HitBox, Position } from "../../constants/types.js";
import { checkHitBoxCollision } from "../../utilities/collisionDetection.js";
import { drawSquareHitBox } from "../../utilities/drawShapes.js";

export class SquareHitDetection {
  protected hitBox!: HitBox;

  constructor(public width: number, public height: number) {}

  setHitBox(position: Position): this {
    this.hitBox = {
      x: position.x - this.width / 2,
      y: position.y - this.height / 2,
      width: this.width,
      height: this.height,
    };

    return this;
  }

  checkCollision(cursor: Cursor): boolean {
    return checkHitBoxCollision(cursor, this.hitBox);
  }

  drawHitbox(ctx: CanvasRenderingContext2D) {
    drawSquareHitBox(ctx, this.hitBox);
  }
}
