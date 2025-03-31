import { SIZES } from "../constants/game.js";
import { MenuTemplate } from "../constants/types.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { Menu } from "../GUI/Menu.js";
import { LABELS } from "../GUI/MenuLabelBuilder.js";
import { MenuVertical } from "../GUI/MenuVertical.js";
import { State, IState } from "./State.js";

export class BeginState implements IState {
  private menuTemplate: Array<MenuTemplate> = [
    { state: this.state.setMainMenuState, label: LABELS.BEGIN },
  ];

  menu: Menu;

  constructor(public state: State) {
    this.menu = new MenuVertical(
      state,
      this.menuTemplate,
      SIZES.GAME_HEIGHT - 120
    );

    console.log(this.menu);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroScreen(ctx);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
