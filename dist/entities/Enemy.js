import { HitDetectionCircle } from "../handlers/HitDetectionCircle.js";
import { Mouse, STYLES } from "../handlers/Mouse.js";
import { SpriteAnimation } from "./components/SpriteAnimation.js";
import { MouseOverEnemy } from "./components/MouseOverEnemy.js";
import { Movement } from "./components/Movement.js";
import { Moving } from "./states/Moving.js";
import { HealthBar } from "./components/HealthBar.js";
export class Enemy {
    constructor(enemy) {
        this.enemy = enemy;
        this.movement = new Movement().setSpeed(this.enemy.speed);
        this.position = this.movement.getWaypoints();
        this.destination = this.movement.getWaypoints();
        this.sprite = new SpriteAnimation()
            .setPosition(this.position)
            .setImage(this.enemy.normal.move, this.enemy.width, this.enemy.height)
            .setScale(this.enemy.scale)
            .setDrawOffsets(this.enemy.drawOffsets.x, this.enemy.drawOffsets.y)
            .initialise();
        this.healthBar = new HealthBar()
            .setPosition(this.position)
            .setWidth(this.sprite.getWidth() / this.enemy.widthDivisor)
            .setDrawOffsets(this.sprite.getHeight());
        this.hitDetection = new HitDetectionCircle()
            .setPosition(this.position)
            .setWidth(this.sprite.getWidth() / this.enemy.widthDivisor)
            .setDrawOffsets(this.sprite.getHeight() / this.enemy.hitboxHeightDivisor);
        this.mouseOverEnemy = new MouseOverEnemy()
            .setPosition(this.position)
            .setWidth((this.sprite.getWidth() / this.enemy.widthDivisor) * 1.25);
        this.shadowWidth = this.sprite.getWidth() / this.enemy.widthDivisor;
        this.setMovingState = () => (this.state = new Moving(this));
        this.setMovingState();
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
        Mouse.mouseOver(this, STYLES.ENEMY);
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
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