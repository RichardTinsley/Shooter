import { SIZES } from "../../constants/game.js";
import { TextGlow } from "../texts/TextGlow.js";
import { SquareHitDetection } from "./SquareHitDetection.js";
export class MenuButtonTextGlow extends TextGlow {
    constructor(label, screen, setScreen) {
        super();
        this.screen = screen;
        this.setScreen = setScreen;
        this.size = SIZES.TEXT_MENUITEM;
        this.setText(label);
        this.width = this.getText().length * (this.size / 1.75);
        this.hitDetection = new SquareHitDetection(this.width, this.size);
    }
    setPosition(position) {
        super.setPosition(position);
        this.hitDetection.setHitBox(position);
        return this;
    }
    changeScreen() {
        this.setScreen();
    }
    mouseOver(state) {
        this.setState(state);
    }
}
//# sourceMappingURL=MenuButtonTextGlow.js.map