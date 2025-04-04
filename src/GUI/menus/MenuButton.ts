import { SIZES } from "../../constants/game.js";
import { Position, HitBox, Cursor } from "../../constants/types.js";
import { Screen } from "../../screens/Screen.js";
import { Text } from "../texts/Text.js";
import { checkHitBoxCollision } from "../../utilities/collisionDetection.js";
import { drawSquareHitBox } from "../../utilities/drawShapes.js";

export class MenuButton {
  public size = SIZES.TEXT_MENUITEM;
  public width: number;
  public hitBox!: HitBox;
  public position!: Position;

  constructor(
    public menuLabel: Text,
    public state: Screen,
    public setState: Function
  ) {
    this.width = this.menuLabel.getText().length * (this.size / 1.75);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuLabel.draw(ctx);
  }

  update(): void {
    this.menuLabel.update();
  }

  setPosition(position: Position): this {
    this.menuLabel.setPosition(position);
    this.position = { ...position };

    this.hitBox = {
      x: this.position.x - this.width / 2,
      y: this.position.y - this.size / 2,
      width: this.width,
      height: this.size,
    };

    return this;
  }

  changeState(): void {
    this.setState();
  }

  mouseOver(state: number): void {
    this.menuLabel.setState(state);
  }

  checkCollision(cursor: Cursor): boolean {
    return checkHitBoxCollision(cursor, this.hitBox);
  }

  drawHitbox(ctx: CanvasRenderingContext2D) {
    drawSquareHitBox(ctx, this.hitBox);
  }
}
