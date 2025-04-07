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
  private anchorPointY = this.position.y + SIZES.TILE;

  static hudlives: HUDLives;

  HUDItems: Array<any> = [
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

  constructor(private position: Position) {
    HUD.hudlives = new HUDLives().setHUDItem(
      { x: this.position.x + SIZES.TILE * 2, y: this.anchorPointY },
      FILE_NAMES.ICONS_LIVES
    );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.HUDItems.forEach((item) => item.draw(ctx));

    HUD.hudlives.draw(ctx);
  }
  update(): void {
    this.HUDItems.forEach((item) => item.update());

    // HUD.hudlives.update();
  }
}
