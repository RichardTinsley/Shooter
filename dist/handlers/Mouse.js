import { STATE } from "../constants/states.js";
const size = 3;
export var STYLES;
(function (STYLES) {
    STYLES["PLAIN"] = "Plain";
    STYLES["TOWER"] = "Tower";
    STYLES["ENEMY"] = "Enemy";
    STYLES["MENUBUTTON"] = "MenuButton";
})(STYLES || (STYLES = {}));
export class Mouse {
    constructor() {
        Mouse.setCursorStyle(STYLES.PLAIN);
        window.addEventListener("mousemove", (e) => {
            Mouse.cursor.x = e.offsetX;
            Mouse.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => {
            if (Mouse.mouseOverEntity) {
                Mouse.mouseOverEntity.mouseClick();
                Mouse.setCursorStyle(STYLES.PLAIN);
            }
        });
    }
    static setCursorStyle(style) {
        Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    static mouseOver(entity, style) {
        if (Mouse.mouseOverEntity)
            return;
        if (entity.components.hitDetection.checkCollision(Mouse.cursor)) {
            Mouse.setCursorStyle(style);
            Mouse.mouseOverEntity = entity;
            Mouse.mouseOverEntity.setState(STATE.MOUSEOVER);
        }
        else
            entity.setState(STATE.MOUSEOFF);
    }
    update() {
        var _a, _b;
        if (!((_a = Mouse.mouseOverEntity) === null || _a === void 0 ? void 0 : _a.components.hitDetection.checkCollision(Mouse.cursor))) {
            (_b = Mouse.mouseOverEntity) === null || _b === void 0 ? void 0 : _b.setState(STATE.MOUSEOFF);
            Mouse.setCursorStyle(STYLES.PLAIN);
            Mouse.mouseOverEntity = null;
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