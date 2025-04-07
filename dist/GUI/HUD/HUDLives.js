import { HUDItem } from "./HUDItem.js";
export class HUDLives extends HUDItem {
    constructor() {
        super();
        this.lives = 10;
        this.text = this.lives.toString();
    }
    getLives() {
        return this.lives;
    }
    setLives() {
        this.lives--;
        this.text = this.lives.toString();
    }
}
//# sourceMappingURL=HUDLives.js.map