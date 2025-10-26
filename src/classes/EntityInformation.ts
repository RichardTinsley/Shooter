import { Information, Position, Size } from "../types/types.js";

export class EntityInformation {
  protected information: Information = {
    image: document.getElementById("dslogo") as HTMLImageElement,
    position: { x: 0, y: 0 },
    destination: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
    scaledSize: { width: 0, height: 0 },
    speed: 0,
    scale: 0,
    halfWidth: 0,
  };

  setInformation(position: Position, size: Size, scale: number): this {
    this.information.position = { ...position };
    this.information.destination = { ...position };

    this.information.size = { ...size };
    this.information.scale = scale;

    this.information.scaledSize = {
      width: size.width * scale,
      height: size.height * scale,
    };

    this.information.halfWidth = this.information.scaledSize.width / 2;

    return this;
  }

  getInformation(): Information {
    return this.information;
  }

  setImage(image: HTMLImageElement): this {
    this.information.image = image;
    return this;
  }
}
