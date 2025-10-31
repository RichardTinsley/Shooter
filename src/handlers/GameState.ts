import { IRender } from "../interfaces/interfaces.js";
import { BeginScreen } from "../screens/BeginScreen.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";

export class GameState implements IRender {
  protected state: IRender = new LoadingScreen(this);

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }
  update(): void {
    this.state.update();
  }

  setBeginScreen = () => (this.state = new BeginScreen(this));
  //ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
}
