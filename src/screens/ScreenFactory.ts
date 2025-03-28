import { BeginScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";

export class ScreenFactory {
  static createLoadingScreen(): LoadingScreen {
    return new LoadingScreen();
  }
  static createBeginScreen(): BeginScreen {
    return new BeginScreen();
  }
}
