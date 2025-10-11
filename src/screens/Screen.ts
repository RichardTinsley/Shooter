import { Entity } from "../classes/Entity.js";
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { LoadingScreen } from "./LoadingScreen.js";

export class Screen implements IDraw, IUpdate {
  private entities: Entity[] = [];

  constructor() {
    this.setLoadingScreen();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.entities.forEach((entity) => entity.draw(ctx));
  }
  update(): void {
    this.entities.forEach((entity) => entity.update());
  }
  // state = new LoadingScreen(this).addComponent(GUIComponentFactory.DSLogo());
  addEntity(entity: Entity): this {
    this.entities.push(entity);
    return this;
  }

  // setBeginScreen = () => (this.state = new BeginScreen(this));
  setLoadingScreen = () => {
    //ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    this.entities.push(GUIComponentFactory.DSLogo());
  };
  setBeginScreen = () => console.log("OMG22222222");
}

// private summoning = TextFactory.Summoning();
