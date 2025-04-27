import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { MouseOver } from "./states/MouseOver.js";
import { MouseOff } from "./states/MouseOff.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";

export interface IMenuButtonState {
  menuButton: MenuButton;
}

export class MenuButton {
  public state!: IMenuButtonState;
  public hitDetection;
  public position!: Position;
  public isMouseOver: boolean = false;

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
    this.mouseOver();
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
    if (this.hitDetection.checkCollision(Mouse.cursor)) {
      Mouse.cursor.mouseOverEntity = this;
      if (!this.isMouseOver) {
        this.isMouseOver = true;
        Mouse.setCursor(STYLES.MENUBUTTON);
        this.state = new MouseOver(this);
      }
    } else {
      if (this.isMouseOver) {
        this.isMouseOver = false;
        Mouse.setCursor(STYLES.PLAIN);
        this.state = new MouseOff(this);
      }
    }
  }
}
