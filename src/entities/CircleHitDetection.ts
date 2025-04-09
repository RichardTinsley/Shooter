import { HitCircle, Cursor, Position } from "../constants/types";
import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";

export class CircleHitDetection {
  protected hitCircle!: HitCircle;

  setHitCircle(position: Position, width: number): this {
    this.hitCircle = {
      x: position.x,
      y: position.y,
      radius: width / 2,
    };
    return this;
  }

  checkCollision(cursor: Cursor): boolean {
    return checkCircleCollision(
      cursor,
      this.hitCircle,
      cursor.radius,
      this.hitCircle.radius
    );
  }

  drawHitbox(ctx: CanvasRenderingContext2D) {
    drawCircleHitbox(ctx, this.hitCircle);
  }
}
