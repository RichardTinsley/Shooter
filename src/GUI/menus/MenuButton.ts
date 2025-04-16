import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { Screen } from "../../screens/Screen.js";

export class MenuButton {
  public width: number;
  public hitDetection;
  public position!: Position;

  constructor(
    public label: any,
    public screen: Screen,
    public setScreen: Function
  ) {
    this.width = this.label.getWidth();

    this.hitDetection = new HitDetectionSquare(
      this.width,
      this.label.getHeight()
    );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.label.draw(ctx);
  }

  update(): void {
    this.label.update();
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    this.label.setPosition(position);
    this.hitDetection.setHitBox(position);
    return this;
  }

  mouseClick(): void {
    this.setScreen();
  }

  mouseOver(state: number): void {
    this.label.setState(state);
  }

  getType(): string {
    return "MenuButton";
  }
}
