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

  private tower = new Sprite(FILE_NAMES.TOWER_AMETHYST_1, 64, 64)
    .setPosition(200, 200)
    .setScale(5);

  private logo = new Sprite(FILE_NAMES.DSLOGO, 302, 293)
    .setPosition(200, 600)
    .setScale(2);

  private projectile = new Sprite(FILE_NAMES.PROJECTILE_SAPPHIRE_1, 84, 9)
    .setPosition(400, 600)
    .setScale(2);

  constructor(public state: State) {
    super(state);
    this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.logo.draw(ctx);
    this.tower.draw(ctx);
    this.projectile.draw(ctx);
  }
  update(): void {
    super.update();
    this.logo.update();
    this.tower.update();
    this.projectile.update();
  }
}
