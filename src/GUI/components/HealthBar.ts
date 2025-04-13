import { COLOURS } from "../../constants/colours.js";
import { Position } from "../../constants/types.js";
import { drawRectangle } from "../../utilities/drawShapes.js";
import { StatusBar } from "./StatusBar.js";

export class HealthBar extends StatusBar {
  readonly statusBarHeight: number = 3;
  statusBarLength!: number;
  protected lineWidth: number = 5;

  protected healthBarColour: string = COLOURS.BRIGHT_GREEN;

  constructor() {
    super();
    this.maxStatus = 100;
    this.currentStatus = 100;
    // this.maxStatus = randomFloat(HUB.wave());
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = this.lineJoin;

    super.draw(ctx);

    ctx.lineWidth = 2;
    drawRectangle(
      ctx,
      {
        x: this.position.x - this.drawOffsetX,
        y: this.position.y - this.drawOffsetY,
      },
      this.statusBarLength,
      this.statusBarHeight,
      COLOURS.NONE,
      COLOURS.BLACK
    );

    drawRectangle(
      ctx,
      {
        x: this.position.x - this.drawOffsetX,
        y: this.position.y - this.drawOffsetY,
      },
      this.statusBarLength * (this.currentStatus / this.maxStatus),
      this.statusBarHeight,
      this.healthBarColour,
      COLOURS.NONE
    );
  }

  setCurrentStatus(damage: number): void {
    this.currentStatus -= damage;

    if (this.currentStatus < 0) this.currentStatus = 0;

    if (this.currentStatus < this.maxStatus * 33)
      this.healthBarColour = COLOURS.RED;
  }

  setWidth(length: number): this {
    this.statusBarLength = length / 1.5;
    return this;
  }
}
