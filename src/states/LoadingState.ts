import { GUIFactory } from "../GUI/GUIFactory.js";
import { load, assetListLength } from "../utilities/assetLoaders.js";
import { ALL_ASSETS } from "../constants/assets.js";
import { State, IState } from "./State.js";

export class LoadingState implements IState {
  gui = GUIFactory.createLoadingGUI(this.state);
  constructor(public state: State) {
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.gui.draw(ctx);
  }

  update(event: [boolean, number]): void {
    this.gui.update(event);
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
    this.gui.loadingBar.setCurrentStatus(1);
    console.log(`${fileName.fileName} Loaded.`);
    if (this.gui.loadingBar.getCurrentStatus() === assetListLength)
      this.state.setBeginState();
  };
}
