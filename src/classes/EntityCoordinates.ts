import { Position, Size } from "../types/types.js";

export class EntityCoordinates {
  position: Position = { x: 0, y: 0 };
  destination?: Position;
  size!: Size;
  scaleSize!: Size;
  scale: number = 1;
  halfWidth!: number;
  drawOffsetX: number = 0;
  drawOffsetY: number = 0;

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

  setTextSize(text: string, height: number): this {
    this.size = {
      width: Math.ceil(text.length * (height / 1.85)),
      height: height,
    };
    this.halfWidth = this.size.width / 2;
    return this;
  }
}
