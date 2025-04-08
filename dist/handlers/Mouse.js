import { ANIMATION } from "../constants/animation.js";
import { EmptyTowerSpot } from "../entities/towers/emptyTowerSpot.js";
import { Enemy } from "../entities/enemies/Enemy.js";
import { MenuButton } from "../GUI/menus/MenuButton.js";
export class Mouse {
    constructor(state) {
        this.mouseOverItem = undefined;
        this.mouseSize = 3;
        this.cursor = {
            x: 0,
            y: 0,
            radius: this.mouseSize,
            width: this.mouseSize,
            height: this.mouseSize,
            style: document.getElementById("canvas").style,
        };
        window.addEventListener("mousemove", (e) => {
            this.cursor.x = e.offsetX;
            this.cursor.y = e.offsetY;
        });
        window.addEventListener("click", () => this.mouseClick());
    }
    update(screen) {
        this.mouseOver(screen.getCurrentState().getArray());
        this.setCursor();
    }
    mouseOver(array) {
        this.mouseOverItem = undefined;
        array.forEach((item) => {
            if (item.hitDetection.checkCollision(this.cursor)) {
                item.mouseOver(ANIMATION.MOUSEOVER);
                this.mouseOverItem = item;
            }
            else {
                item.mouseOver(ANIMATION.NORMAL);
            }
        });
    }
    mouseClick() {
        if (!this.mouseOverItem)
            return;
        if (this.mouseOverItem instanceof MenuButton)
            this.mouseOverItem.changeScreen();
        if (this.mouseOverItem instanceof Enemy)
            this.mouseOverItem = undefined;
    }
    setCursor() {
        let style = "Plain";
        if (this.mouseOverItem instanceof MenuButton)
            style = "MenuButton";
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