import { SIZES } from "../../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";

export class deathSorceryLogoLayout {
  private title = TextFactory.text()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: 100 })
    .setText("Death Sorcery")
    .setHeight(SIZES.TEXT_TITLE);

  private dslogo = document.getElementById("dslogo") as HTMLImageElement;
  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);

    this.title.draw(ctx);
    ctx.drawImage(
      this.dslogo,
      SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2,
      SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2
    );
  }

  update(): void {
    return;
  }
}
