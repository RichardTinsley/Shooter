import { GUI } from "./GUI.js";
import { TextFactory } from "../texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingGUI.js";
import { MenuButton } from "../components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { State } from "../states/State.js";

export class BeginGUI extends GUI {
  private title: any = TextFactory.createTitleText();
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  constructor(public state: State) {
    super(state);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroLogo(ctx, this.title, this.dslogo);
    super.draw(ctx);
  }
  update(): void {
    super.update();
  }

  initialiseMenu() {
    const beginButton = new MenuButton(
      TextFactory.createMenuItemPulsate(),
      this.state,
      "Begin!",
      SIZES.GAME_WIDTH_HALF,
      SIZES.GAME_HEIGHT - 120
    );

    this.menu.push(beginButton);
  }
}
