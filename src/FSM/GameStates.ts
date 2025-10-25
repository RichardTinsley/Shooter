import { createFsm } from "./FSM.js";
import { Fsm } from "./FSMTypes.js";

export enum GameStates {
  LoadingScreen = "LoadingScreen",
  BeginScreen = "BeginScreen",
  MainMenu = "MainMenu",
}

export enum GameEvents {
  Loaded = "Loaded",
  Begin = "Begin",
}

export function createGameFSM(): Fsm<GameStates, GameEvents> {
  return createFsm<GameStates, GameEvents>({
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
