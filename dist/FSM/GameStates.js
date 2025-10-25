import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { createFsm } from "./FSM.js";
export var GameStatesKeys;
(function (GameStatesKeys) {
    GameStatesKeys["LoadingScreen"] = "LoadingScreen";
    GameStatesKeys["BeginScreen"] = "BeginScreen";
    GameStatesKeys["MainMenu"] = "MainMenu";
})(GameStatesKeys || (GameStatesKeys = {}));
export var GameEvents;
(function (GameEvents) {
    GameEvents["Loaded"] = "Loaded";
    GameEvents["Begin"] = "Begin";
})(GameEvents || (GameEvents = {}));
export class GameState {
    constructor() {
        this.entities = [];
    }
    draw(ctx) {
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.entities.forEach((entity) => entity.update());
    }
}
class LoadingGameState extends GameState {
    constructor() {
        super();
        const factory = new GUIComponentFactory();
        this.entities.push(factory.DSLogo());
    }
}
export const GameStates = {
    [GameStatesKeys.LoadingScreen]: new LoadingGameState(),
};
export function createGameFSM() {
    return createFsm({
        initial: GameStatesKeys.LoadingScreen,
        states: {
            [GameStatesKeys.LoadingScreen]: {
                [GameEvents.Loaded]: GameStatesKeys.BeginScreen,
            },
            [GameStatesKeys.BeginScreen]: {
                [GameEvents.Begin]: GameStatesKeys.MainMenu,
            },
            [GameStatesKeys.MainMenu]: {
                [GameEvents.Begin]: GameStatesKeys.MainMenu,
            },
        },
    });
}
//# sourceMappingURL=GameStates.js.map