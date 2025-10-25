import { GUIComponentFactory } from "./GUIComponentFactory.js";

export class GameStateFactory {
  createGameStateLoading(): any[] {
    const GUI = new GUIComponentFactory();
    return [GUI.DSLogo()];
  }
}
