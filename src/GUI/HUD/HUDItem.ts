import { SIZES } from "../../constants/game.js";
import { Position } from "../../constants/types.js";
import { Sprite } from "../../entities/Sprite.js";
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

    this.icon = new Sprite(fileName, SIZES.TILE, SIZES.TILE).setPosition(
      position
    );

    this.align = "left";
    this.size = SIZES.TEXT_IN_GAME;

    return this;
  }
}
