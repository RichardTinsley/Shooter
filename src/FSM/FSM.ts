import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { Fsm, FsmStateMap, FsmConfig } from "./FSMTypes.js";
import { GameStates } from "./GameStates.js";

export class CoreFsm<S extends string, E extends string> implements Fsm<S, E>, IDraw, IUpdate {
  private _stateMap: FsmStateMap<S, E>;
  private _initialState: S;
  private _previousState: S;
  private _currentState: S;
  private State: any;

  public constructor(config: FsmConfig<S, E>) {
    this._stateMap = config.states;

    this._initialState = config.initial;
    this._currentState = this._initialState;
    this._previousState = this._initialState;

    this.State = GameStates[this._currentState];
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.State.draw(ctx);
  }
  update(): void {
    this.State.update();
  }

  public get state(): S {
    return this._currentState;
  }

  public get previousState(): S {
    return this._previousState;
  }

  public transition(event: E) {
    const nextState: S | undefined = this._stateMap[this._currentState][event];

    if (nextState) {
      this._previousState = this._currentState;
      this._currentState = nextState;
    }
  }
}

export function createFsm<S extends string, E extends string>(config: FsmConfig<S, E>): Fsm<S, E> {
  return new CoreFsm<S, E>(config);
}
