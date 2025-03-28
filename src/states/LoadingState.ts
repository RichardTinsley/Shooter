import { GUIFactory } from "../GUI/GUIFactory.js";
import { load, assets } from "../utilities/assetLoaders.js";
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
        this.state.setState(this.state.beginState);
      });
  }

  assetLoaded = (fileName: any) => {
    console.log(`${fileName.fileName} Loaded.`);
    this.gui.loadingBar.setCurrentStatus(1);
  };
}
