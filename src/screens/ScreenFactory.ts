import { LoadingCompleteScreen } from "./LoadingCompleteScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { ScreenBase } from "./ScreenBase.js";

export class ScreenFactory {
  static createLoadingScene(): LoadingScreen {
    return new LoadingScreen();
  }
  static createLoadingCompleteScene(): LoadingCompleteScreen {
    return new LoadingCompleteScreen();
  }
}
