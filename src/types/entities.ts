import { Position, Size } from "./types.js";

export type VisualInformation = {
  visual: CanvasImageSource | string;
  position: Position;
  size: Size;
  scaledSize: Size;
  scale: number;
  halfWidth: number;
  halfHeight: number;
};

export type MovementInformation = {
  destination: Position;
  speed: number;

  startTime: number;
  frequency: number;
  amplitude: number;
  alpha: number;

  animationState: number;
  maxFrames: number;
  maxRows: number;
};

export type StatusInformation = {
  currentStatus: number;
  maxStatus: number;
  statusBarColour: string;
};

export type TextInformation = {
  align: CanvasTextAlign;
  lineWidth: number;
  strokeColour: string;
  fillColour: string;
};
