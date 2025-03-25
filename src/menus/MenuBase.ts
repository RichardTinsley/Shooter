export class MenuBase {
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
