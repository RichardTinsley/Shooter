import { COLOURS, getColour } from "../constants/colours.js";
import { Information, Position, Size } from "../types/types.js";

export class EntityInformation {
  protected information: Information = {
    visual: "",
    position: { x: 0, y: 0 },
    destination: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
    scaledSize: { width: 0, height: 0 },
    speed: 0,
    scale: 0,
    halfWidth: 0,
    halfHeight: 0,
    currentStatus: 0,
    maxStatus: 0,
    statusBarColour: getColour(COLOURS.WHITE),
    animationState: 0,
    alpha: 1,
    frequency: 0,
    amplitude: 0,
    startTime: Date.now(),
  };

  getInformation(): Information {
    return this.information;
  }

  setVisual(visual: CanvasImageSource | string): this {
    this.information.visual = visual;
    return this;
  }

  setStatusBarColour(colour: string): void {
    this.information.statusBarColour = colour;
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
