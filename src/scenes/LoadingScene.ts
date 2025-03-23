import { SceneBase } from "./SceneBase.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { PlainText } from "../texts/PlainText.js";
import { FadeText } from "../texts/FadeText.js";
import { SIZES } from "../constants/game.js";
import { load, assetListLength, assets } from "../utilities/assetLoaders.js";
import { GlowText } from "../texts/GlowText.js";

export class LoadingScene extends SceneBase {
  private allAssetsLoaded: boolean = false;

  private loadingBar: LoadingBar = new LoadingBar({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 100,
  }).setAssetsListLength(assetListLength);

  private title: PlainText = new PlainText({
    x: SIZES.GAME_WIDTH_HALF,
    y: 100,
  })
    .setText("Death Sorcery")
    .setSize(120);

  private summoning = new FadeText({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 150,
  })
    .setText("Summoning...")
    .setSize(50);

  private beginGame = new GlowText({
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 100,
  })
    .setText("Begin Battle!")
    .setSize(70);

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

    if (this.allAssetsLoaded) {
      this.beginGame.draw(ctx);
    } else {
      this.loadingBar.draw(ctx);
      this.summoning.draw(ctx);
    }
  }

  update(): void {
    if (this.allAssetsLoaded) this.beginGame.update();
    else this.summoning.update();
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
        console.log(`A total of ${assets.size} assets have been loaded.`);
        this.allAssetsLoaded = true;
      });
  }
}
