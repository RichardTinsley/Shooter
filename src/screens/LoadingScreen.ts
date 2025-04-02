import { load, assetListLength } from "../utilities/assetLoaders.js";
import { ALL_ASSETS } from "../constants/assets.js";
import { Screen, IScreenState } from "./Screen.js";
import { SIZES } from "../constants/game.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
import { LoadingBar } from "../GUI/components/LoadingBar.js";
import { Menu } from "../GUI/menus/Menu.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";

export class LoadingScreen implements IScreenState {
  private logo = new deathSorceryLogoLayout();

  private summoning: any = TextFactory.textFade()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 130 })
    .setText("Summoning...")
    .setSize(SIZES.TEXT_MENUITEM);

  private loadingBar = new LoadingBar(assetListLength).setPosition({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 80,
  });

  menu!: Menu;

  constructor(public screen: Screen) {
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
      this.screen.setBeginningScreen();
  };

  getArray(): Array<any> {
    return [];
  }
}
