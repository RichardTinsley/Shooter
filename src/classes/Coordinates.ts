import { Position, Size } from "../types/types.js";

export class Coordinates {
  position!: Position;
  destination?: Position;
  scale!: number;
  size!: Size;
  scaleSize!: Size;

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

  setSize(size: Size, scale: number = 1.5): this {
    this.size = { ...size };
    this.scale = scale;
    this.scaleSize = {
      width: size.width * scale,
      height: size.height * scale,
    };
    return this;
  }
}
