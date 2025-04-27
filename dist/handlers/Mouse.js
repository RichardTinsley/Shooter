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
        window.addEventListener("mousemove", (e) => {
            Mouse.cursor.x = e.offsetX;
            Mouse.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => Mouse.cursor.mouseOverEntity.mouseClick());
    }
    static setCursor(style) {
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
    mouseOverEntity: undefined,
};
//# sourceMappingURL=Mouse.js.map