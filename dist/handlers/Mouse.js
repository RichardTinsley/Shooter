const size = 3;
export var CURSOR_STYLES;
(function (CURSOR_STYLES) {
    CURSOR_STYLES["PLAIN"] = "Plain";
    CURSOR_STYLES["TOWER"] = "Tower";
    CURSOR_STYLES["ENEMY"] = "Enemy";
    CURSOR_STYLES["MENUBUTTON"] = "MenuButton";
})(CURSOR_STYLES || (CURSOR_STYLES = {}));
const cursor = {
    x: 0,
    y: 0,
    radius: size,
    width: size,
    height: size,
    style: document.getElementById("canvas").style,
    mouseOverEntity: null,
};
export class Mouse {
    constructor() {
        Mouse.setCursor(CURSOR_STYLES.PLAIN);
        window.addEventListener("mousemove", (e) => {
            cursor.x = e.offsetX;
            cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => {
            if (cursor.mouseOverEntity !== null) {
                cursor.mouseOverEntity.mouseClick();
            }
        });
    }
    static setCursor(style) {
        cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    static mouseOverEntity(entity, MouseOver, MouseOff, style) {
        if (entity.hitDetection.checkCollision(cursor)) {
            if (!entity.isMouseOver) {
                entity.isMouseOver = !entity.isMouseOver;
                Mouse.setCursor(style);
                entity.state = new MouseOver(entity);
                cursor.mouseOverEntity = entity;
            }
        }
        else {
            if (entity.isMouseOver) {
                entity.isMouseOver = !entity.isMouseOver;
                Mouse.setCursor(CURSOR_STYLES.PLAIN);
                entity.state = new MouseOff(entity);
                cursor.mouseOverEntity = null;
            }
        }
    }
}
//# sourceMappingURL=Mouse.js.map