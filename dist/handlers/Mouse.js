import { STATE } from "../constants/states.js";
const size = 3;
export var CURSOR_STYLES;
(function (CURSOR_STYLES) {
    CURSOR_STYLES["PLAIN"] = "Plain";
    CURSOR_STYLES["TOWER"] = "Tower";
    CURSOR_STYLES["ENEMY"] = "Enemy";
    CURSOR_STYLES["MENUBUTTON"] = "MenuButton";
})(CURSOR_STYLES || (CURSOR_STYLES = {}));
export class Mouse {
    constructor() {
        Mouse.setCursor(null);
        window.addEventListener("mousemove", (e) => {
            Mouse.cursor.x = e.offsetX;
            Mouse.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => {
            if (Mouse.mouseOverEntity) {
                Mouse.mouseOverEntity.mouseClick();
                Mouse.setCursor(null);
            }
        });
    }
    static setCursor(entity, style = CURSOR_STYLES.PLAIN) {
        Mouse.mouseOverEntity = entity;
        if (Mouse.mouseOverEntity)
            Mouse.mouseOverEntity.setState(STATE.MOUSEOVER);
        Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    static mouseOver(entity, style) {
        if (Mouse.mouseOverEntity === entity)
            return;
        if (entity.components.hitDetection.checkCollision(Mouse.cursor))
            Mouse.setCursor(entity, style);
    }
    update() {
        if (!Mouse.mouseOverEntity)
            return;
        if (Mouse.mouseOverEntity.components.hitDetection.checkCollision(Mouse.cursor))
            return;
        else {
            Mouse.mouseOverEntity.setState(STATE.MOUSEOFF);
            Mouse.setCursor(null);
        }
    }
}
Mouse.cursor = {
    x: 0,
    y: 0,
    radius: size / 2,
    width: size,
    height: size,
    style: document.getElementById("canvas").style,
};
//# sourceMappingURL=Mouse.js.map