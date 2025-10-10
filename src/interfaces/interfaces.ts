import { EntityState } from "../classes/Entity.js";

export interface IDraw {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface IUpdate {
  update(): void;
}

export interface IEntity {
  state: EntityState;
}
