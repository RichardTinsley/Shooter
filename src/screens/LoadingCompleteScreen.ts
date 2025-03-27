import { TextFactory } from "../texts/TextFactory.js";
import { LoadingScreenBase } from "./LoadingScreenBase.js";

export class LoadingCompleteScreen extends LoadingScreenBase {
  private begin = TextFactory.createBeginText();

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.begin.draw(ctx);
  }
  update(): void {
    this.begin.update();
  }
}
