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
            if (Mouse.cursor.mouseOverEntity !== null) {
                Mouse.cursor.mouseOverEntity.mouseClick();
                Mouse.setCursor(null);
            }
        });
    }
    static setCursor(entity, style = CURSOR_STYLES.PLAIN) {
        Mouse.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
        Mouse.cursor.mouseOverEntity = entity;
    }
}
Mouse.cursor = {
    x: 0,
    y: 0,
    radius: size / 2,
    width: size,
    height: size,
    style: document.getElementById("canvas").style,
    mouseOverEntity: null,
};
//# sourceMappingURL=Mouse.js.map