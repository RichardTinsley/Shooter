import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
import { MenuButtonComponents } from "./components/MenuButtonComponents.js";

export class MenuButton {
  public components = new MenuButtonComponents();

  constructor(public setScreen: Function, label: any) {
    this.components.label = label;
    this.components.hitDetection = new HitDetectionSquare();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.components.label.draw(ctx);
  }

  update(): void {
    this.components.label.update();
    Mouse.mouseOver(this, STYLES.MENUBUTTON);
  }

  setPosition(position: Position): this {
    this.components.position = { ...position };
    this.components.label.setPosition(position);
    this.components.hitDetection.setHitBox(
      position,
      this.components.label.getWidth(),
      this.components.label.getHeight()
    );
    return this;
  }

  mouseClick(): void {
    this.setScreen();
  }

  setState(state: number) {
    this.components.label.setState(state);
  }
}
