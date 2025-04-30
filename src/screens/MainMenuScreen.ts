import { ALL_ASSETS, FILE_NAMES } from "../constants/assets.js";
import { SIZES } from "../constants/sizes.js";
import { MainMenu } from "../GUI/menus/MainMenu.js";

export class MainMenuScreen {
  menu;
  music: HTMLAudioElement = ALL_ASSETS.get(FILE_NAMES.MUSIC_MAIN_MENU);

  constructor(buttons: any) {
    this.menu = new MainMenu(buttons, 400);
    this.music.play();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
