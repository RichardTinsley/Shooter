import { SIZES } from "../../constants/sizes.js";
import { Position } from "../../constants/types.js";
import { Sprite } from "../../entities/sprites/Sprite.js";
import { Text } from "../texts/Text.js";

export class HUDItem extends Text {
  private icon!: Sprite;

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.icon.draw(ctx);
  }

  setHUDItem(position: Position, fileName: string): this {
    super.setPosition(position);

    position.x -= SIZES.TILE_HALF;
    position.y += SIZES.TILE_HALF;

    this.icon = new Sprite()
      .setPosition(position)
      .setImage(fileName, SIZES.TILE, SIZES.TILE)
      .setScale(1);

    this.align = "left";
    this.size = SIZES.TEXT_IN_GAME;

    return this;
  }
}
