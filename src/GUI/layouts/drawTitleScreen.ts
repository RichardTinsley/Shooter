import { SIZES } from "../../constants/game.js";
import { TextFactory } from "../../entities/texts/TextFactory.js";

export function drawIntroScreen(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);

  const title = TextFactory.text()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: 100 })
    .setText("Death Sorcery")
    .setSize(SIZES.TEXT_TITLE);

  const dslogo = document.getElementById("dslogo") as HTMLImageElement;

  title.draw(ctx);
  ctx.drawImage(
    dslogo,
    SIZES.GAME_WIDTH_HALF - dslogo.width / 2,
    SIZES.GAME_HEIGHT_HALF - dslogo.height / 2
  );
}
