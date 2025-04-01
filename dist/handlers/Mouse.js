import { checkCircleCollision, checkHitBoxCollision, } from "../utilities/collisionDetection.js";
import { MenuButton } from "../GUI/menus/MenuButton.js";
import { ANIMATION } from "../constants/animation.js";
import { EmptyTowerSpot } from "../entities/towers/emptyTowerSpot.js";
import { Enemy } from "../entities/enemies/Enemy.js";
const mouseSize = 3;
export class Mouse {
    constructor(state) {
        this.cursor = {
            x: 0,
            y: 0,
            radius: mouseSize,
            width: mouseSize,
            height: mouseSize,
            style: document.getElementById("canvas").style,
        };
        this.mouseOverItem = undefined;
        window.addEventListener("mousemove", (e) => {
            this.cursor.x = e.offsetX;
            this.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => {
            this.mouseClick();
        });
    }
    update(state) {
        this.mouseOverMenuButton(state.getCurrentState());
        this.mouseOverEntity(state.getCurrentState());
        this.setCursor();
    }
    mouseOverMenuButton(state) {
        var _a;
        this.mouseOverItem = undefined;
        (_a = state.menu) === null || _a === void 0 ? void 0 : _a.getMenuItemsArray().forEach((item) => {
            if (checkHitBoxCollision(this.cursor, item.hitBox)) {
                item.mouseOver(ANIMATION.ANIMATING);
                this.mouseOverItem = item;
            }
            else {
                item.mouseOver(ANIMATION.FINISHED);
            }
        });
    }
    mouseOverEntity(state) {
        state.getArray().forEach((item) => {
            if (checkCircleCollision(this.cursor, item.hitCircle, this.cursor.radius, item.hitCircle.radius)) {
                this.mouseOverItem = item;
            }
            else {
            }
        });
    }
    mouseClick() {
        if (this.mouseOverItem) {
            this.mouseOverItem.changeState();
            this.mouseOverItem = undefined;
        }
    }
    setCursor() {
        let style = "Plain";
        if (this.mouseOverItem instanceof MenuButton)
            style = "MenuItem";
        if (this.mouseOverItem instanceof EmptyTowerSpot)
            style = "Tower";
        if (this.mouseOverItem instanceof Enemy)
            style = "Enemy";
        this.cursor.style.cursor = `url(../../images/cursors/${style}.cur), auto`;
    }
    getCursor() {
        return this.cursor;
    }
}
//# sourceMappingURL=Mouse.js.map