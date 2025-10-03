import { HitDetectionCircle } from "../handlers/HitDetectionCircle.js";
import { Mouse, STYLES } from "../handlers/Mouse.js";
import { SpriteAnimation } from "./components/SpriteAnimation.js";
import { MouseOverEnemy } from "./components/MouseOverEnemy.js";
import { Movement } from "./components/Movement.js";
import { Moving } from "./states/Moving.js";
import { HealthBar } from "./components/HealthBar.js";
export class Enemy {
    constructor(sprites) {
        this.sprites = sprites;
        this.movement = new Movement();
        this.position = this.movement.getWaypoints();
        this.destination = this.movement.getWaypoints();
        this.sprite = new SpriteAnimation();
        this.healthBar = new HealthBar();
        this.hitDetection = new HitDetectionCircle();
        this.mouseOverEnemy = new MouseOverEnemy();
        this.setPosition = (position) => (this.position = Object.assign({}, position));
        this.setDestination = (destination) => (this.destination = Object.assign({}, destination));
        this.setMovingState = () => (this.state = new Moving(this));
    }
    initialiseComponents() {
        this.movement.setSpeed(this.speed);
        this.sprite
            .setPosition(this.position)
            .setImage(this.sprites.move, this.width, this.height)
            .setScale(this.scale)
            .setDrawOffsets(this.drawOffsets.x, this.drawOffsets.y)
            .initialise();
        this.healthBar
            .setPosition(this.position)
            .setWidth(this.sprite.getWidth() / this.widthDivisor)
            .setDrawOffsets(this.sprite.getHeight() * this.healthBarHeight);
        this.hitDetection
            .setPosition(this.position)
            .setWidth(this.sprite.getWidth() / this.widthDivisor)
            .setDrawOffsets(this.sprite.getHeight() * this.hitboxHeight);
        this.mouseOverEnemy
            .setPosition(this.position)
            .setWidth(this.sprite.getWidth() / this.widthDivisor);
        this.shadowWidth = this.sprite.getWidth() / this.widthDivisor;
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