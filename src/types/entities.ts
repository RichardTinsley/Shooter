import { Position, Size } from "./types.js";

export type VisualType = {
  source: CanvasImageSource | string;
  position: Position;
  size: Size;
  scaledSize: Size;
  scale: number;
  halfSize: Size;
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
  start: number;
  frequency: number;
  amplitude: number;
  alpha: number;
};

export type StatusType = {
  current: number;
  maximum: number;
  colour: string;
};

export type TextType = {
  align: CanvasTextAlign;
  lineWidth: number;
  strokeColour: string;
  fillColour: string;
};

export type EntityData = {
  position: Position;
  display: CanvasImageSource | string;
  scale: number;
  size: Size;
  scaledSize: Size;
  halfSize: Size;

  text?: {
    align: CanvasTextAlign;
    stroke: number;
    strokeColour: string;
    fillColour: string;
  };

  move?: {
    destination: Position;
    speed: number;
  };

  oscillate?: {
    start: number;
    frequency: number;
    amplitude: number;
    alpha: number;
  };

  animate?: {
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
};
