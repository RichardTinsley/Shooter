import { ANIMATION } from "../constants/animation.js";
export class Mouse {
    constructor() {
        this.mouseOverItem = undefined;
        this.mouseSize = 3;
        this.cursor = {
            x: 0,
            y: 0,
            radius: this.mouseSize,
            width: this.mouseSize,
            height: this.mouseSize,
            style: document.getElementById("canvas").style,
        };
        window.addEventListener("mousemove", (e) => {
            this.cursor.x = e.offsetX;
            this.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => this.mouseClick());
    }
    update(screen) {
        this.mouseOverItem = undefined;
        this.setCursor("Plain");
        this.mouseOver(screen.getCurrentState().getArray());
    }
    mouseOver(array) {
        array.forEach((item) => {
            if (item.hitDetection.checkCollision(this.cursor)) {
                item.mouseOver(ANIMATION.MOUSEOVER);
                this.mouseOverItem = item;
                this.setCursor(this.mouseOverItem.getType());
            }
            else {
                item.mouseOver(ANIMATION.NORMAL);
            }
        });
    }
    mouseClick() {
        if (!this.mouseOverItem)
            return;
        this.mouseOverItem.mouseClick();
        this.mouseOverItem = undefined;
    }
    setCursor(style) {
        this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    getCursor() {
        return this.cursor;
    }
}
//# sourceMappingURL=Mouse.js.map