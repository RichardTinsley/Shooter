import { createFsm } from "./FSM.js";
export var GameStates;
(function (GameStates) {
    GameStates["LoadingScreen"] = "LoadingScreen";
    GameStates["BeginScreen"] = "BeginScreen";
    GameStates["MainMenu"] = "MainMenu";
})(GameStates || (GameStates = {}));
export var GameEvents;
(function (GameEvents) {
    GameEvents["Loaded"] = "Loaded";
    GameEvents["Begin"] = "Begin";
})(GameEvents || (GameEvents = {}));
export function createGameFSM() {
    return createFsm({
        initial: GameStates.LoadingScreen,
        states: {
            [GameStates.LoadingScreen]: {
                [GameEvents.Loaded]: GameStates.BeginScreen,
            },
            [GameStates.BeginScreen]: {
                [GameEvents.Begin]: GameStates.MainMenu,
            },
            [GameStates.MainMenu]: {
                [GameEvents.Begin]: GameStates.MainMenu,
            },
        },
    });
}
//# sourceMappingURL=GameStates.js.map