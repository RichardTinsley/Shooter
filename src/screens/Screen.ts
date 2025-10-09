import { EntityState } from "../classes/EntityState.js";
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { LoadingScreen } from "./LoadingScreen.js";

export class Screen {
  state: EntityState;

  constructor() {
    this.state = new LoadingScreen(this).addComponent(GUIComponentFactory.DSLogo());
  }

  // setBeginScreen = () => (this.state = new BeginScreen(this));
  setBeginScreen = () => console.log("OMG22222222");
}

// private DSLogo = GUIComponentFactory.DSLogo();
// private loadingBar = GUIComponentFactory.LoadingBar(0, this.assetLoader.getAssetFileNameLength());
// private DSTitle = TextFactory.DSTitle();
// private summoning = TextFactory.Summoning();
