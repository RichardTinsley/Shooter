import { SIZES } from "../constants/game.js";
export class MenuButton {
    constructor(menuButton, state, text, x, y) {
        this.menuButton = menuButton;
        this.state = state;
        this.text = text;
        this.size = SIZES.TEXT_MENUITEM;
        this.menuButton.setText(this.text).setPosition(x, y);
        this.width = this.text.length * (this.size / 1.75);
        this.position = { x: x, y: y };
        this.hitBox = {
            x: this.position.x - this.width / 2,
            y: this.position.y - this.size / 2,
            width: this.width,
            height: this.size,
        };
    }
    draw(ctx) {
        this.menuButton.draw(ctx);
    }
    update() {
        this.menuButton.update();
    }
    setState(state) {
        this.state.setState(state);
    }
}
//# sourceMappingURL=MenuButton.js.map