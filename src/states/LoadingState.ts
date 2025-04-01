import { load, assetListLength } from "../utilities/assetLoaders.js";
import { ALL_ASSETS } from "../constants/assets.js";
import { State, IState } from "./State.js";
import { SIZES } from "../constants/game.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
import { LoadingBar } from "../GUI/components/LoadingBar.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { Menu } from "../GUI/menus/Menu.js";

export class LoadingState implements IState {
  private summoning: any = TextFactory.textFade()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 130 })
    .setText("Summoning...")
    .setSize(SIZES.TEXT_MENUITEM);

  private loadingBar = new LoadingBar()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 80 })
    .setMaxStatus(assetListLength);

  menu!: Menu;

  constructor(public state: State) {
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroScreen(ctx);
    this.summoning.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(): void {
    this.summoning.update();
  }

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(`A total of ${ALL_ASSETS.size} assets have been loaded.`);
      });
  }

  assetLoaded = (fileName: any) => {
    this.loadingBar.setCurrentStatus(1);
    console.log(`${fileName.fileName} Loaded.`);
    if (this.loadingBar.getCurrentStatus() === assetListLength)
      this.state.setBeginState();
  };
}
function drawIntroLogo(ctx: CanvasRenderingContext2D, title: any) {
  throw new Error("Function not implemented.");
}
