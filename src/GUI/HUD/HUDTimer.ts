import { Time } from "../../handlers/Time.js";
import { HUDItem } from "./HUDItem.js";

export class HUDTimer extends HUDItem {
  constructor() {
    super();
    Time.startTimer();
  }
  update() {
    this.text = Time.displayTimer();
  }
}
