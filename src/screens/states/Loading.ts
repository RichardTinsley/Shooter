import { SCREEN_SIZES } from "../../constants/screenSizes.js";
import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
import { IScreenState, Screen } from "../Screen.js";

export class Loading implements IScreenState {
  private assetLoader = new AssetLoader();

  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  private loadingBar = new StatusBar()
    .setSharedPosition({ x: SCREEN_SIZES.SCREEN_WIDTH_HALF, y: SCREEN_SIZES.SCREEN_HEIGHT * 0.9 })
    .setSharedSize({ width: SCREEN_SIZES.SCREEN_WIDTH / 3, height: 10 })
    .setDrawOffsets(0)
    .setStatus(0, this.assetLoader.getAwaitingAssetsSize());

  constructor(public screen: Screen) {
    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      .then(() => console.log("this.screen.beginScreen()"));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SCREEN_SIZES.SCREEN_WIDTH, SCREEN_SIZES.SCREEN_HEIGHT);
    this.loadingBar.draw(ctx);

    ctx.drawImage(
      this.dslogo,
      SCREEN_SIZES.SCREEN_WIDTH_HALF - this.dslogo.width / 2,
      SCREEN_SIZES.SCREEN_HEIGHT_HALF - this.dslogo.height / 2
    );
  }

  update(): void {}

  assetLoaded = (): void => this.loadingBar.increaseCurrentStatus(1);
}
