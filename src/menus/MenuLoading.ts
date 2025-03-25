import { Menu } from "./Menu.js";
import { TextFactory, TEXTS } from "../texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { Text } from "../texts/Text";

export class MenuLoading extends Menu {
  menuItems: Text[] = [];
  private title: any = TextFactory.createText(TEXTS.TITLE);
  private summoning: any = TextFactory.createText(TEXTS.SUMMONING);
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  constructor() {
    super();
    this.menuItems.push(this.title);
    this.menuItems.push(this.summoning);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);

    ctx.drawImage(
      this.dslogo,
      SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2,
      SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2
    );
  }
  update(): void {
    super.update();
  }
}
