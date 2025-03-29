import { MenuButton } from "../GUI/components/MenuButton.js";
import { SIZES } from "../constants/game.js";

// export function horizontallyAlignedMenu(index){
//     return GAME.SIZES.GAME_WIDTH / 3 * (index + 1);
// }

export function menuVertical(menu: Array<MenuButton>, menuPosition: number) {
  menu.forEach((item, index) => {
    item.setPosition(
      SIZES.GAME_WIDTH_HALF,
      menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING)
    );
  });
}
