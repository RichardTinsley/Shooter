import { GUI } from "./GUI.js";
import { State } from "../states/State.js";
import { LABELS } from "./components/MenuButton.js";
import { MenuTemplate } from "../constants/types.js";
import { FILE_NAMES } from "../constants/assets.js";
import { Sprite } from "../entities/Sprite.js";
import { Projectile } from "../entities/projectiles/Projectile.js";

export class MainMenuGUI extends GUI {
  private menuTemplate: Array<MenuTemplate> = [
    { state: this.state.setNewGameState, label: LABELS.NEWGAME },
    { state: this.state.setOptionsState, label: LABELS.OPTIONS },
    { state: this.state.setAboutState, label: LABELS.ABOUT },
  ];

  private tower = new Sprite(FILE_NAMES.TOWER_AMETHYST_1, 64, 64)
    .setPosition(200, 200)
    .setScale(5);

  private projectile = new Projectile(FILE_NAMES.PROJECTILE_SAPPHIRE_1, 84, 9)
    .setPosition(20, 20)
    .setDestination(1000, 1000)
    .setScale(2);

  private projectile2 = new Projectile(FILE_NAMES.PROJECTILE_SAPPHIRE_1, 84, 9)
    .setPosition(600, 600)
    .setDestination(10, 10)
    .setScale(2);

  constructor(public state: State) {
    super(state);
    this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.tower.draw(ctx);
    this.projectile.draw(ctx);
    this.projectile2.draw(ctx);
  }
  update(): void {
    super.update();
    this.tower.update();
    this.projectile.update();
    this.projectile2.update();
  }
}
