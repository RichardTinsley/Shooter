import { EntityState } from "../classes/EntityState.js";
import { AssetLoader } from "../handlers/assetLoader.js";
import { Screen } from "./Screen.js";

export class LoadingScreen extends EntityState {
  private assetLoader = new AssetLoader();

  constructor(public state: Screen) {
    super();
    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      .then(() => this.state.setBeginScreen());
  }

  // assetLoaded = (): void => this.loadingBar.increaseCurrentStatus(1);
  assetLoaded = (): void => console.log("OMG");
}
