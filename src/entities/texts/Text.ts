import { IText } from "../../interfaces/IEntity.js";
import { Position } from "../../constants/types.js";

export class Text implements IText {
  protected text!: string;
  protected size!: number;
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected alpha: number = 1;
  protected state: number = 0;
  position!: Position;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.font = this.size + "px canterbury";
    ctx.textAlign = this.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = this.lineWidth;
    ctx.strokeText(this.text, this.position.x, this.position.y);
    ctx.fillText(this.text, this.position.x, this.position.y);
  }

  update(event: { update: boolean; delta: number }): void {}

  getText(): string {
    return this.text;
  }

  setText(text: string): this {
    this.text = text;
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  setSize(size: number): this {
    this.size = size;
    return this;
  }

  setAlignment(alignment: CanvasTextAlign): this {
    this.align = alignment;
    return this;
  }

  setState(state: number): this {
    this.state = state;
    return this;
  }
}
