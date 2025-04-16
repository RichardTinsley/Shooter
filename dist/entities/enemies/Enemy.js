import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { EnemyWaves } from "../../handlers/EnemyWaves.js";
export class Enemy {
    constructor() { }
    initialiseEnemy() {
        this.sprite.setPosition(this.position);
        this.shadowWidth = this.sprite.getScaledWidth();
        this.mouseOverWidth = this.sprite.getScaledWidth() * 1.25;
        this.healthBar = new HealthBar()
            .setPosition(this.position)
            .setWidth(this.sprite.getScaledWidth())
            .setDrawOffsets(this.sprite.getScaledHeight());
        this.hitDetection = new HitDetectionCircle()
            .setPosition(this.position)
            .setWidth(this.sprite.getScaledWidth())
            .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);
        return this;
    }
    setDamage(damage) {
        this.healthBar.setDamage(damage);
        if (this.healthBar.getCurrentStatus() === 0) {
            EnemyWaves.enemyKilled();
        }
    }
    getType() {
        return "Enemy";
    }
    mouseClick() {
        return;
    }
}
//# sourceMappingURL=Enemy.js.map