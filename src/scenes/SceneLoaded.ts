import { SceneBase } from "./SceneBase.js";
import { SIZES } from "../constants/game.js";
import { TextFactory, TEXTS } from "../texts/TextFactory.js";

export class SceneLoaded extends SceneBase {
  private title: any = TextFactory.createText(TEXTS.TITLE);
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.title.draw(ctx);

    ctx.drawImage(
      this.dslogo,
      SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2,
      SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2
    );
  }

  update(): void {}
}
