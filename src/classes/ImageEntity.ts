import { AnimationType, VisualType } from "../types/entities.js";
import { Entity } from "./Entity.js";

export default class Enemy extends Entity {
  protected information!: VisualType & AnimationType;
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.translate(this.information.position.x, this.information.position.y);
    ctx.scale(this.information.direction, 1);
    ctx.drawImage(
      this.information.visual as CanvasImageSource,
      this.information.size.width * this.information.frame,
      this.information.size.height * this.information.row,
      this.information.size.width,
      this.information.size.height,
      0 - this.information.halfWidth + this.drawOffsetX,
      0 - this.information.scaledSize.height + this.drawOffsetY,
      this.information.scaledSize.width,
      this.information.scaledSize.height
    );

    ctx.restore();
  }
}
