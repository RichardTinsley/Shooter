import { IDraw, IUpdate } from "../interfaces/interfaces.js";
import { EntityInformation, Position, Size } from "../types/types.js";

export interface IEntityState extends IDraw, IUpdate {
  entity: Entity;
}

export class Entity {
  information: EntityInformation = {
    position: { x: 0, y: 0 },
    destination: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
    scaledSize: { width: 0, height: 0 },
    speed: 0,
    scale: 0,
    halfWidth: 0,
    currentStatus: 0,
    maxStatus: 0,
  };

  setPosition(position: Position): this {
    this.information.position = { ...position };
    return this;
  }

  setSize(size: Size, scale: number): this {
    this.information.size = { ...size };
    this.information.scale = scale;
    this.information.scaledSize = {
      width: size.width * scale,
      height: size.height * scale,
    };
    this.information.halfWidth = this.information.scaledSize.width / 2;
    return this;
  }

  setTextSize(text: string, height: number): this {
    this.information.size = {
      width: Math.ceil(text.length * (height / 1.85)),
      height: height,
    };
    this.information.halfWidth = this.information.size.width / 2;
    return this;
  }

  setStatus(currentStatus: number, maxStatus: number): this {
    this.information.currentStatus = currentStatus;
    this.information.maxStatus = maxStatus;
    return this;
  }

  getCurrentStatus(): number {
    return this.information.currentStatus;
  }

  increaseCurrentStatus(increment: number): void {
    this.information.currentStatus += increment;
    if (this.information.currentStatus > this.information.maxStatus)
      this.information.currentStatus = this.information.maxStatus;
  }

  decreaseCurrentStatus(decrement: number): void {
    this.information.currentStatus -= decrement;
    if (this.information.currentStatus < 0) this.information.currentStatus = 0;
  }
}
