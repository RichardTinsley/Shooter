import { Position } from "../constants/types.js";
import { TextBase } from "./TextBase.js";

export class PlainText extends TextBase {
  constructor(position: Position) {
    super(position);
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {}
}
