import { SIZES } from "../../constants/game.js";
import { Position } from "../../constants/types.js";
import { Sprite } from "../../entities/Sprite.js";
import { TextFactory } from "../../entities/texts/TextFactory.js";

export class HUDItem {
  private icon!: Sprite;
  private label;

  constructor() {
    this.label = TextFactory.createTextPlain();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.icon.draw(ctx);
    this.label.draw(ctx);
  }

  update(): void {}

  setItem(position: Position, fileName: string): this {
    this.label.setPosition({
      x: position.x + SIZES.TILE,
      y: position.y - SIZES.TILE_HALF,
    });

    this.icon = new Sprite(position, fileName, SIZES.TILE, SIZES.TILE);

    return this;
  }

  setNumberToLabelText(text: number) {
    this.label.setText(text.toString());
  }

  getLabelTextToNumber(): number {
    return Number(this.label.getText());
  }
}
