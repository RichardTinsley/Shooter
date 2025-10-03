import { Sprites } from "../../types/Sprites.js";
import { Enemy } from "./Enemy.js";

export class ZombieCheeks extends Enemy {
  width = 32;
  height = 32;
  scale = 1.5;
  speed = 6;
  drawOffsets = { x: 0, y: 0.05 };
  widthDivisor = 1;
  hitboxHeight = 0.5;
  healthBarHeight = 1;

  constructor(public sprites: Sprites) {
    super(sprites);
    this.initialiseComponents();
    this.setMovingState();
  }
}
