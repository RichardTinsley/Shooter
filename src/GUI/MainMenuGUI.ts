import { GUI } from "./GUI.js";
import { State } from "../states/State.js";
import { LABELS } from "./components/MenuButton.js";
import { MenuTemplate, Position } from "../constants/types.js";
import { FILE_NAMES } from "../constants/assets.js";
import { Enemy } from "../entities/enemies/Enemy.js";
import {
  LAVONEY_WAYPOINTS,
  generateEnemyWaypoints,
} from "../constants/levels.js";

export class MainMenuGUI extends GUI {
  private menuTemplate: Array<MenuTemplate> = [
    { state: this.state.setNewGameState, label: LABELS.NEWGAME },
    { state: this.state.setOptionsState, label: LABELS.OPTIONS },
    { state: this.state.setAboutState, label: LABELS.ABOUT },
  ];

  private waypoints: Array<Position> =
    generateEnemyWaypoints(LAVONEY_WAYPOINTS);

  private projectile = new Enemy(
    FILE_NAMES.PROJECTILE_SAPPHIRE_1,
    84,
    9,
    this.waypoints
  )
    .setPosition(this.waypoints[0].x, this.waypoints[0].y)
    .setDestination(this.waypoints[0].x, this.waypoints[0].y)
    .setScale(1);

  private tower = new Enemy(FILE_NAMES.TOWER_AMETHYST_1, 64, 64, this.waypoints)
    .setPosition(this.waypoints[0].x, this.waypoints[0].y)
    .setDestination(this.waypoints[0].x, this.waypoints[0].y)
    .setScale(1);

  constructor(public state: State) {
    super(state);
    this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
    this.entities.push(this.projectile, this.tower);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    super.update();
    this.entities.forEach((entity) => entity.update());
  }
}
