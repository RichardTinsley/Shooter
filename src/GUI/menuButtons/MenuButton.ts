import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { Mouse, CURSOR_STYLES } from "../../handlers/Mouse.js";
import { STATE } from "../../constants/states.js";

export class MenuButton {
  public position!: Position;
  public hitDetection!: HitDetectionSquare;

  constructor(public setScreen: Function, public label: any) {
    this.label.setState(STATE.MOUSEOFF);
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
    this.hitDetection = new HitDetectionSquare().setHitBox(
      position,
      this.label.getWidth(),
      this.label.getHeight()
    );
    return this;
  }

  mouseClick(): void {
    this.setScreen();
  }

  mouseOver(): void {
    if (this.hitDetection.checkCollision(Mouse.cursor)) {
      if (this.label.getState() === STATE.MOUSEOFF) {
        Mouse.setCursor(this, CURSOR_STYLES.MENUBUTTON);
        this.label.setState(STATE.MOUSEOVER);
      }
    } else {
      if (this.label.getState() === STATE.MOUSEOVER) {
        Mouse.setCursor(null);
        this.label.setState(STATE.MOUSEOFF);
      }
    }
  }
}
