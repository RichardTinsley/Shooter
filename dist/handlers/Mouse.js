import { ANIMATION } from "../constants/animation.js";
import { PLAIN_CURSOR } from "../constants/types.js";
export class Mouse {
    constructor() {
        this.mouseOverEntity = PLAIN_CURSOR;
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
        window.addEventListener("click", () => this.mouseOverEntity.mouseClick());
    }
    update(screen) {
        this.mouseOverEntity = PLAIN_CURSOR;
        this.mouseOver(screen.getCurrentState().getArray());
        this.setCursor(this.mouseOverEntity.getType());
    }
    mouseOver(array) {
        array.forEach((entity) => {
            if (entity.hitDetection.checkCollision(this.cursor)) {
                this.mouseOverEntity = entity;
                this.mouseOverEntity.mouseOver(ANIMATION.MOUSEOVER);
            }
        });
        array.forEach((entity) => {
            if (entity !== this.mouseOverEntity) {
                entity.mouseOver(ANIMATION.NORMAL);
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