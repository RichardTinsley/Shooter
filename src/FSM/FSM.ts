// import { IDraw, IUpdate } from "../interfaces/interfaces.js";
// import { Fsm, FsmStateMap, FsmConfig } from "./FSMTypes.js";

// export class CoreFsm<S extends string, E extends string> implements Fsm<S, E>, IDraw, IUpdate {
//   private _stateMap: FsmStateMap<S, E>;
//   private _currentState: S;
//   private _state: any;

//   public constructor(config: FsmConfig<S, E>, states: any) {
//     this._stateMap = config.states;
//     this._currentState = config.initial;
//     this._state = states[this._currentState];
//   }

//   draw(ctx: CanvasRenderingContext2D): void {
//     this._state.draw(ctx);
//   }
//   update(): void {
//     this._state.update();
//   }

//   public get state(): any {
//     return this._currentState;
//   }

//   public transition(event: E) {
//     const nextState: S | undefined = this._stateMap[this._currentState][event];

//     if (nextState) this._currentState = nextState;
//   }
// }

// export function createFsm<S extends string, E extends string>(
//   config: FsmConfig<S, E>,
//   state: any
// ): Fsm<S, E> {
//   return new CoreFsm<S, E>(config, state);
// }
