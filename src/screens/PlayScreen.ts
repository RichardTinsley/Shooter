import { FILE_NAMES } from "../constants/assets.js";
import { Enemy } from "../entities/enemies/Enemy.js";
import { Lavoney } from "../entities/levels/Lavoney.js";
import { Menu } from "../GUI/menus/Menu.js";
import { IScreenState, Screen } from "./Screen.js";

export class PlayScreen implements IScreenState {
  private entities: Array<any> = [];
  level = new Lavoney();
  menu!: Menu;
  waypoints;

  constructor(public screen: Screen) {
    this.entities.push(...this.level.getTowerSpots());
    this.waypoints = this.level.getWaypoints();
    this.entities.push(
      new Enemy(
        FILE_NAMES.TOWER_AMETHYST_1,
        64,
        64,
        this.level.getWaypoints()
      ).setPosition(this.waypoints[0])
    );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.level.draw(ctx);
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.level.update();
    this.entities.forEach((entity) => entity.update());
  }

  getArray(): Array<any> {
    return this.entities;
  }
}
