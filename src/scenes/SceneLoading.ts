import { LoadingBar } from "../components/LoadingBar.js";
import { SIZES } from "../constants/game.js";
import { MenuLoading } from "../menus/MenuLoading.js";
import { assetListLength, load, assets } from "../utilities/assetLoaders.js";
import { Scene, State } from "./Scene.js";

export class SceneLoading implements State {
  scene: Scene;
  menu = new MenuLoading();

  private loadingBar = new LoadingBar({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 80,
  }).setMaxStatus(assetListLength);

  constructor(scene: Scene) {
    this.scene = scene;
    this.scene.menu = new MenuLoading();
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(): void {
    this.menu.update();
  }

  loadingScene() {
    return;
  }

  loadedScene() {
    this.scene.setState(this.scene.loadedState);
  }

  assetLoaded = (fileName: any) => {
    console.log(`${fileName.fileName} Loaded.`);
    this.loadingBar.setCurrentStatus(1);
  };

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(`A total of ${assets.size} assets have been loaded.`);
        this.scene.getCurrentState().loadedScene();
      });
  }
}
