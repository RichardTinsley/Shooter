import { GUIEntityFactory } from "../factories/GUIEntityFactory.js";
import { AssetLoader } from "../handlers/AssetLoader.js";
import { GameState } from "../handlers/GameState.js";
import { Screen } from "./Screen.js";

export class LoadingScreen extends Screen {
  private assetLoader = new AssetLoader();

  constructor(public state: GameState) {
    super();

    const entityFactory = new GUIEntityFactory();
    this.entities.push(entityFactory.LoadingBar());
    this.entities.push(entityFactory.DSLogo());
    this.entities.push(entityFactory.DSTitle());
    this.entities.push(entityFactory.Summoning());
    this.entities[0].information.setStatus(0, this.assetLoader.getAssetCount());

    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`));
    // .then(() => this.state.setBeginScreen());
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.clearScreen(ctx);
    super.draw(ctx);
  }

  assetLoaded = (): void => this.entities[0].information.increaseCurrentStatus(1);
}
