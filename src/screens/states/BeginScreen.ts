import { GUIComponentFactory } from "../../factories/GUIComponentFactory.js";
import { TextFactory } from "../../factories/TextFactory.js";
import { IScreenState, Screen } from "../Screen.js";

export class BeginScreen implements IScreenState {
  private DSLogo = GUIComponentFactory.DSLogo();
  private DSTitle = TextFactory.DSTitle();

  constructor(public state: Screen) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.DSLogo.draw(ctx);
    this.DSTitle.draw(ctx);
  }

  update(): void {}
}
