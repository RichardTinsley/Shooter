import { Shape } from "../classes/Shape.js";

export class Rectangle extends Shape {
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = this.lineJoin;
    ctx.lineWidth = this.strokeWidth;

    ctx.fillStyle = this.fillColour;
    ctx.fillRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.size.width,
      this.size.height
    );

    ctx.strokeStyle = this.strokeColour;
    ctx.strokeRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.size.width,
      this.size.height
    );
  }

  update(): void {}
}
