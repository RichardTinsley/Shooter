import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { EnemyMovementComponent } from "./EnemyMovementComponent.js";
import { EnemyWalkingState } from "./enemyStates/EnemyWalkingState.js";
export class Enemy {
    constructor() {
        this.movement = new EnemyMovementComponent();
        this.position = this.movement.getWaypoints();
        this.destination = this.movement.getWaypoints();
        this.healthBar = new HealthBar().setPosition(this.position);
        this.hitDetection = new HitDetectionCircle().setPosition(this.position);
        this.switchToWalkingState = () => (this.state = new EnemyWalkingState(this));
    }
    getCurrentState() {
        return this.state;
    }
    initialiseEnemy() {
        this.healthBar
            .setWidth(this.sprite.getScaledWidth())
            .setDrawOffsets(this.sprite.getScaledHeight());
        this.hitDetection
            .setWidth(this.sprite.getScaledWidth())
            .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);
        this.shadowWidth = this.sprite.getScaledWidth();
        this.mouseOverWidth = this.sprite.getScaledWidth() * 1.25;
        return this;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        return this;
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
        return this;
    }
    mouseClick() {
        return;
    }
    mouseOver(state) {
        return;
    }
    getType() {
        return "Enemy";
    }
}
//# sourceMappingURL=Enemy.js.map