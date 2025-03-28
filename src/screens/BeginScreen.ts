import { Screen } from "./Screen.js";
import { TextFactory } from "../texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingScreen.js";

export class BeginScreen extends Screen {
  private title: any = TextFactory.createTitleText();
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    drawIntroLogo(ctx, this.title, this.dslogo);
  }
  update(): void {
    super.update();
  }
}
