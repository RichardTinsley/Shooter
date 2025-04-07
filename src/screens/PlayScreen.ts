import { SIZES } from "../constants/game.js";
import { HUD } from "../handlers/HUD.js";
import { Menu } from "../GUI/menus/Menu.js";
import { Level } from "../handlers/Level.js";
import { IScreenState, Screen } from "./Screen.js";

export class PlayScreen implements IScreenState {
  menu!: Menu;
  hud = HUD.createInstance({ x: SIZES.TILE_HALF, y: SIZES.TILE_HALF });
  level = new Level();
  entities: Array<any> = [];

  constructor(public screen: Screen) {
    this.entities.push(...this.level.createEmptyTowerSpots());
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.level.draw(ctx);
    this.hud.draw(ctx);
    //this.menu.draw(ctx);
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.level.update();
    this.hud.update();
    //this.menu.update();
    this.entities.forEach((entity) => entity.update());
  }

  getArray(): Array<any> {
    //return [...this.menu.getMenuItemsArray(), ...this.entities];
    return [];
  }
}

// this.entities = this.entities.filter(entity => {
//   entity.update();
//   return entity.state !== ANIMATION.FINISHED;
// });
