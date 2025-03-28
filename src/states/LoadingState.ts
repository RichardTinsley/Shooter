import { ScreenFactory } from "../screens/ScreenFactory.js";
import { load, assets } from "../utilities/assetLoaders.js";
import { State, IState } from "./State.js";

export class LoadingState implements IState {
  screen = ScreenFactory.createLoadingScreen();

  constructor(public state: State) {
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
  }

  update(): void {
    this.screen.update();
  }

  mouseOver() {
    throw new Error("Method not implemented.");
  }

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(`A total of ${assets.size} assets have been loaded.`);
        this.state.setState(this.state.beginState);
      });
  }

  assetLoaded = (fileName: any) => {
    console.log(`${fileName.fileName} Loaded.`);
    this.screen.loadingBar.setCurrentStatus(1);
  };
}
