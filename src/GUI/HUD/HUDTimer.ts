import { Time } from "../../handlers/Time.js";
import { HUDItem } from "./HUDItem.js";

export class HUDTimer extends HUDItem {
  text!: string;

  update() {
    this.text = Time.displayTimer();
  }
}
