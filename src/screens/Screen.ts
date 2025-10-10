import { Entity } from "../classes/Entity.js";
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { LoadingScreen } from "./LoadingScreen.js";
// MAKE ABRACT CLASS
export class Screen implements IDraw, IUpdate {
  draw(ctx: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
  // state = new LoadingScreen(this).addComponent(GUIComponentFactory.DSLogo());
  entities!: Entity[];

  // setBeginScreen = () => (this.state = new BeginScreen(this));
  setBeginScreen = () => console.log("OMG22222222");
}

// private summoning = TextFactory.Summoning();
