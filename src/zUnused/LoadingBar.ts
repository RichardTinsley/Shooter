import { AssetLoader } from "../handlers/assetLoader.js";
import { StatusBarComponent } from "../components/StatusBar.js";

export class LoadingBarComponent extends StatusBarComponent {
  public assetLoader = new AssetLoader();

  constructor() {
    super();
    this.setStatus(0, this.assetLoader.getAssetCount());
    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      //   .then(() => this.state.setBeginScreen());
      .then(() => console.log("OMG"));
  }

  assetLoaded = (): void => this.increaseCurrentStatus(1);
  //   assetLoaded = (): void => console.log("OMG");
}
