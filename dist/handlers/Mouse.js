import { checkHitBoxCollision } from "../utilities/collisionDetection.js";
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
            this.setCursor(e);
            this.mouseOverItem = this.mouseOverMenuButton(state.getCurrentState());
        });
        window.addEventListener("click", () => {
            this.mouseClick();
        });
    }
    mouseOverMenuButton(state) {
        return state.gui.getMenu().find((item) => {
            if (!checkHitBoxCollision(this.cursor, item.hitBox)) {
                return item;
            }
        });
    }
    mouseClick() {
        if (this.mouseOverItem) {
            this.mouseOverItem.changeState();
        }
    }
    setCursor(e) {
        this.cursor.x = e.offsetX;
        this.cursor.y = e.offsetY;
    }
    getCursor() {
        return this.cursor;
    }
}
//# sourceMappingURL=Mouse.js.map