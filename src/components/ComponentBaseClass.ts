import { EntityInformation } from "../types/types.js";

export abstract class ComponentBaseClass {
  protected information!: EntityInformation;
  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract update(): void;

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }

  setComponentInformation(information: EntityInformation): this {
    this.information = information;
    return this;
  }

  getComponentInformation(): EntityInformation {
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
