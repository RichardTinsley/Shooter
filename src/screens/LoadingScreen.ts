import { EntityFactory } from "../factories/EntityFactory.js";
import { AssetLoader } from "../handlers/assetLoader.js";
import { GameState } from "./GameState.js";
import { Screen } from "./Screen.js";

export class LoadingScreen extends Screen {
  private assetLoader = new AssetLoader();

  constructor(public state: GameState) {
    super();

    const entityFactory = new EntityFactory();
    this.entities.push(entityFactory.StatusBar());
    this.entities.push(entityFactory.DSLogo());
    this.entities.push(entityFactory.DSTitle());
    this.entities[0].information.setStatus(0, this.assetLoader.getAssetCount());

    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      .then(() => this.state.setBeginScreen());
  }

  assetLoaded = (): void => this.entities[0].information.increaseCurrentStatus(1);
}
