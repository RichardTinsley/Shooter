import { EntityCoordinates } from "../classes/EntityCoordinates.js";

export abstract class ComponentBaseClass {
  abstract draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void;
  abstract update(coordinates: EntityCoordinates): void;
}
