import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { MouseOver } from "./states/MouseOver.js";
import { MouseOff } from "./states/MouseOff.js";
import { Mouse, CURSOR_STYLES } from "../../handlers/Mouse.js";
export class MenuButton {
    constructor(setScreen, label) {
        this.setScreen = setScreen;
        this.label = label;
        this.isMouseOver = false;
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
        Mouse.mouseOverEntity(this, MouseOver, MouseOff, CURSOR_STYLES.MENUBUTTON);
    }
}
//# sourceMappingURL=MenuButton.js.map