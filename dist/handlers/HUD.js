import { Time } from "./Time.js";
export class HUD {
    constructor() { }
    static setLives() {
        HUD.lives--;
    }
    static getCoins() {
        return HUD.coins;
    }
    static getWave() {
        return HUD.waves;
    }
    static setWave() {
        HUD.waves++;
    }
}
HUD.lives = 10;
HUD.coins = 100;
HUD.experience = 0;
HUD.waves = 1;
HUD.timer = Time.displayTimer();
//# sourceMappingURL=HUD.js.map