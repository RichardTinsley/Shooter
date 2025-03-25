export class Menu {
  protected menuItems: Array<any> = [];

  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuItems.forEach((item: any) => {
      item.draw(ctx);
    });
  }

  update(): void {
    this.menuItems.forEach((item: any) => {
      item.update();
    });
  }
}

// export class Menu {
//   constructor() {}

//   initialiseHorizontalMenu(menu) {
//     return menu.map((menuItem, index) => {
//       return new MenuItemText({
//         text: menuItem.text,
//         position: {
//           x: INTERFACE.horizontallyAlignedMenu(index),
//           y: GAME.SIZES.GAME_HEIGHT_HALF + 100,
//         },
//         option: menuItem.option,
//       });
//     });
//   }

//   initialiseVerticalMenu(menu, offset) {
//     return menu.map((menuItem, index) => {
//       return new MenuItemText({
//         text: menuItem.text,
//         position: {
//           x: GAME.SIZES.GAME_WIDTH_HALF,
//           y: INTERFACE.verticallyAlignedMenu(
//             GAME.SIZES.GAME_HEIGHT_HALF + offset,
//             index
//           ),
//         },
//         option: menuItem.option,
//       });
//     });
//   }
// }

// export function verticallyAlignedMenu(menuPosition, index){
//     return menuPosition + (SIZES.MENUITEMTEXT + SIZES.SPACING) * index;
// }

// export function horizontallyAlignedMenu(index){
//     return GAME.SIZES.GAME_WIDTH / 3 * (index + 1);
// }
