export class Screen {
  protected menu: Array<any> = [];

  draw(ctx: CanvasRenderingContext2D): void {
    this.menu.forEach((item: any) => {
      item.draw(ctx);
    });
  }
  update(): void {
    this.menu.forEach((item: any) => {
      item.update();
    });
  }
}
