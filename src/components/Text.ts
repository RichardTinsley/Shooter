import { ComponentBaseClass } from "./ComponentBaseClass.js";
import { COLOURS, getColour } from "../constants/colours.js";
import { EntityInformation } from "../types/types.js";

export class TextComponent extends ComponentBaseClass {
  protected text!: string;
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected alpha: number = 1;
  protected strokeColour = COLOURS.BLACK;
  protected fillColour = COLOURS.WHITE;

  draw(ctx: CanvasRenderingContext2D, coordinates: EntityInformation): void {
    ctx.strokeStyle = getColour(this.strokeColour, this.alpha);
    ctx.fillStyle = getColour(this.fillColour, this.alpha);
    ctx.font = coordinates.size.height + "px canterbury";
    ctx.textAlign = this.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = this.lineWidth;
    ctx.strokeText(this.text, coordinates.position.x, coordinates.position.y);
    ctx.fillText(this.text, coordinates.position.x, coordinates.position.y);
  }

  update(coordinates: EntityInformation): void {
    return;
  }

  setText(text: string): this {
    this.text = text;
    return this;
  }

  // state!: EntityState;
  //   setNormalText = () => (this.state = new NormalText(this));
  //   setFadeText = () => (this.state = new FadeText(this));
  //   setPulsateText = () => (this.state = new PulsateText(this));
  //   setTextButton = () => (this.state = new TextButton( INJECT TYPE OF TEXT ).addComponents(mouse, hitbox etc) );
}
