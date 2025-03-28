import { MenuButton } from "../components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
export function BeginMenu() {
    const menuItems = [];
    const beginButton = new MenuButton(TextFactory.createMenuItemPulsate(), "Begin!", SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 120);
    menuItems.push(beginButton);
    return menuItems;
}
//# sourceMappingURL=BeginMenu.js.map