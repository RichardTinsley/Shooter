import { MenuButton } from "../components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";

export function BeginMenu(): Array<any> {
  const menuItems: Array<any> = [];

  const beginButton = new MenuButton(
    TextFactory.createMenuItemGlow(),
    "Begin!",
    SIZES.GAME_WIDTH_HALF,
    SIZES.GAME_HEIGHT - 120
  );

  menuItems.push(beginButton);

  return menuItems;
}
