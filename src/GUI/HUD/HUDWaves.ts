import { HUDItem } from "./HUDItem.js";

export class HUDWaves extends HUDItem {
  private waves: number;

  constructor() {
    super();
    this.waves = 0;
  }
  setWaves() {
    this.waves++;
    this.text = this.waves.toString();
  }

  getWaves(): number {
    return this.waves;
  }
}
