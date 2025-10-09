import { Coordinates } from "../classes/Coordinates.js";
import { EntityState } from "../classes/EntityState.js";

export interface IDraw {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface IUpdate {
  update(): void;
}

export interface IEntity {
  state: EntityState;
}

export interface IEntityComponent {
  draw(ctx: CanvasRenderingContext2D, coordinates: Coordinates): void;
  update(coordinates: Coordinates): void;
}
