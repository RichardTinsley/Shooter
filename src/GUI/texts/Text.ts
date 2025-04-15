import { IText } from "../../interfaces/IEntity.js";
import { Position } from "../../constants/types.js";
import { ANIMATION } from "../../constants/animation.js";

export class Text implements IText {
  protected text!: string;
  protected size!: number;
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected alpha: number = 1;
  protected state: number = ANIMATION.FINISHED;
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

  update(): void {}

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

  getHeight(): number {
    return this.size;
  }

  setHeight(size: number): this {
    this.size = size;
    return this;
  }

  getWidth(): number {
    return this.getText().length * (this.getHeight() / 1.85);
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
