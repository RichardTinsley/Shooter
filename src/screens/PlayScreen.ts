import { SIZES } from "../constants/game.js";
import { HUD } from "../handlers/HUD.js";
import { Menu } from "../GUI/menus/Menu.js";
import { Level } from "../handlers/Level.js";
import { IScreenState, Screen } from "./Screen.js";
import { EnemyFactory } from "../entities/enemies/EnemyFactory.js";

export class PlayScreen implements IScreenState {
  menu!: Menu;
  hud = new HUD({ x: SIZES.TILE_HALF, y: SIZES.TILE });
  level = new Level();
  entities: Array<any> = [];

  enemy = EnemyFactory.createZombie1();
  enemy2 = EnemyFactory.createZombie3();

  constructor(public screen: Screen) {
    this.entities.push(
      ...this.level.createEmptyTowerSpots(),
      this.enemy,
      this.enemy2
    );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.level.draw(ctx);
    this.hud.draw(ctx);
    //this.menu.draw(ctx);

    this.entities.sort((a, b) => a.position.y - b.position.y);
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.level.update();
    this.hud.update();
    //this.menu.update();

    this.entities.forEach((entity) => entity.update());
    // this.entities = this.entities.filter(entity => {
    //   entity.update();
    //   return entity.state !== ANIMATION.FINISHED;
    // });
    HUD.hudWaves.waveUpdate(this.entities);
  }

  getArray(): Array<any> {
    // return [...this.menu.getMenuItemsArray(), ...this.entities];
    return [...this.entities];
  }
}
