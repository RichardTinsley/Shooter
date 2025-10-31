import { SCREEN } from "../constants/screenSizes.js";
import { EntityFactory } from "../factories/EntityFactory.js";
import { GameState } from "../handlers/GameState.js";
import { Screen } from "./Screen.js";

export class BeginScreen extends Screen {
  constructor(public state: GameState) {
    super();
    const entityFactory = new EntityFactory();
    this.entities.push(entityFactory.DSLogo());
    this.entities.push(entityFactory.DSTitle());
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    super.draw(ctx);
  }
}
