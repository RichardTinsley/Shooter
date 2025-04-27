import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { MouseOver } from "./states/MouseOver.js";
import { MouseOff } from "./states/MouseOff.js";
import { Mouse } from "../../handlers/Mouse.js";
export class MenuButton {
    constructor(setScreen, label) {
        this.setScreen = setScreen;
        this.label = label;
        this.hitDetection = new HitDetectionSquare(this.label.getWidth(), this.label.getHeight());
    }
    draw(ctx) {
        this.label.draw(ctx);
    }
    update() {
        this.label.update();
        this.mouseOver();
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        this.label.setPosition(position);
        this.hitDetection.setHitBox(position);
        return this;
    }
    getCurrentState() {
        return this.state;
    }
    mouseClick() {
        this.setScreen();
    }
    mouseOver() {
        if (this.hitDetection.checkCollision(Mouse.cursor)) {
            Mouse.cursor.mouseOverEntity = this;
            if (!(this.state instanceof MouseOver)) {
                this.state = new MouseOver(this);
            }
        }
        else {
            if (!(this.state instanceof MouseOff)) {
                this.state = new MouseOff(this);
            }
        }
    }
    getType() {
        return "MenuButton";
    }
}
//# sourceMappingURL=MenuButton.js.map