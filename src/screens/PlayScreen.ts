import { FILE_NAMES } from "../constants/assets.js";
import { SIZES } from "../constants/game.js";
import { HUDDisplay } from "../handlers/HUDDisplay.js";
import { HUDItem } from "../GUI/HUD/HUDItem.js";
import { Menu } from "../GUI/menus/Menu.js";
import { Level } from "../handlers/Level.js";
import { Waves } from "../handlers/Waves.js";
import { IScreenState, Screen } from "./Screen.js";
import { HUDTimer } from "../GUI/HUD/HUDTimer.js";
import { Time } from "../handlers/Time.js";

export class PlayScreen implements IScreenState {
  menu!: Menu;
  hud = new HUDDisplay({ x: SIZES.TILE_HALF, y: SIZES.TILE_HALF });
  level = new Level();
  entities: Array<any> = [];
  waves = new Waves();

  hudItem = new HUDItem().setHUDItem(
    { x: 100, y: 100 },
    FILE_NAMES.ICONS_LIVES
  );

  hudTimer = new HUDTimer().setHUDItem(
    { x: 200, y: 200 },
    FILE_NAMES.ICONS_TIMER
  );

  constructor(public screen: Screen) {
    this.entities.push(...this.level.createEmptyTowerSpots());
    Time.startTimer();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.level.draw(ctx);
    this.hud.draw(ctx);
    //this.menu.draw(ctx);
    this.entities.forEach((entity) => entity.draw(ctx));

    this.hudItem.draw(ctx);
    this.hudTimer.draw(ctx);
  }
  update(): void {
    this.level.update();
    //this.menu.update();
    this.entities.forEach((entity) => entity.update());
    this.waves.update();
    this.hudTimer.update();
  }

  getArray(): Array<any> {
    //return [...this.menu.getMenuItemsArray(), ...this.entities];
    return [];
  }
}
