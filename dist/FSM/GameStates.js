import { EntityFactory } from "../factories/EntityFactory.js";
import { AssetLoader } from "../handlers/assetLoader.js";
import { createFsm } from "./FSM.js";
export var Screens;
(function (Screens) {
    Screens["Loading"] = "Loading";
    Screens["Begin"] = "Beginning";
    Screens["MainMenu"] = "MainMenu";
})(Screens || (Screens = {}));
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
        this.entities.forEach((entity) => entity.getComponents().draw(ctx));
    }
    update() {
        this.entities.forEach((entity) => entity.getComponents().update());
    }
}
class LoadingGameState extends GameState {
    constructor() {
        super();
        this.assetLoader = new AssetLoader();
        this.assetLoader;
        const factory = new EntityFactory();
        this.entities.push(factory.DSLogo());
    }
}
export const ScreenStates = {
    [Screens.Loading]: new LoadingGameState(),
};
export function createGameFSM() {
    return createFsm({
        initial: Screens.Loading,
        states: {
            [Screens.Loading]: {
                [GameEvents.Loaded]: Screens.Begin,
            },
            [Screens.Begin]: {
                [GameEvents.Begin]: Screens.MainMenu,
            },
            [Screens.MainMenu]: {
                [GameEvents.Begin]: Screens.MainMenu,
            },
        },
    }, ScreenStates);
}
//# sourceMappingURL=GameStates.js.map