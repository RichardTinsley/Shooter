import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { MouseOver } from "./states/MouseOver.js";
import { MouseOff } from "./states/MouseOff.js";

export interface IMenuButtonState {
  menuButton: MenuButton;
}

export class MenuButton {
  public state!: IMenuButtonState;
  public hitDetection;
  public position!: Position;

  constructor(public setScreen: Function, public label: any) {
    this.hitDetection = new HitDetectionSquare(
      this.label.getWidth(),
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

  public getCurrentState(): IMenuButtonState {
    return this.state;
  }

  mouseClick(): void {
    this.setScreen();
  }

  mouseOver(): void {
    if (!(this.state instanceof MouseOver)) this.state = new MouseOver(this);
  }

  mouseOff(): void {
    if (!(this.state instanceof MouseOff)) this.state = new MouseOff(this);
  }

  getType(): string {
    return "MenuButton";
  }
}
