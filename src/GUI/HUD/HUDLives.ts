import { HUDItem } from "./HUDItem.js";

export class HUDLives extends HUDItem {
  lives: number = 10;

  constructor() {
    super();
    this.text = this.lives.toString();
  }

  getLives() {
    return this.lives;
  }

  setLives() {
    this.lives--;
    this.text = this.lives.toString();
  }
}
