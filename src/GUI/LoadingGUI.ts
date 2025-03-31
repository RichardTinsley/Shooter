import { TextFactory } from "../entities/texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { assetListLength } from "../utilities/assetLoaders.js";
import { LoadingBar } from "./components/LoadingBar.js";
import { GUI } from "./GUI.js";
import { State } from "../states/State.js";

export class LoadingGUI extends GUI {
  private title: any = TextFactory.text()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: 100 })
    .setText("Death Sorcery")
    .setSize(SIZES.TEXT_TITLE);

  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  private summoning: any = TextFactory.textFade()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 130 })
    .setText("Summoning...")
    .setSize(SIZES.TEXT_MENUITEM);

  loadingBar = new LoadingBar()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 80 })
    .setMaxStatus(assetListLength);

  constructor(public state: State) {
    super(state);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroLogo(ctx, this.title, this.dslogo);
    this.summoning.draw(ctx);
    this.loadingBar.draw(ctx);
  }

  update(event: { update: boolean; delta: number }): void {
    this.summoning.update(event);
  }
}

export function drawIntroLogo(
  ctx: CanvasRenderingContext2D,
  title: any,
  dslogo: HTMLImageElement
) {
  title.draw(ctx);
  ctx.drawImage(
    dslogo,
    SIZES.GAME_WIDTH_HALF - dslogo.width / 2,
    SIZES.GAME_HEIGHT_HALF - dslogo.height / 2
  );
}
