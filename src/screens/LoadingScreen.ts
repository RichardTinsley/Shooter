import { TextFactory } from "../texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { LoadingScreenBase } from "./LoadingScreenBase.js";
import { assetListLength } from "../utilities/assetLoaders.js";
import { LoadingBar } from "../components/LoadingBar.js";

export class LoadingScreen extends LoadingScreenBase {
  private summoning: any = TextFactory.createSummongText();
  loadingBar = new LoadingBar({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 80,
  }).setMaxStatus(assetListLength);

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.summoning.draw(ctx);
    this.loadingBar.draw(ctx);
  }
  update(): void {
    this.summoning.update();
  }
}
