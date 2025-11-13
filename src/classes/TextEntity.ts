import { getColour } from "../constants/colours.js";
import { TextType, VisualType } from "../types/entities.js";
import { Entity } from "./Entity.js";

export default class TextEntity extends Entity {
  protected information!: VisualType & TextType;

  setText(text: string, height: number): this {
    this.information.visual = text;
    this.information.size = {
      width: Math.ceil(text.length * (height / 1.85)),
      height: height,
    };
    return this;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = getColour(this.information.strokeColour, this.information.alpha);
    ctx.fillStyle = getColour(this.information.fillColour, this.information.alpha);
    ctx.font = this.information.scaledSize.height + "px canterbury";
    ctx.textAlign = this.information.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = this.information.lineWidth;
    ctx.strokeText(
      this.information.visual as string,
      this.information.position.x,
      this.information.position.y
    );
    ctx.fillText(
      this.information.visual as string,
      this.information.position.x,
      this.information.position.y
    );
  }
}
