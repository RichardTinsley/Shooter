import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { HealthBar } from "./components/HealthBar.js";
import { MouseOverEnemy } from "./components/MouseOverEnemy.js";
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
        this.mouseOverEnemy = new MouseOverEnemy().setPosition(this.position);
        this.walkingState = () => (this.state = new Walking(this));
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
        this.mouseOverEnemy.setWidth(width * 1.25);
        this.shadowWidth = width;
        return this;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
        Mouse.mouseOver(this, STYLES.ENEMY);
    }
    mouseClick() {
        if (Mouse.selectedEnemy === this)
            if (Mouse.selectedEnemy) {
            }
        Mouse.selectedEnemy = this;
    }
    setState(state) {
        this.mouseOverEnemy.setState(state);
    }
}
//# sourceMappingURL=Enemy.js.map