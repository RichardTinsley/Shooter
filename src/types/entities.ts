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
  animationState: number;
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
  visual: {
    visual: CanvasImageSource | string;
    position: Position;
    size: Size;
    scaledSize: Size;
    scale: number;
    halfWidth: number;
    halfHeight: number;
  };
  movement: {
    destination: Position;
    speed: number;
  };
  oscillation: {
    startTime: number;
    frequency: number;
    amplitude: number;
    alpha: number;
  };
  animation: {
    animationState: number;
    maxFrames: number;
    maxRows: number;
  };
  status: {
    currentStatus: number;
    maxStatus: number;
    statusBarColour: string;
  };
  text: {
    align: CanvasTextAlign;
    lineWidth: number;
    strokeColour: string;
    fillColour: string;
  };
};
