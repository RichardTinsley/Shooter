import { SIZES } from "../constants/game.js";
export function menuVertical(menu, menuPosition) {
    menu.forEach((item, index) => {
        item.setPosition(SIZES.GAME_WIDTH_HALF, menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING));
    });
}
//# sourceMappingURL=menuUtil.js.map