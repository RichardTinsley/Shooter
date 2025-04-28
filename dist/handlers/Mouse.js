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
    static mouseOverEntity(entity, MouseOver, MouseOff, style) {
        if (entity.hitDetection.checkCollision(Mouse.cursor)) {
            if (!entity.isMouseOver) {
                entity.isMouseOver = !entity.isMouseOver;
                entity.state = new MouseOver(entity);
                Mouse.setCursor(entity, style);
            }
        }
        else {
            if (entity.isMouseOver) {
                entity.isMouseOver = !entity.isMouseOver;
                entity.state = new MouseOff(entity);
                Mouse.setCursor(null);
            }
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
    mouseOverEntity: null,
};
//# sourceMappingURL=Mouse.js.map