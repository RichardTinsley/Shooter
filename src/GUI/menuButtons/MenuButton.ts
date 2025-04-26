import { Position } from "../../constants/types.js";
import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";

export class MenuButton {
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

  mouseClick(): void {
    this.setScreen();
  }

  mouseOver(state: number): void {
    this.label.setState(state);
  }

  getType(): string {
    return "MenuButton";
  }
}

// export interface IMenuButtonState {
//   menuButton: MenuButton;
//   draw(ctx: CanvasRenderingContext2D): void;
//   update(): void;
// }

// export class MenuButton {
//   public state!: IMenuButtonState;

//   public getCurrentState(): IMenuButtonState {
//     return this.state;
//   }

//   mouseClick(): void {
//     this.setScreen();
//   }

//   mouseOver(): void {
//     this.state = new
//   }

//   getType(): string {
//     return "MenuButton";
//   }

// }
