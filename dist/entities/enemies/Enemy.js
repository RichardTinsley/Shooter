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
        this.walkingState = () => (this.state = new Walking(this));
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
    initialiseComponents(width, height) {
        this.healthBar.setWidth(width).setDrawOffsets(height);
        this.hitDetection.setWidth(width).setDrawOffsets(height / 2);
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
    mouseOver() {
        return;
    }
}
//# sourceMappingURL=Enemy.js.map