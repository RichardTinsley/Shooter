import { HUDItem } from "./HUDItem.js";

export class HUDMana extends HUDItem {
  mana: number = 100;

  constructor() {
    super();
    this.text = this.mana.toString();
  }

  getMana() {
    return this.mana;
  }

  setMana() {
    this.mana--;
    this.text = this.mana.toString();
  }
}
