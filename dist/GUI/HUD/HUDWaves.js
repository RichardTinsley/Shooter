import { HUDItem } from "./HUDItem.js";
export class HUDWaves extends HUDItem {
    constructor() {
        super();
        this.waves = 0;
    }
    setWaves() {
        this.waves++;
        this.text = this.waves.toString();
    }
    getWaves() {
        return this.waves;
    }
}
//# sourceMappingURL=HUDWaves.js.map