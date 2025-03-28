import { LoadingCompleteMenu } from "../menus/LoadingCompleteMenu.js";
import { LoadingScreenBase } from "./LoadingScreenBase.js";

export class LoadingCompleteScreen extends LoadingScreenBase {
  constructor() {
    super();
    this.menu = new LoadingCompleteMenu();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.menu.draw(ctx);
  }
  update(): void {
    super.update();
    this.menu.update();
  }
}
