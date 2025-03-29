import { SIZES } from "../../constants/game.js";
export var LABELS;
(function (LABELS) {
    LABELS["BEGIN"] = "Begin!";
    LABELS["NEWGAME"] = "New Game";
    LABELS["OPTIONS"] = "Options";
    LABELS["ABOUT"] = "About";
})(LABELS || (LABELS = {}));
export class MenuButton {
    constructor(menuButton, state, setState, text) {
        this.menuButton = menuButton;
        this.state = state;
        this.setState = setState;
        this.text = text;
        this.size = SIZES.TEXT_MENUITEM;
        this.menuButton.setText(this.text);
        this.width = this.text.length * (this.size / 1.75);
    }
    draw(ctx) {
        this.menuButton.draw(ctx);
    }
    update() {
        this.menuButton.update();
    }
    setPosition(x, y) {
        this.menuButton.setPosition(x, y);
        this.position = { x: x, y: y };
        this.hitBox = {
            x: this.position.x - this.width / 2,
            y: this.position.y - this.size / 2,
            width: this.width,
            height: this.size,
        };
        return this;
    }
    changeState() {
        this.setState();
    }
}
//# sourceMappingURL=MenuButton.js.map