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
    frequency: 0,
    amplitude: 0,
    startTime: Date.now(),
  };

  setPosition(position: Position): this {
    this.information.position = { ...position };
    this.information.destination = { ...position };
    return this;
  }

  setSize(size: Size, scale: number = 1): this {
    this.information.size = { ...size };
    this.information.scale = scale;

    this.information.scaledSize = {
      width: size.width * scale,
      height: size.height * scale,
    };

    this.information.halfWidth = this.information.scaledSize.width / 2;
    this.information.halfHeight = this.information.scaledSize.height / 2;
    return this;
  }

  getInformation(): Information {
    return this.information;
  }

  setVisual(visual: CanvasImageSource | string): this {
    this.information.visual = visual;
    return this;
  }

  setText(text: string, height: number): this {
    this.information.visual = text;
    this.information.size = {
      width: Math.ceil(text.length * (height / 1.85)),
      height: height,
    };
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
