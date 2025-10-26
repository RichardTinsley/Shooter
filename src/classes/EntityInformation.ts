import { Position, Size } from "../types/types.js";

export class EntityInformation {
  private image!: HTMLImageElement;
  private position!: Position;
  private destination!: Position;
  private size!: Size;
  private scaledSize!: Size;
  private speed!: number;
  private scale!: number;
  private halfWidth!: number;

  setInformation(position: Position, size: Size, scale: number): this {
    this.position = { ...position };
    this.destination = { ...position };

    this.size = { ...size };
    this.scale = scale;

    this.scaledSize = {
      width: size.width * scale,
      height: size.height * scale,
    };

    this.halfWidth = this.scaledSize.width / 2;

    return this;
  }

  getInformation(): this {
    return this;
  }

  setImage(image: HTMLImageElement): this {
    this.image = image;
    return this;
  }
}
