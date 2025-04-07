import { HUDItem } from "./HUDItem.js";
export class HUDCoins extends HUDItem {
    constructor() {
        super();
        this.coins = 100;
        this.text = this.coins.toString();
    }
    getCoins() {
        return this.coins;
    }
    buyTower(cost) {
        this.coins -= cost;
        this.text = this.coins.toString();
    }
    setCoins() {
    }
}
//# sourceMappingURL=HUDCoins.js.map