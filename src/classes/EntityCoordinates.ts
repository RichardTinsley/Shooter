import { Position, Size } from "../types/types.js";

export class EntityCoordinates {
  position: Position = { x: 0, y: 0 };
  destination?: Position;
  size!: Size;
  scaleSize!: Size;
  scale: number = 1.5;
  halfWidth!: number;
}
