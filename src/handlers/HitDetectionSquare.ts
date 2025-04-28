import { HitBox, Position, Cursor } from "../constants/types.js";
import { checkHitBoxCollision } from "../utilities/collisionDetection.js";

export class HitDetectionSquare {
  protected hitBox!: HitBox;

  setHitBox(position: Position, width: number, height: number): this {
    this.hitBox = {
      x: position.x - width / 2,
      y: position.y - height / 2,
      width: width,
      height: height,
    };
    return this;
  }

  getHitBox(): HitBox {
    return this.hitBox;
  }

  checkCollision(cursor: Cursor): boolean {
    return checkHitBoxCollision(cursor, this.hitBox);
  }
}
