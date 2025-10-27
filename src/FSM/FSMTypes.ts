// import { IDraw, IUpdate } from "../interfaces/interfaces.js";

// export type FsmStateMap<S extends string, E extends string> = {
//   [state in S]: {
//     [event in E]?: S;
//   };
// };

// export interface FsmConfig<S extends string, E extends string> {
//   initial: S;
//   states: FsmStateMap<S, E>;
// }

// export interface Fsm<S extends string, E extends string> extends IDraw, IUpdate {
//   state: S;
//   transition(event: E): void;
// }
