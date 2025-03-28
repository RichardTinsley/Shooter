import { SIZES } from "../constants/game.js";
import { Position, HitBox } from "../constants/types.js";
import { State, IState } from "../states/State.js";

export class MenuButton {
  public size = SIZES.TEXT_MENUITEM;
  public width: number;
  public hitBox!: HitBox;
  public position: Position;
  public assignedState!: IState;

  constructor(
    public menuButton: any,
    public state: State,
    public text: string,
    x: number,
    y: number
  ) {
    this.menuButton.setText(this.text).setPosition(x, y);

    this.width = this.text.length * (this.size / 1.75);

    this.position = { x: x, y: y };

    this.hitBox = {
      x: this.position.x - this.width / 2,
      y: this.position.y - this.size / 2,
      width: this.width,
      height: this.size,
    };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuButton.draw(ctx);
  }

  update(): void {
    this.menuButton.update();
  }

  changeState(state: IState): void {
    this.state.setState(state);
  }
}
