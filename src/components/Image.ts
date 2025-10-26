import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class ImageComponent extends ComponentBaseClass {
  protected currentFrame: number = 0;
  protected currentRow: number = 0;
  protected direction: number = 1;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.translate(this.information.position.x, this.information.position.y);
    ctx.scale(this.direction, 1);
    ctx.drawImage(
      this.information.image,
      this.information.size.width * this.currentFrame,
      this.information.size.height * this.currentRow,
      this.information.size.width,
      this.information.size.height,
      0 - this.information.halfWidth + this.drawOffsetX,
      0 - this.information.scaledSize.height + this.drawOffsetY,
      this.information.scaledSize.width,
      this.information.scaledSize.height
    );

    ctx.restore();
  }

  update(): void {
    return;
  }
}
