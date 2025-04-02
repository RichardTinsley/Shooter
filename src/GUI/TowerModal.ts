import { COLOURS } from "../constants/colours.js";
import { Position } from "../constants/types.js";
import { IDrawable } from "../interfaces/IEntity.js";

export class TowerModal implements IDrawable {
  private offset: number = 10;
  private radius: number = this.offset;

  constructor(public position: Position, private maxRadius: number) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.drawCircleGradient(ctx);
  }

  update(): void {
    if (this.radius < this.maxRadius) this.radius += this.offset * 2;
  }

  drawCircleGradient(ctx: CanvasRenderingContext2D) {
    const radialGradient = ctx.createRadialGradient(
      this.position.x,
      this.position.y,
      this.radius - this.offset,
      this.position.x,
      this.position.y,
      this.radius / 1.75
    );

    radialGradient.addColorStop(0, COLOURS.TOWER_MODAL_ALPHA);
    radialGradient.addColorStop(1, "#00000000");

    ctx.beginPath();
    ctx.fillStyle = radialGradient;
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius - this.offset / 2,
      0,
      2 * Math.PI
    );
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = COLOURS.TOWER_MODAL;
    ctx.stroke();
  }

  setPosition(position: Position): this {
    throw new Error("Method not implemented.");
  }

  getPosition(): Position {
    throw new Error("Method not implemented.");
  }
}
