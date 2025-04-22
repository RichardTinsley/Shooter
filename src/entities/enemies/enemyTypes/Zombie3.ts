import { Enemy } from "../Enemy.js";

export class Zombie3 extends Enemy {
  protected width: number = 32;
  protected height: number = 32;
  public speed: number = 8;

  constructor(fileName: string) {
    super();
    this.initialiseEnemy(fileName, this.width, this.height);
    this.switchToWalkingState();
  }
}
