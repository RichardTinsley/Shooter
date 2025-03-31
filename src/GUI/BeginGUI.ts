import { GUI } from "./GUI.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingGUI.js";
import { MenuButton, LABELS } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { State } from "../states/State.js";

export class BeginGUI extends GUI {
  private title: any = TextFactory.text()
    .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: 100 })
    .setText("Death Sorcery")
    .setSize(SIZES.TEXT_TITLE);
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  constructor(public state: State) {
    super(state);
    this.initialiseMenu();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    drawIntroLogo(ctx, this.title, this.dslogo);
  }
  update(event: { update: boolean; delta: number }): void {
    super.update(event);
  }

  initialiseMenu() {
    const beginButton = new MenuButton(
      TextFactory.textPulsate().setSize(SIZES.TEXT_MENUITEM),
      this.state,
      this.state.setMainMenuState,
      LABELS.BEGIN
    ).setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 120 });

    this.menu.push(beginButton);
  }
}
