import { Entity } from "../classes/Entity.js";
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { createFsm } from "./FSM.js";
import { Fsm } from "./FSMTypes.js";

export enum GameStatesKeys {
  LoadingScreen = "LoadingScreen",
  BeginScreen = "BeginScreen",
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
  }
}

export const GameStates: Record<string, any> = {
  [GameStatesKeys.LoadingScreen]: new LoadingGameState(),
};

export function createGameFSM(): Fsm<GameStatesKeys, GameEvents> {
  return createFsm<GameStatesKeys, GameEvents>({
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
