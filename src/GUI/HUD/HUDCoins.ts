import { HUDItem } from "./HUDItem.js";

export class HUDCoins extends HUDItem {
  coins: number = 100;

  constructor() {
    super();
    this.text = this.coins.toString();
  }

  getCoins() {
    return this.coins;
  }

  buyTower(cost: number) {
    this.coins -= cost;
    this.text = this.coins.toString();
  }

  setCoins() {
    // ENEMY TYPE in parameter affect gold.  BOSS or GoldEnemy etc
    // const newCoins = Math.floor(Math.random() * waves + 1);
    // this.coins += newCoins;
    // this.text = this.coins.toString();
    // return '$' + newCoins
  }
}
