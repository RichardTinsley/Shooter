import { State } from "../states/State.js";
import { BeginGUI } from "./BeginGUI.js";
import { LoadingGUI } from "./LoadingGUI.js";
import { MainMenuGUI } from "./MainMenuGUI.js";

export class GUIFactory {
  static createLoadingGUI(state: State): LoadingGUI {
    return new LoadingGUI(state);
  }

  static createBeginGUI(state: State): BeginGUI {
    return new BeginGUI(state);
  }

  static createMainMenuGUI(state: State): MainMenuGUI {
    return new MainMenuGUI(state);
  }
}
