import { GUI } from "./GUI.js";
import { State } from "../states/State.js";
import { LABELS } from "./components/MenuButton.js";
import { MenuTemplate } from "../constants/types.js";
import { FILE_NAMES } from "../constants/assets.js";
import { Sprite } from "../entities/Sprite.js";

export class MainMenuGUI extends GUI {
  private menuTemplate: Array<MenuTemplate> = [
    { state: this.state.setNewGameState, label: LABELS.NEWGAME },
    { state: this.state.setOptionsState, label: LABELS.OPTIONS },
    { state: this.state.setAboutState, label: LABELS.ABOUT },
  ];

  private tower = new Sprite(FILE_NAMES.TOWER_AMETHYST_1, 64, 64).setPosition(
    100,
    100
  );

  private logo = new Sprite(FILE_NAMES.DSLOGO, 302, 293).setPosition(200, 600);

  constructor(public state: State) {
    super(state);
    this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.tower.draw(ctx);
    this.logo.draw(ctx);
  }
  update(): void {
    super.update();
    this.tower.update();
    this.logo.update();
  }
}
