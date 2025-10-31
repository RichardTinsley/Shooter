import { IRender } from "../interfaces/interfaces.js";
import { LoadingScreen } from "./LoadingScreen.js";

export class GameState implements IRender {
  protected state = new LoadingScreen(this);

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }
  update(): void {
    this.state.update();
  }

  setBeginScreen = () => console.log("OMG22222222");
  //ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
}
