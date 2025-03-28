import { Screen } from "./Screen.js";
import { TextFactory } from "../texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingScreen.js";
import { BeginMenu } from "../GUI/BeginMenu.js";

export class BeginScreen extends Screen {
  private title: any = TextFactory.createTitleText();
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;
  menu = BeginMenu();
  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroLogo(ctx, this.title, this.dslogo);
    super.draw(ctx);
  }
  update(): void {
    super.update();
  }
}
