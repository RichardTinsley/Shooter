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
import { Projectile } from "../entities/projectiles/Projectile.js";
import { Music } from "../handlers/Music.js";
import { drawCircleRadialGradient } from "../utilities/drawShapes.js";

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
    .setPosition(this.waypoints[0])
    .setDestination(this.waypoints[0])
    .setSpeed(80)
    .setScale(1);

  private tower = new Projectile(FILE_NAMES.TOWER_AMETHYST_1, 64, 64)
    .setPosition(this.waypoints[0])
    .setDestination(this.waypoints[7])
    .setSpeed(3)
    .setScale(1);

  music = new Music();

  constructor(public state: State) {
    super(state);
    this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
    this.entities.push(this.projectile, this.tower);

    // this.music.playTrack();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.entities.forEach((entity) => entity.draw(ctx));
    drawCircleRadialGradient(ctx);
  }
  update(event: { update: boolean; delta: number }): void {
    super.update(event);
    this.entities.forEach((entity) => entity.update(event));
  }
}
