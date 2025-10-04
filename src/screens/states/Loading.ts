import { GUIComponentFactory } from "../../factories/GUIComponentFactory.js";
import { TextFactory } from "../../factories/TextFactory.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
import { IScreenState, Screen } from "../Screen.js";

export class Loading implements IScreenState {
  private assetLoader = new AssetLoader();
  private DSLogo = GUIComponentFactory.DSLogo();
  private loadingBar = GUIComponentFactory.LoadingBar(0, this.assetLoader.getAssetFileNameLength());
  private DSTitle = TextFactory.DSTitle();

  constructor(public state: Screen) {
    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      .then(() => console.log("this.state.beginScreen()"));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.DSLogo.draw(ctx);
    this.DSTitle.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(): void {}

  assetLoaded = (): void => this.loadingBar.increaseCurrentStatus(1);
}
