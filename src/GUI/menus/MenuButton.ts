import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { Screen } from "../../screens/Screen.js";
import { Text } from "../texts/Text.js";

export class MenuButton {
  public width: number;
  public hitDetection;
  public position!: Position;

  constructor(
    public menuLabel: Text,
    public screen: Screen,
    public setScreen: Function
  ) {
    this.width =
      this.menuLabel.getText().length * (this.menuLabel.getSize() / 1.85);

    this.hitDetection = new HitDetectionSquare(
      this.width,
      this.menuLabel.getSize()
    );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuLabel.draw(ctx);
  }

  update(): void {
    this.menuLabel.update();
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    this.menuLabel.setPosition(position);
    this.hitDetection.setHitBox(position);
    return this;
  }

  changeScreen(): void {
    this.setScreen();
  }

  mouseOver(state: number): void {
    this.menuLabel.setState(state);
  }
}
