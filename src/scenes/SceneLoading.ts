import { LoadedScreen } from "../screens/LoadedScreen.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { load, assets, assetListLength } from "../utilities/assetLoaders.js";
import { Scene, State } from "./Scene.js";

export class SceneLoading implements State {
  constructor(public scene: Scene) {
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.scene.screen.draw(ctx);
  }

  update(): void {
    this.scene.screen.update();
  }

  assetLoaded = (fileName: any) => {
    console.log(`${fileName.fileName} Loaded.`);
    this.scene.screen.loadingBar.setCurrentStatus(1);
  };

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(`A total of ${assets.size} assets have been loaded.`);
        this.scene.screen = new LoadedScreen();
        this.scene.setState(this.scene.loadedState);
      });
  }
}
