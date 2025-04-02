import { SIZES } from "../../constants/game.js";
import { checkHitBoxCollision } from "../../utilities/collisionDetection.js";
export class MenuButton {
    constructor(menuLabel, state, setState) {
        this.menuLabel = menuLabel;
        this.state = state;
        this.setState = setState;
        this.size = SIZES.TEXT_MENUITEM;
        this.width = this.menuLabel.getText().length * (this.size / 1.75);
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
    checkCollision(cursor) {
        return checkHitBoxCollision(cursor, this.hitBox);
    }
}
//# sourceMappingURL=MenuButton.js.map