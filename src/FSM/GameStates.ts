import { Entity } from "../classes/Entity.js";
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { AssetLoader } from "../handlers/assetLoader.js";
import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { createFsm } from "./FSM.js";
import { Fsm } from "./FSMTypes.js";

export enum Screens {
  Loading = "Loading",
  Begin = "Beginning",
  MainMenu = "MainMenu",
}

export enum GameEvents {
  Loaded = "Loaded",
  Begin = "Begin",
}

export class GameState implements IDraw, IUpdate {
  protected entities: Entity[] = [];

  draw(ctx: CanvasRenderingContext2D): void {
    this.entities.forEach((entity) => entity.state.draw(ctx));
  }
  update(): void {
    this.entities.forEach((entity) => entity.state.update());
  }
}

class LoadingGameState extends GameState {
  private assetLoader = new AssetLoader();
  // private loadingBar!;
  constructor() {
    super();
    this.assetLoader;
    // .load(this.assetLoaded)
    // .catch((error) => console.error(`Error: "${error.fileName}"`))
    // //   .then(() => this.state.setBeginScreen());
    // .then(() => console.log("OMG"));

    const factory = new GUIComponentFactory();
    // this.loadingBar = factory.StatusBar();
    // this.loadingBar.getComponent(Components.VISUAL).setStatus(0, this.assetLoader.getAssetCount());
    this.entities.push(factory.DSLogo());
    this.entities.push(factory.StatusBar());
    this.entities.push(factory.DSTitle());
  }
  // assetLoaded = (): void => this.entities[0].increaseCurrentStatus(1);
}

export const ScreenStates = {
  [Screens.Loading]: new LoadingGameState(),
};

export function createGameFSM(): Fsm<Screens, GameEvents> {
  return createFsm<Screens, GameEvents>(
    {
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
    },
    ScreenStates
  );
}
