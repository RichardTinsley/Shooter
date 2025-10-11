import { Position, Size } from "../types/types.js";

export class EntityCoordinates {
  position: Position = { x: 0, y: 0 };
  destination?: Position;
  size!: Size;
  scaleSize!: Size;
  scale: number = 1.5;
  halfWidth!: number;

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  getSize(): Size {
    return this.size;
  }

  setSize(size: Size, scale: number): this {
    this.size = { ...size };
    this.scale = scale;
    this.scaleSize = {
      width: size.width * scale,
      height: size.height * scale,
    };
    this.halfWidth = this.scaleSize.width / 2;
    return this;
  }
}
