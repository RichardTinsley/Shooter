import { TextFactory } from "../texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { assetListLength } from "../utilities/assetLoaders.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { GUI } from "./GUI.js";

export class LoadingGUI extends GUI {
  private title: any = TextFactory.createTitleText();
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;
  private summoning: any = TextFactory.createSummongText();

  loadingBar = new LoadingBar({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 80,
  }).setMaxStatus(assetListLength);

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroLogo(ctx, this.title, this.dslogo);
    this.summoning.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(): void {
    this.summoning.update();
  }
}

export function drawIntroLogo(
  ctx: CanvasRenderingContext2D,
  title: any,
  dslogo: HTMLImageElement
) {
  ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
  title.draw(ctx);
  ctx.drawImage(
    dslogo,
    SIZES.GAME_WIDTH_HALF - dslogo.width / 2,
    SIZES.GAME_HEIGHT_HALF - dslogo.height / 2
  );
}
