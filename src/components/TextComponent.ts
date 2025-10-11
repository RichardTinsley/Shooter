import { EntityCoordinates } from "../classes/EntityCoordinates.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";
import { Size } from "../types/types.js";
// import { FadeText } from "./TextStates/FadeText.js";
// import { NormalText } from "./TextStates/NormalText.js";
// import { PulsateText } from "./TextStates/PulsateText.js";

export class TextComponent extends ComponentBaseClass {
  draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void {
    throw new Error("Method not implemented.");
  }
  update(coordinates: EntityCoordinates): void {
    throw new Error("Method not implemented.");
  }
  // state!: EntityState;
  //   setNormalText = () => (this.state = new NormalText(this));
  //   setFadeText = () => (this.state = new FadeText(this));
  //   setPulsateText = () => (this.state = new PulsateText(this));
  //   setTextButton = () => (this.state = new TextButton( INJECT TYPE OF TEXT ).addComponents(mouse, hitbox etc) );
}
