import { checkHitBoxCollision } from "../utilities/collisionDetection.js";
import { MenuButton } from "../GUI/components/MenuButton.js";
import { ANIMATION } from "../constants/animation.js";
const mouseSize = 3;
export class Mouse {
    constructor(state) {
        this.cursor = {
            x: 0,
            y: 0,
            radius: mouseSize,
            width: mouseSize,
            height: mouseSize,
            style: document.getElementById("canvas").style,
        };
        this.mouseOverItem = undefined;
        window.addEventListener("mousemove", (e) => {
            this.cursor.x = e.offsetX;
            this.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => {
            this.mouseClick();
        });
    }
    update(state) {
        this.mouseOverMenuButton(state.getCurrentState());
        this.setCursor();
    }
    mouseOverMenuButton(state) {
        var _a;
        (_a = state.menu) === null || _a === void 0 ? void 0 : _a.getMenu().find((item) => {
            if (checkHitBoxCollision(this.cursor, item.hitBox)) {
                item.mouseOver(ANIMATION.ANIMATING);
                this.mouseOverItem = item;
            }
            else {
                item.mouseOver(ANIMATION.FINISHED);
                this.mouseOverItem = undefined;
            }
        });
    }
    mouseClick() {
        if (this.mouseOverItem) {
            this.mouseOverItem.changeState();
        }
    }
    setCursor() {
        let style = "Plain";
        if (this.mouseOverItem instanceof MenuButton)
            style = "MenuItem";
        this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    getCursor() {
        return this.cursor;
    }
}
//# sourceMappingURL=Mouse.js.map