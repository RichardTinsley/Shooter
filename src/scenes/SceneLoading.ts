import { SceneBase } from "./SceneBase.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { SIZES } from "../constants/game.js";
import { load, assetListLength, assets } from "../utilities/assetLoaders.js";
import { TextFactory, TEXTS } from "../texts/TextFactory.js";

export class SceneLoading extends SceneBase {
  private title: any = TextFactory.createText(TEXTS.TITLE);
  private summoning: any = TextFactory.createText(TEXTS.SUMMONING);
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  private loadingBar = new LoadingBar({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 80,
  }).setMaxStatus(assetListLength);

  constructor() {
    super();
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.title.draw(ctx);

    ctx.drawImage(
      this.dslogo,
      SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2,
      SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2
    );

    this.summoning.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(): void {
    this.summoning.update();
  }

  assetLoaded = (fileName: any) => {
    console.log(`${fileName.fileName} Loaded.`);
    this.loadingBar.setCurrentStatus(1);
  };

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(`A total of ${assets.size} assets have been loaded.`);
      });
  }
}
