import { LoadingCompleteScreen } from "./LoadingCompleteScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";

export class ScreenFactory {
  static createLoadingScreen(): LoadingScreen {
    return new LoadingScreen();
  }
  static createLoadingCompleteScreen(): LoadingCompleteScreen {
    return new LoadingCompleteScreen();
  }
}
