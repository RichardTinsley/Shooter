import { HUD } from "../GUI/HUD/HUD.js";
import { Menu } from "../GUI/menus/Menu.js";
import { Level } from "../handlers/Level.js";
import { IScreenState, Screen } from "./Screen.js";
import { EnemyWaves } from "../handlers/EnemyWaves.js";

export class BattleScreen implements IScreenState {
  menu!: Menu;
  hud = new HUD();
  level = new Level();
  enemyWaves = new EnemyWaves();
  entities: Array<any> = [];
  enemies: Array<any> = [];

  constructor(public screen: Screen) {
    // this.entities.push(...this.level.createEmptyTowerSpots());
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.level.draw(ctx);
    this.hud.draw(ctx);
    //this.menu.draw(ctx);
    this.entities.sort((a, b) => a.position.y - b.position.y);
    this.entities.forEach((entity) => entity.draw(ctx));

    this.enemies.sort((a, b) => a.position.y - b.position.y);
    this.enemies.forEach((entity) => entity.getCurrentState().draw(ctx));
  }
  update(): void {
    this.level.update();
    this.hud.update();
    //this.menu.update();
    this.enemyWaves.update(this.enemies);

    this.entities.forEach((entity) => entity.update());

    this.enemies.forEach((entity) => entity.getCurrentState().update());
    // this.entities = this.entities.filter(entity => {
    //   entity.update();
    //   return entity.state !== ANIMATION.FINISHED;
    // });
  }
}
