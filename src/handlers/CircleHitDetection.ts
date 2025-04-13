import { Cursor, Position } from "../constants/types";
import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";

export class CircleHitDetection {
  protected position!: Position;
  protected radius!: number;

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  setWidth(width: number): this {
    this.radius = width / 2;
    return this;
  }

  checkCollision(cursor: Cursor): boolean {
    return checkCircleCollision(
      cursor,
      this.position,
      cursor.radius,
      this.radius
    );
  }

  drawHitbox(ctx: CanvasRenderingContext2D) {
    drawCircleHitbox(ctx, this.position, this.radius);
  }
}
