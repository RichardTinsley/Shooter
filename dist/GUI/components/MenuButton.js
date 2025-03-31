import { SIZES } from "../../constants/game.js";
export var LABELS;
(function (LABELS) {
    LABELS["BEGIN"] = "Begin!";
    LABELS["NEWGAME"] = "New Game";
    LABELS["OPTIONS"] = "Options";
    LABELS["ABOUT"] = "About";
})(LABELS || (LABELS = {}));
export class MenuButton {
    constructor(menuLabel, state, setState, text) {
        this.menuLabel = menuLabel;
        this.state = state;
        this.setState = setState;
        this.text = text;
        this.size = SIZES.TEXT_MENUITEM;
        this.menuLabel.setText(this.text);
        this.width = this.text.length * (this.size / 1.75);
    }
    draw(ctx) {
        this.menuLabel.draw(ctx);
    }
    update() {
        this.menuLabel.update();
    }
    setPosition(position) {
        this.menuLabel.setPosition(position);
        this.position = Object.assign({}, position);
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
    mouseOver(state) {
        this.menuLabel.setState(state);
    }
}
//# sourceMappingURL=MenuButton.js.map