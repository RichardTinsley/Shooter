import { HUDItem } from "./HUDItem.js";
export class HUDMana extends HUDItem {
    constructor() {
        super();
        this.mana = 100;
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
//# sourceMappingURL=HUDMana.js.map