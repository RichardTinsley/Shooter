import { Information } from "../types/types.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class ImageComponent extends ComponentBaseClass {
  draw(ctx: CanvasRenderingContext2D, information: Information): void {
    ctx.save();
    ctx.translate(information.position.x, information.position.y);
    ctx.scale(information.direction, 1);
    ctx.drawImage(
      information.visual as CanvasImageSource,
      information.size.width * information.currentFrame,
      information.size.height * information.currentRow,
      information.size.width,
      information.size.height,
      0 - information.halfWidth + this.drawOffsetX,
      0 - information.scaledSize.height + this.drawOffsetY,
      information.scaledSize.width,
      information.scaledSize.height
    );

    ctx.restore();
  }
}
