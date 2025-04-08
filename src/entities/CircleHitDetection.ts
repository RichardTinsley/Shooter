import { HitCircle, Cursor, Position } from "../constants/types";
import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";

export class CircleHitDetection {
  protected hitCircle!: HitCircle;

  constructor(public width: number, public height: number) {}

  setHitCircle(position: Position): this {
    this.hitCircle = {
      x: position.x,
      y: position.y,
      radius: this.width / 2,
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

  mouseOver(state: number) {
    return;
  }
}
