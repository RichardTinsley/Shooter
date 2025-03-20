import { Scene } from "./Scene.js";
import { loadingBar } from "../components/loadingBar.js";
import { Text } from "../text/Text.js";
import { FadeText } from "../text/FadeText.js";
import { SIZES } from "../constants/sizes.js";
import { TEXT_SIZES } from "../constants/text.js";

export class LoadingScene extends Scene {
  private loadingBar: loadingBar = new loadingBar({
    position: {
      x: SIZES.GAME_WIDTH_HALF,
      y: SIZES.GAME_HEIGHT - 100,
    },
    assetListLength: 40,
  });

  private title: Text = new Text("Death Sorcery", {
    x: SIZES.GAME_WIDTH_HALF,
    y: 100,
  }).setSize(TEXT_SIZES.TITLE_TEXT);

  private summoning: Text = new FadeText("Summoning...", {
    x: SIZES.GAME_WIDTH_HALF,
    y: SIZES.GAME_HEIGHT - 150,
  }).setSize(TEXT_SIZES.MENUITEM_TEXT);

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.loadingBar.draw(ctx);
    this.title.draw(ctx);
    this.summoning.draw(ctx);
  }

  update(): void {
    this.summoning.update();
  }
}
