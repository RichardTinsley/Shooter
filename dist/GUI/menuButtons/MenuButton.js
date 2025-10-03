import { HitDetectionSquare } from "../../entities/components/HitDetectionSquare.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
export class MenuButton {
    constructor(setScreen, label) {
        this.setScreen = setScreen;
        this.label = label;
        this.hitDetection = new HitDetectionSquare();
    }
    draw(ctx) {
        this.label.draw(ctx);
    }
    update() {
        this.label.update();
        Mouse.mouseOver(this, STYLES.MENUBUTTON);
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        this.label.setPosition(position);
        this.hitDetection.setHitBox(position, this.label.getWidth(), this.label.getHeight());
        return this;
    }
    mouseClick() {
        this.setScreen();
    }
    setState(state) {
        this.label.setState(state);
    }
}
//# sourceMappingURL=MenuButton.js.map