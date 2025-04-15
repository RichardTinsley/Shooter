import { HitDetectionSquare } from "../../handlers/HitDetectionSquare.js";
export class MenuButton {
    constructor(menuLabel, screen, setScreen) {
        this.menuLabel = menuLabel;
        this.screen = screen;
        this.setScreen = setScreen;
        this.width =
            this.menuLabel.getText().length * (this.menuLabel.getSize() / 1.85);
        this.hitDetection = new HitDetectionSquare(this.width, this.menuLabel.getSize());
    }
    draw(ctx) {
        this.menuLabel.draw(ctx);
    }
    update() {
        this.menuLabel.update();
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        this.menuLabel.setPosition(position);
        this.hitDetection.setHitBox(position);
        return this;
    }
    changeScreen() {
        this.setScreen();
    }
    mouseOver(state) {
        this.menuLabel.setState(state);
    }
}
//# sourceMappingURL=MenuButton.js.map