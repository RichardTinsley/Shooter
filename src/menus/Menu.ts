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
//         size: INTERFACE.SIZES.MENUITEMTEXT,
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
//         size: INTERFACE.SIZES.MENUITEMTEXT,
//         option: menuItem.option,
//       });
//     });
//   }
// }
