import { EntityInformation, Position, Size } from "../types/types.js";
import { EntityComponents } from "./EntityComponents.js";
import { DrawEntityComponents } from "./states/DrawEntityComponents.js";

export class Entity {
  protected components!: EntityComponents;

  protected information: EntityInformation = {
    image: document.getElementById("dslogo") as HTMLImageElement,
    position: { x: 0, y: 0 },
    destination: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
    scaledSize: { width: 0, height: 0 },
    speed: 0,
    scale: 0,
    halfWidth: 0,
  };

  setEntityInformation(position: Position, size: Size, scale: number): this {
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

  setImage(image: HTMLImageElement): this {
    this.information.image = image;
    return this;
  }

  getComponents(): EntityComponents {
    return this.components;
  }

  setDrawComponents = (): this => {
    this.components = new DrawEntityComponents();
    this.components.setAllComponentInformation(this.information);
    return this;
  };

  // setTextSize(text: string, height: number): this {
  //   this.information.size = {
  //     width: Math.ceil(text.length * (height / 1.85)),
  //     height: height,
  //   };
  //   this.information.halfWidth = this.information.size.width / 2;
  //   return this;
  // }
}
