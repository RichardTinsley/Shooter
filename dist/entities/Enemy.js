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
        this.movement = new Movement();
        this.position = this.movement.getWaypoints();
        this.destination = this.movement.getWaypoints();
        this.sprite = new SpriteAnimation().setPosition(this.position);
        this.healthBar = new HealthBar().setPosition(this.position);
        this.hitDetection = new HitDetectionCircle().setPosition(this.position);
        this.mouseOverEnemy = new MouseOverEnemy().setPosition(this.position);
        this.setMovingState = () => (this.state = new Moving(this));
        this.sprite
            .setImage(enemy.normal.move, enemy.width, enemy.height)
            .setScale(enemy.scale)
            .setDrawOffsets(enemy.drawOffsets.x, enemy.drawOffsets.y)
            .initialise();
        this.movement.setSpeed(enemy.speed);
        this.healthBar
            .setWidth(this.sprite.getWidth() / enemy.widthDivisor)
            .setDrawOffsets(this.sprite.getHeight());
        this.hitDetection
            .setWidth(this.sprite.getWidth() / enemy.widthDivisor)
            .setDrawOffsets(this.sprite.getHeight() / enemy.hitboxHeightDivisor);
        this.mouseOverEnemy.setWidth(this.sprite.getWidth() * 1.25);
        this.shadowWidth = this.sprite.getWidth() / enemy.widthDivisor;
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