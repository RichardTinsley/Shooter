import { SceneBase } from "./SceneBase.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { SIZES } from "../constants/game.js";
import { load, assetListLength, assets } from "../utilities/assetLoaders.js";
import { MenuLoading } from "../menus/MenuLoading.js";

export class SceneLoading extends SceneBase {
  private menu = new MenuLoading();

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
    this.menu.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(): void {
    this.menu.update();
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
