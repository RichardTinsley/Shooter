import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";

export class MenuButton {
  public position!: Position;
  public hitDetection!: HitDetectionSquare;
  public label: any;

  constructor(public setScreen: Function, label: any) {
    this.label = label;
    this.hitDetection = new HitDetectionSquare();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.label.draw(ctx);
  }

  update(): void {
    this.label.update();
    Mouse.mouseOver(this, STYLES.MENUBUTTON);
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    this.label.setPosition(position);
    this.hitDetection.setHitBox(
      position,
      this.label.getWidth(),
      this.label.getHeight()
    );
    return this;
  }

  mouseClick(): void {
    this.setScreen();
  }

  setState(state: number) {
    this.label.setState(state);
  }
}
