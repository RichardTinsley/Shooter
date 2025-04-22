import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { EnemyMovement } from "./EnemyMovement.js";
import { EnemyWalking } from "./enemyStates/EnemyWalking.js";
export class Enemy {
    constructor() {
        this.switchToWalkingState = () => (this.state = new EnemyWalking(this));
    }
    getCurrentState() {
        return this.state;
    }
    initialiseEnemy(fileName, width, height) {
        this.movement = new EnemyMovement().setSpeed(4);
        this.position = this.movement.getWaypoints();
        this.destination = this.movement.getWaypoints();
        this.sprite = new SpriteAnimation(fileName, width, height)
            .setPosition(this.position)
            .setScale(1.5);
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