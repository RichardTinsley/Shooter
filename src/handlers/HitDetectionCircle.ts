import { Cursor, Position } from "../constants/types";
import { checkCircleCollision } from "../utilities/collisionDetection.js";

export class HitDetectionCircle {
  protected position!: Position;
  protected radius!: number;
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
      this.getPosition(),
      cursor.radius,
      this.radius
    );
  }

  getRadius(): number {
    return this.radius;
  }

  getPosition(): Position {
    return { x: this.position.x, y: this.position.y - this.drawOffsetY };
  }

  setDrawOffsets(offsetY: number): this {
    this.drawOffsetY = offsetY;
    return this;
  }
}
