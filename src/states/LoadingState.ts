import { GUIFactory } from "../GUI/GUIFactory.js";
import { load, assets, assetListLength } from "../utilities/assetLoaders.js";
import { State, IState } from "./State.js";

export class LoadingState implements IState {
  gui = GUIFactory.createLoadingGUI(this.state);
  constructor(public state: State) {
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.gui.draw(ctx);
  }

  update(): void {
    this.gui.update();
  }

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(`A total of ${assets.size} assets have been loaded.`);
      });
  }

  assetLoaded = (fileName: any) => {
    this.gui.loadingBar.setCurrentStatus(1);
    if (this.gui.loadingBar.getCurrentStatus() === assetListLength)
      // this.state.setCurrentState(this.state.beginState);
      this.state.setBeginState();
  };
}
