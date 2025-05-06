import { STATE } from "../constants/states.js";
export var STYLES;
(function (STYLES) {
    STYLES["PLAIN"] = "Plain";
    STYLES["TOWER"] = "Tower";
    STYLES["ENEMY"] = "Enemy";
    STYLES["MENUBUTTON"] = "MenuButton";
})(STYLES || (STYLES = {}));
let mouseOverEntity;
export class Mouse {
    constructor() {
        Mouse.setCursorStyle(STYLES.PLAIN);
        window.addEventListener("mousemove", (e) => {
            Mouse.cursor.x = e.offsetX;
            Mouse.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => {
            if (mouseOverEntity) {
                mouseOverEntity.mouseClick();
                Mouse.setCursorStyle(STYLES.PLAIN);
            }
        });
    }
    static setCursorStyle(style) {
        Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    static mouseOver(entity, style) {
        if (entity.components.hitDetection.checkCollision(Mouse.cursor)) {
            if ((mouseOverEntity === null || mouseOverEntity === void 0 ? void 0 : mouseOverEntity.components.position.y) > entity.components.position.y) {
                entity.setState(STATE.MOUSEOFF);
            }
            else {
                Mouse.setCursorStyle(style);
                mouseOverEntity = entity;
                mouseOverEntity.setState(STATE.MOUSEOVER);
            }
        }
        else {
            entity.setState(STATE.MOUSEOFF);
        }
    }
    update() {
        if (!(mouseOverEntity === null || mouseOverEntity === void 0 ? void 0 : mouseOverEntity.components.hitDetection.checkCollision(Mouse.cursor))) {
            Mouse.setCursorStyle(STYLES.PLAIN);
            mouseOverEntity === null || mouseOverEntity === void 0 ? void 0 : mouseOverEntity.setState(STATE.MOUSEOFF);
            mouseOverEntity = null;
        }
    }
}
Mouse.cursor = {
    x: 0,
    y: 0,
    radius: 1.5,
    width: 3,
    height: 3,
    style: document.getElementById("canvas").style,
};
//# sourceMappingURL=Mouse.js.map