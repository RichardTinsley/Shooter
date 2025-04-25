import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
export class MenuButton {
    constructor(label, screen, setScreen) {
        this.label = label;
        this.screen = screen;
        this.setScreen = setScreen;
        this.hitDetection = new HitDetectionSquare(this.label.getWidth(), this.label.getHeight());
    }
    draw(ctx) {
        this.label.draw(ctx);
    }
    update() {
        this.label.update();
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        this.label.setPosition(position);
        this.hitDetection.setHitBox(position);
        return this;
    }
    mouseClick() {
        this.setScreen();
    }
    mouseOver(state) {
        this.label.setState(state);
    }
    getType() {
        return "MenuButton";
    }
}
//# sourceMappingURL=MenuButton.js.map