import { LoadingScreen } from "../screens/LoadingScreen.js";
import { ScreenFactory } from "../screens/ScreenFactory.js";
import { load, assets } from "../utilities/assetLoaders.js";
import { Scene, State } from "./Scene.js";

export class Loading implements State {
  screen = ScreenFactory.createLoadingScene();

  constructor(public scene: Scene) {
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
  }

  update(): void {
    this.screen.update();
  }

  assetLoaded = (fileName: any) => {
    console.log(`${fileName.fileName} Loaded.`);
    this.screen.loadingBar.setCurrentStatus(1);
  };

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(`A total of ${assets.size} assets have been loaded.`);
        this.scene.setState(this.scene.loadedState);
      });
  }
}
