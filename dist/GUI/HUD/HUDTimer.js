import { Time } from "../../handlers/Time.js";
import { HUDItem } from "./HUDItem.js";
export class HUDTimer extends HUDItem {
    update() {
        this.text = Time.displayTimer();
    }
}
//# sourceMappingURL=HUDTimer.js.map