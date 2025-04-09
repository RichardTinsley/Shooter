import { Position } from "../../constants/types.js";
import { Enemy } from "./Enemy.js";

export class ZombieEnemy extends Enemy {
  constructor(
    position: Position,
    fileName: string,
    spriteWidth: number,
    spriteHeight: number,
    scale: number,
    protected waypoints: Array<Position>
  ) {
    super(position, fileName, spriteWidth, spriteHeight, scale, waypoints);

    this.drawPositionOffsetY = -5;
    this.drawPositionOffsetX = this.width / 4;
    this.shadowWidth = this.width / 2;
    this.mouseOverWidth = this.width / 2;

    this.healthBar.setWidth(this.width * 0.5);
    this.hitDetection.setWidth(this.width * 0.5);
  }
}
