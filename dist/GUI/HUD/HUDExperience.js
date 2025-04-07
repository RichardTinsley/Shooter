import { HUDItem } from "./HUDItem.js";
export class HUDExperience extends HUDItem {
    constructor() {
        super();
        this.experience = 0;
        this.text = this.experience.toString();
    }
    getExperience() {
        return this.experience;
    }
    setExperience() {
    }
}
//# sourceMappingURL=HUDExperience.js.map