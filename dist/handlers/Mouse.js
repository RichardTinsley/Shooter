import { PLAIN_CURSOR } from "../constants/types.js";
const size = 3;
export class Mouse {
    constructor() {
        window.addEventListener("mousemove", (e) => {
            Mouse.cursor.x = e.offsetX;
            Mouse.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => Mouse.cursor.mouseOverEntity.mouseClick());
    }
    resetCursor() {
        Mouse.cursor.mouseOverEntity = PLAIN_CURSOR;
    }
    setCursor() {
        const style = Mouse.cursor.mouseOverEntity.getType();
        Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
}
Mouse.cursor = {
    x: 0,
    y: 0,
    radius: size,
    width: size,
    height: size,
    style: document.getElementById("canvas").style,
    mouseOverEntity: PLAIN_CURSOR,
};
//# sourceMappingURL=Mouse.js.map