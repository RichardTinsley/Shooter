import { Position, Size } from "./types.js";

export type VisualType = {
  visual: CanvasImageSource | string;
  position: Position;
  size: Size;
  scaledSize: Size;
  scale: number;
  halfWidth: number;
  halfHeight: number;
};

export type MovementType = {
  destination: Position;
  speed: number;
};

export type AnimationType = {
  state: number;
  frame: number;
  row: number;
  direction: number;
  maxFrames: number;
  maxRows: number;
};

export type OscillationType = {
  startTime: number;
  frequency: number;
  amplitude: number;
  alpha: number;
};

export type StatusType = {
  currentStatus: number;
  maxStatus: number;
  statusBarColour: string;
};

export type TextType = {
  align: CanvasTextAlign;
  lineWidth: number;
  strokeColour: string;
  fillColour: string;
};

export type EntityType = {
  visual: CanvasImageSource | string;
  position: Position;
  size: Size;
  scaledSize: Size;
  scale: number;
  halfWidth: number;
  halfHeight: number;
  movement?: {
    destination: Position;
    speed: number;
  };
  oscillation?: {
    start: number;
    frequency: number;
    amplitude: number;
    alpha: number;
  };
  animation?: {
    state: number;
    frame: number;
    row: number;
    direction: number;
    maxFrames: number;
    maxRows: number;
  };
  status?: {
    current: number;
    maximum: number;
    colour: string;
  };
  text?: {
    align: CanvasTextAlign;
    stroke: number;
    strokeColour: string;
    fillColour: string;
  };
};
