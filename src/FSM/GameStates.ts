import { Entity } from "../classes/Entity.js";
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
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
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.entities.forEach((entity) => entity.update());
  }
}

class LoadingGameState extends GameState {
  constructor() {
    super();
    const factory = new GUIComponentFactory();
    this.entities.push(factory.DSLogo());
    this.entities.push(factory.DSTitle());
    this.entities.push(factory.LoadingBar());
  }
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
