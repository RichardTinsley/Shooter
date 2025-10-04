import { Component } from "../../classes/Component.js";
import { COLOURS, getColour } from "../../constants/colours.js";
import { Rectangle } from "./Rectangle.js";

export class StatusBar extends Component {
  private currentStatus!: number;
  private maximumStatus!: number;

  public statusBox = new Rectangle();
  public statusBar = new Rectangle();

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.statusBox.draw(ctx);

    ctx.fillRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.size.width,
      this.size.height
    );

    this.statusBar.draw(ctx);
  }

  update(): void {
    this.statusBar.setSizePointer({
      width: this.size.width * (this.currentStatus / this.maximumStatus),
      height: this.size.height,
    });
  }

  initialise(): this {
    this.statusBox
      .setPositionPointer(this.position)
      .setSizePointer(this.size)
      .setStrokeWidth(this.size.height * 0.8)
      .setFillColour(getColour(COLOURS.BLACK));

    this.statusBar
      .setPositionPointer(this.position)
      .setSizePointer({
        width: this.size.width * (this.currentStatus / this.maximumStatus),
        height: this.size.height,
      })
      .setStrokeWidth(this.size.height / 4)
      .setStrokeColour(getColour(COLOURS.BLACK))
      .setFillColour(getColour(COLOURS.GREEN));
    console.log(this.size.width, this.currentStatus / this.maximumStatus);
    return this;
  }

  setStatus(currentStatus: number, maximumStatus: number): this {
    this.currentStatus = currentStatus;
    this.maximumStatus = maximumStatus;
    return this;
  }

  getStatus(): number {
    return this.currentStatus;
  }

  increaseStatusBar(increment: number): void {
    this.currentStatus += increment;
  }

  decreaseStatusBar(decrement: number): void {
    this.currentStatus -= decrement;
  }
}
