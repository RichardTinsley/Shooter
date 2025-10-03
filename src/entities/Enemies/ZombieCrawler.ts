import { Sprites } from "../../types/Sprites.js";
import { Enemy } from "./Enemy.js";

export class ZombieCrawler extends Enemy {
  width = 64;
  height = 32;
  scale = 1.5;
  speed = 1;
  drawOffsets = { x: 0.25, y: 0.1 };
  widthDivisor = 2;
  hitboxHeight = 0.25;
  healthBarHeight = 0.65;

  constructor(public sprites: Sprites) {
    super(sprites);
    this.initialiseComponents();
    this.setMovingState();
  }
}
