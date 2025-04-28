import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { MouseOver } from "./states/MouseOver.js";
import { MouseOff } from "./states/MouseOff.js";
import { Mouse, CURSOR_STYLES } from "../../handlers/Mouse.js";

export interface IMenuButtonState {
  menuButton: MenuButton;
}

export class MenuButton {
  public state!: IMenuButtonState;
  public position!: Position;
  public hitDetection!: HitDetectionSquare;
  public isMouseOver: boolean = false;

  constructor(public setScreen: Function, public label: any) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.label.draw(ctx);
  }

  update(): void {
    this.label.update();
    this.mouseOver();
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    this.label.setPosition(position);
    this.hitDetection = new HitDetectionSquare().setHitBox(
      position,
      this.label.getWidth(),
      this.label.getHeight()
    );
    return this;
  }

  public getCurrentState(): IMenuButtonState {
    return this.state;
  }

  mouseClick(): void {
    this.setScreen();
  }

  mouseOver(): void {
    Mouse.mouseOverEntity(this, MouseOver, MouseOff, CURSOR_STYLES.MENUBUTTON);
  }
}
