import { HitCircle, Cursor, Position } from "../constants/types";
import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";

export class CircleHitDetection {
  protected hitCircle = {
    x: 0,
    y: 0,
    radius: 0,
  };

  setPosition(position: Position): this {
    this.hitCircle.x = position.x;
    this.hitCircle.y = position.y;
    return this;
  }

  setWidth(width: number): this {
    this.hitCircle.radius = width / 2;
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
