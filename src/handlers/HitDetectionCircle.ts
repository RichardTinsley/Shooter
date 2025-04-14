import { Cursor, Position } from "../constants/types";
import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";

export class HitDetectionCircle {
  protected position!: Position;
  protected radius!: number;

  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  setPosition(position: Position): this {
    this.position = position;
    return this;
  }

  setWidth(width: number): this {
    this.radius = width / 2;
    return this;
  }

  checkCollision(cursor: Cursor): boolean {
    return checkCircleCollision(
      cursor,
      { x: this.position.x, y: this.position.y - this.drawOffsetY },
      cursor.radius,
      this.radius
    );
  }

  drawHitbox(ctx: CanvasRenderingContext2D) {
    drawCircleHitbox(
      ctx,
      { x: this.position.x, y: this.position.y - this.drawOffsetY },
      this.radius
    );
  }

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }
}
