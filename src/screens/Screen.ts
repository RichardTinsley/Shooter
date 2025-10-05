import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { BeginScreen } from "./states/BeginScreen.js";
import { LoadingScreen } from "./states/LoadingScreen.js";

export interface IScreenState extends IDraw, IUpdate {
  //   menu: Menu;
}

export class Screen {
  state: IScreenState;

  constructor() {
    this.state = new LoadingScreen(this);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }
  update(): void {
    this.state.update();
  }

  setBeginScreen = () => (this.state = new BeginScreen(this));
}
