import { SceneBase } from "./SceneBase.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { Text } from "../texts/Text.js";
import { FadeText } from "../texts/FadeText.js";
import { SIZES } from "../constants/game.js";
import { TEXT_SIZES } from "../constants/text.js";
import { load, assetListLength, assets } from "../utilities/assetLoaders.js";

export class LoadingScene extends SceneBase {
  private loadingBar: LoadingBar = new LoadingBar(
    {
      x: SIZES.GAME_WIDTH_HALF,
      y: SIZES.GAME_HEIGHT - 100,
    },
    assetListLength
  );

  private title: Text = new Text("Death Sorcery", {
    x: SIZES.GAME_WIDTH_HALF,
    y: 100,
  }).setSize(TEXT_SIZES.TITLE_TEXT);

  private summoning: Text = new FadeText("Summoning...", {
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 150,
  }).setSize(TEXT_SIZES.MENUITEM_TEXT);

  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  constructor() {
    super();
    this.loadAssets();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.title.draw(ctx);
    ctx.drawImage(
      this.dslogo,
      SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2,
      SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2
    );
    this.loadingBar.draw(ctx);
    this.summoning.draw(ctx);
  }

  update(): void {
    this.summoning.update();
  }

  assetLoaded = (fileName: any) => {
    console.log(`${fileName.fileName} Loaded.`);
    this.loadingBar.setAssetsLoaded();
  };

  async loadAssets() {
    await load(this.assetLoaded)
      .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
      })
      .then(() => {
        console.log(
          `Asset loading complete. A total of ${assets.size} assets have been loaded.`
        );
      });
  }
}
