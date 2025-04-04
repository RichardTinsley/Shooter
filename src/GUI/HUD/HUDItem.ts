import { SIZES } from "../../constants/game.js";
import { Position } from "../../constants/types.js";
import { Sprite } from "../../entities/Sprite.js";
import { Text } from "../texts/Text.js";

export class HUDItem extends Text {
  private icon!: Sprite;

  constructor() {
    super();
    this.align = "left";
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.icon.draw(ctx);
  }

  setHUDItem(position: Position, fileName: string): this {
    super.setPosition(position);
    const newPosition = {
      x: (position.x -= SIZES.TILE),
      y: (position.y += SIZES.TILE_HALF),
    };
    this.icon = new Sprite(position, fileName, SIZES.TILE, SIZES.TILE);
    return this;
  }
}
