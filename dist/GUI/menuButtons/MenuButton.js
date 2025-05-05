import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { Mouse, CURSOR_STYLES } from "../../handlers/Mouse.js";
import { STATE } from "../../constants/states.js";
export class MenuButton {
    constructor(setScreen, label) {
        this.setScreen = setScreen;
        this.label = label;
        this.isMouseOver = false;
        this.label.setState(STATE.MOUSEOFF);
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
        this.hitDetection = new HitDetectionSquare().setHitBox(position, this.label.getWidth(), this.label.getHeight());
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
            if (this.label.getState() === STATE.MOUSEOFF) {
                Mouse.setCursor(this, CURSOR_STYLES.MENUBUTTON);
                this.label.setState(STATE.MOUSEOVER);
            }
        }
        else {
            if (this.label.getState() === STATE.MOUSEOVER) {
                Mouse.setCursor(null);
                this.label.setState(STATE.MOUSEOFF);
            }
        }
    }
}
//# sourceMappingURL=MenuButton.js.map