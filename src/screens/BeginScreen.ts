import { GUIEntityFactory } from "../factories/GUIEntityFactory.js";
import { MenuButtonFactory } from "../factories/MenuButtonFactory.js";
import { GameState } from "../handlers/GameState.js";
import { Screen } from "./Screen.js";

export class BeginScreen extends Screen {
  constructor(public state: GameState) {
    super();

    const entityFactory = new GUIEntityFactory();
    const menuButtonFactory = new MenuButtonFactory();

    this.entities.push(entityFactory.DSLogo());
    this.entities.push(entityFactory.DSTitle());
    this.entities.push(menuButtonFactory.BeginButton());
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.clearScreen(ctx);
    super.draw(ctx);
  }
}
