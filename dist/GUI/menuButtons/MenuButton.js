import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
import { MenuButtonComponents } from "./components/MenuButtonComponents.js";
export class MenuButton {
    constructor(setScreen, label) {
        this.setScreen = setScreen;
        this.components = new MenuButtonComponents();
        this.components.label = label;
        this.components.hitDetection = new HitDetectionSquare();
    }
    draw(ctx) {
        this.components.label.draw(ctx);
    }
    update() {
        this.components.label.update();
        Mouse.mouseOver(this, STYLES.MENUBUTTON);
    }
    setPosition(position) {
        this.components.position = Object.assign({}, position);
        this.components.label.setPosition(position);
        this.components.hitDetection.setHitBox(position, this.components.label.getWidth(), this.components.label.getHeight());
        return this;
    }
    mouseClick() {
        this.setScreen();
    }
    setState(state) {
        this.components.label.setState(state);
    }
}
//# sourceMappingURL=MenuButton.js.map