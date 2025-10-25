import { GUIComponentFactory } from "./GUIComponentFactory.js";
export class GameStateFactory {
    createGameStateLoading() {
        const GUI = new GUIComponentFactory();
        return [GUI.DSLogo()];
    }
}
//# sourceMappingURL=GameStateFactory.js.map