import { ComponentFactory } from "../factories/ComponentFactory.js";
import { EntityData, VisualType } from "../types/entities.js";
import { Position, Size } from "../types/types.js";
import { components, Components } from "../factories/ComponentFactory.js";

export class Entity {
  protected information!: EntityData;
  protected components: number[] = [];

  update(): void {
    this.components.forEach((component) => components.get(component)?.update(this.information));
  }

  setImage(display: CanvasImageSource): this {
    this.information.display = display;

    this.maxFrames = Math.floor(this.image.width / this.spriteWidth) - 1;
    this.maxRows = Math.floor(this.image.height / this.spriteHeight) - 1;

    // this.maxRows === 0
    //   ? (this.animationState = Animate.RowRepeat)
    //   : (this.animationState = Animate.RowsRepeat);
    return this;
  }

  setSize(size: Size, scale: number = 1): this {
    this.information.size = { ...size };
    this.information.scale = scale;

    this.information.scaledSize = {
      width: size.width * scale,
      height: size.height * scale,
    };

    this.information.halfSize.width = this.information.scaledSize.width / 2;
    this.information.halfSize.height = this.information.scaledSize.height / 2;
    return this;
  }

  setPosition(position: Position): this {
    this.information.position = { ...position };
    return this;
  }
}
