import { Position, Range, Size } from "./types.js";

export type EntityData = {
  position: Position;

  scale: number;
  size: Size;
  scaledSize: Size;
  halfSize: Size;
  alpha: number;

  image?: {
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
    frame: Range;
    row: Range;
  };

  status?: {
    value: Range;
    colour: string;
    offset: Position;
  };

  collision?: {
    offset: Position;
  };
};
