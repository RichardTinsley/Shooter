import { SIZES } from "../../constants/game.js";
import { SquareHitDetection } from "../../handlers/SquareHitDetection.js";
export class MenuButton {
    constructor(menuLabel, screen, setScreen) {
        this.menuLabel = menuLabel;
        this.screen = screen;
        this.setScreen = setScreen;
        this.size = SIZES.TEXT_MENUITEM;
        this.width = this.menuLabel.getText().length * (this.size / 1.75);
        this.hitDetection = new SquareHitDetection(this.width, this.size);
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