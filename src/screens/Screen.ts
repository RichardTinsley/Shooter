import { Entity } from "../classes/Entity.js";
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { LoadingScreen } from "./LoadingScreen.js";

export class Screen {
  state = new LoadingScreen(this).addComponent(GUIComponentFactory.DSLogo());
  entities!: Entity[];

  // setBeginScreen = () => (this.state = new BeginScreen(this));
  setBeginScreen = () => console.log("OMG22222222");
}

// private summoning = TextFactory.Summoning();
