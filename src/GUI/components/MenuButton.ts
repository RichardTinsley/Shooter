import { SIZES } from "../../constants/game.js";
import { Position, HitBox } from "../../constants/types.js";
import { State } from "../../states/State.js";

export enum LABELS {
  BEGIN = "Begin!",
  NEWGAME = "New Game",
  OPTIONS = "Options",
  ABOUT = "About",
}

export class MenuButton {
  public size = SIZES.TEXT_MENUITEM;
  public width: number;
  public hitBox!: HitBox;
  public position!: Position;

  constructor(
    public menuButton: any,
    public state: State,
    public setState: Function,
    public text: string
  ) {
    this.menuButton.setText(this.text);
    this.width = this.text.length * (this.size / 1.75);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuButton.draw(ctx);
  }

  update(): void {
    this.menuButton.update();
  }

  setPosition(x: number, y: number): this {
    this.menuButton.setPosition(x, y);
    this.position = { x: x, y: y };

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
}
