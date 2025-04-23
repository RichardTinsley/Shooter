import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { HealthBar } from "./components/HealthBar.js";
import { Movement } from "./components/Movement.js";
import { Walking } from "./states/Walking.js";
export class Enemy {
    constructor() {
        this.movement = new Movement();
        this.position = this.movement.getWaypoints();
        this.destination = this.movement.getWaypoints();
        this.sprite = new SpriteAnimation().setPosition(this.position);
        this.healthBar = new HealthBar().setPosition(this.position);
        this.hitDetection = new HitDetectionCircle().setPosition(this.position);
        this.switchToWalkingState = () => (this.state = new Walking(this));
    }
    getCurrentState() {
        return this.state;
    }
    initialiseEnemyComponents(width) {
        this.healthBar
            .setWidth(width)
            .setDrawOffsets(this.sprite.getScaledHeight());
        this.hitDetection
            .setWidth(width)
            .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);
        this.shadowWidth = width;
        this.mouseOverWidth = width * 1.25;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
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