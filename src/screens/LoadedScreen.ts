import { TextFactory } from "../texts/TextFactory.js";
import { LoadScreenBase } from "./LoadScreenBase.js";

export class LoadedScreen extends LoadScreenBase {
  begin = TextFactory.createBeginText();

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
