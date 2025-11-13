import { Position, Size } from "./types.js";

export type EntityData = {
  alpha: number;
  position: Position;
  scale: number;
  size: Size;
  scaledSize: Size;
  halfSize: Size;

  image: {
    source: CanvasImageSource;
    direction: number;
    offset: Position;
  };

  text?: {
    source: string;
    align: CanvasTextAlign;
    colour: string;
    stroke: {
      size: number;
      colour: string;
    };
  };

  move?: {
    destination: Position;
    speed: number;
  };

  oscillate?: {
    start: number;
    frequency: number;
    amplitude: number;
  };

  animate?: {
    frame: {
      current: number;
      maximum: number;
    };
    row: {
      current: number;
      maximum: number;
    };
  };

  status?: {
    current: number;
    maximum: number;
    colour: string;
    offset: Position;
  };

  collision?: {
    offset: Position;
  };
};
