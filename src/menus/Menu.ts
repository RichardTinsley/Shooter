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

// export function verticallyAlignedMenu(menuPosition, index){
//     return menuPosition + (SIZES.MENUITEMTEXT + SIZES.SPACING) * index;
// }

// export function horizontallyAlignedMenu(index){
//     return GAME.SIZES.GAME_WIDTH / 3 * (index + 1);
// }
