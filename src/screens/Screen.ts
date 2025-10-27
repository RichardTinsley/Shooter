import { Entity } from "../classes/Entity.js";
import { EntityFactory } from "../factories/EntityFactory.js";
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

  addEntity(entity: Entity): this {
    this.entities.push(entity);
    return this;
  }

  setLoadingScreen = () => {
    //ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    const entityFactory = new EntityFactory();
    this.entities.push(entityFactory.DSLogo());
    this.entities.push(entityFactory.DSTitle());
    this.entities.push(entityFactory.StatusBar());
  };
  setBeginScreen = () => console.log("OMG22222222");
}
