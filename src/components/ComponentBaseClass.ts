import { Information } from "../types/types.js";

export abstract class ComponentBaseClass {
  protected information!: Information;
  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract update(): void;

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }

  setComponentInformation(information: Information): this {
    this.information = information;
    return this;
  }

  getComponentInformation(): Information {
    return this.information;
  }

  // setPosition(position: Position): this {
  //   this.position = position;
  //   return this;
  // }

  // getPosition(): Position {
  //   return this.position;
  // }
}
