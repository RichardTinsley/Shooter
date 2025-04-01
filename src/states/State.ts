import { Menu } from "../GUI/menus/Menu.js";
import { BeginState } from "./BeginState.js";
import { LoadingState } from "./LoadingState.js";
import { MainMenuState } from "./MainMenuState.js";

export interface IState {
  state: State;
  menu: Menu;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class State {
  public currentState: IState = new LoadingState(this);

  public getCurrentState(): IState {
    return this.currentState;
  }

  public setBeginState = () => (this.currentState = new BeginState(this));

  public setMainMenuState = () => (this.currentState = new MainMenuState(this));

  public setNewGameState = () => (this.currentState = new BeginState(this));

  public setOptionsState = () => (this.currentState = new BeginState(this));

  public setAboutState = () => (this.currentState = new BeginState(this));
}
