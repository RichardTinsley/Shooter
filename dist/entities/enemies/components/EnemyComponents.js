import { HitDetectionCircle } from "../../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../../sprites/SpriteAnimation.js";
import { HealthBar } from "./HealthBar.js";
import { Movement } from "./Movement.js";
export class EnemyComponents {
    constructor() {
        this.movement = new Movement();
        this.position = this.movement.getWaypoints();
        this.destination = this.movement.getWaypoints();
        this.sprite = new SpriteAnimation().setPosition(this.position);
        this.healthBar = new HealthBar().setPosition(this.position);
        this.hitDetection = new HitDetectionCircle().setPosition(this.position);
    }
    initialiseSprite(walkingSprite, spriteWidth, spriteHeight, spriteScale) {
        this.sprite
            .setImage(walkingSprite, spriteWidth, spriteHeight)
            .setScale(spriteScale)
            .initialise();
        return this;
    }
    initialiseMovement(movementSpeed) {
        this.movement.setSpeed(movementSpeed);
        return this;
    }
    initialiseComponents(width, height) {
        this.healthBar.setWidth(width).setDrawOffsets(height);
        this.hitDetection.setWidth(width).setDrawOffsets(height / 2);
        this.shadowWidth = width;
        this.mouseOverWidth = width * 1.25;
        return this;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
    }
}
//# sourceMappingURL=EnemyComponents.js.map