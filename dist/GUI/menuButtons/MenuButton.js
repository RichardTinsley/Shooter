import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { MouseOver } from "./states/MouseOver.js";
import { MouseOff } from "./states/MouseOff.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
export class MenuButton {
    constructor(setScreen, label) {
        this.setScreen = setScreen;
        this.label = label;
        this.isMouseOver = false;
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
            if (!this.isMouseOver) {
                this.isMouseOver = true;
                Mouse.setCursor(STYLES.MENUBUTTON);
                this.state = new MouseOver(this);
            }
        }
        else {
            if (this.isMouseOver) {
                this.isMouseOver = false;
                Mouse.setCursor(STYLES.PLAIN);
                this.state = new MouseOff(this);
            }
        }
    }
}
//# sourceMappingURL=MenuButton.js.map