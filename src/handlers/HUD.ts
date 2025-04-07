import { FILE_NAMES } from "../constants/assets.js";
import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";
import { HUDCoins } from "../GUI/HUD/HUDCoins.js";
import { HUDExperience } from "../GUI/HUD/HUDExperience.js";
import { HUDLives } from "../GUI/HUD/HUDLives.js";
import { HUDTimer } from "../GUI/HUD/HUDTimer.js";
import { HUDWaves } from "../GUI/HUD/HUDWaves.js";
import { drawRectangle } from "../utilities/drawShapes.js";

export class HUD {
  private static INSTANCE: HUD;

  // private anchorPointX = this.position.x;
  private anchorPointY = this.position.y + SIZES.TILE;

  private HUDItems: Array<any> = [
    new HUDLives().setHUDItem(
      { x: this.position.x + SIZES.TILE * 2, y: this.anchorPointY },
      FILE_NAMES.ICONS_LIVES
    ),
    new HUDCoins().setHUDItem(
      { x: this.position.x + SIZES.TILE * 5, y: this.anchorPointY },
      FILE_NAMES.ICONS_COINS
    ),
    new HUDExperience().setHUDItem(
      { x: this.position.x + SIZES.TILE * 9, y: this.anchorPointY },
      FILE_NAMES.ICONS_EXP
    ),
    new HUDWaves().setHUDItem(
      { x: this.position.x + SIZES.TILE * 32, y: this.anchorPointY },
      FILE_NAMES.ICONS_WAVES
    ),
    new HUDTimer().setHUDItem(
      { x: this.position.x + SIZES.TILE * 35, y: this.anchorPointY },
      FILE_NAMES.ICONS_TIMER
    ),

    // FILE_NAMES.ICONS_MANA,
  ];

  private constructor(private position: Position) {}

  static createInstance(position: Position) {
    if (!HUD.INSTANCE) {
      HUD.INSTANCE = new HUD(position);
    }
    return HUD.INSTANCE;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.HUDItems.forEach((item) => item.draw(ctx));
    // ctx.lineWidth = 3;
    // drawRectangle(
    //   ctx,
    //   this.position,
    //   SIZES.GAME_WIDTH - SIZES.TILE,
    //   SIZES.TILE + SIZES.TILE_HALF,
    //   COLOURS.DARKSHADOW,
    //   COLOURS.WHITE
    // );
  }
  update(): void {
    this.HUDItems.forEach((item) => item.update());
  }
}
