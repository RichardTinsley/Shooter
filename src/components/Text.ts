import { ComponentBaseClass } from "./ComponentBaseClass.js";
import { COLOURS, getColour } from "../constants/colours.js";

export class TextComponent extends ComponentBaseClass {
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected alpha: number = 1;
  protected strokeColour = COLOURS.BLACK;
  protected fillColour = COLOURS.WHITE;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = getColour(this.strokeColour, this.alpha);
    ctx.fillStyle = getColour(this.fillColour, this.alpha);
    ctx.font = this.information.scaledSize.height + "px canterbury";
    ctx.textAlign = this.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = this.lineWidth;
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

  update(): void {
    return;
  }

  // state!: EntityState;
  //   setNormalText = () => (this.state = new NormalText(this));
  //   setFadeText = () => (this.state = new FadeText(this));
  //   setPulsateText = () => (this.state = new PulsateText(this));
  //   setTextButton = () => (this.state = new TextButton( INJECT TYPE OF TEXT ).addComponents(mouse, hitbox etc) );
}
