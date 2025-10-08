import { Position, Size } from "../types/types.js";

export interface IDraw {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface IUpdate {
  update(): void;
}

export interface IEntityDetails {
  position: Position;
  scale: number;
  size: Size;
  scaleSize: Size;
}

export interface IEntityComponent {
  draw(ctx: CanvasRenderingContext2D, EntityDetails: IEntityDetails): void;
  update(EntityDetails: IEntityDetails): void;
}

export interface IStateRender extends IDraw, IUpdate {}

export interface IScreenState extends IDraw, IUpdate {
  //   menu: Menu;
}
