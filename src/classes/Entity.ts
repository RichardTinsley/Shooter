import { IEntityComponent, IStateRender } from "../interfaces/interfaces.js";
import { Coordinates } from "./Coordinates.js";
import { EntityDrawState } from "./states/EntityDrawState.js";

export class Entity {
  state!: IStateRender;
  visual!: IEntityComponent;
  coordinates!: Coordinates;

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }

  update(): void {
    this.state.update();
  }

  setDrawState = () => (this.state = new EntityDrawState(this));
}
