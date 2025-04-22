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
        this.healthBar = new HealthBar().setPosition(this.position);
        this.hitDetection = new HitDetectionCircle().setPosition(this.position);
        this.switchToWalkingState = () => (this.state = new Walking(this));
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
    }
    setSprite(sprite) {
        this.sprite = new SpriteAnimation(sprite, this.spriteWidth, this.spriteHeight)
            .setPosition(this.position)
            .setScale(this.spriteScale);
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