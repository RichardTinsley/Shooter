import { ANIMATION } from "../constants/animation.js";
import { PLAIN_CURSOR } from "../constants/types.js";
export class Mouse {
    constructor() {
        this.mouseOverItem = PLAIN_CURSOR;
        this.cursor = {
            x: 0,
            y: 0,
            radius: 3,
            width: 3,
            height: 3,
            style: document.getElementById("canvas").style,
        };
        window.addEventListener("mousemove", (e) => {
            this.cursor.x = e.offsetX;
            this.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => this.mouseOverItem.mouseClick());
    }
    update(screen) {
        this.mouseOverItem = PLAIN_CURSOR;
        this.mouseOver(screen.getCurrentState().getArray());
        this.setCursor(this.mouseOverItem.getType());
    }
    mouseOver(array) {
        array.forEach((item) => {
            if (item.hitDetection.checkCollision(this.cursor)) {
                item.mouseOver(ANIMATION.MOUSEOVER);
                this.mouseOverItem = item;
            }
            else {
                item.mouseOver(ANIMATION.NORMAL);
            }
        });
    }
    setCursor(style) {
        this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    getCursor() {
        return this.cursor;
    }
}
//# sourceMappingURL=Mouse.js.map