import { load, assetListLength } from "../utilities/assetLoaders.js";
import { ALL_ASSETS } from "../constants/assets.js";
import { IScreenState } from "./Screen.js";
import { SIZES } from "../constants/sizes.js";
import { TextFactory } from "../GUI/texts/TextFactory.js";
import { LoadingBar } from "../GUI/components/LoadingBar.js";
import { Menu } from "../GUI/menus/Menu.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";

export class LoadingScreen implements IScreenState {
  private logo = new deathSorceryLogoLayout();
  menu!: Menu;

  private summoning = TextFactory.textFade()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 140 })
    .setText("Summoning...")
    .setHeight(SIZES.TEXT_MENUITEM);

  private loadingBar = new LoadingBar(assetListLength)
    .setPosition({
      x: SIZES.GAME_WIDTH_HALF,
      y: SIZES.GAME_HEIGHT - 80,
    })
    .setDrawOffsets(0);

  constructor(public buttons: any) {
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.logo.draw(ctx);
    this.summoning.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(): void {
    this.summoning.update();
  }

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      .then(() => console.log(`${ALL_ASSETS.size} assets have been loaded.`));
  }

  assetLoaded = (fileName: any) => {
    this.loadingBar.setCurrentStatus(1);
    console.log(`${fileName.fileName} Loaded.`);
    if (this.loadingBar.getCurrentStatus() === assetListLength)
      this.buttons.beginScreen();
  };
}
