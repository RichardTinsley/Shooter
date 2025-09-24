import { Menu } from "../GUI/menus/Menu.js";
import { BeginScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { BattleScreen } from "./BattleScreen.js";

export interface IScreenState {
  menu: Menu;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Screen {
  screen: IScreenState;

  constructor() {
    this.screen = new LoadingScreen(this);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
  }
  update(): void {
    this.screen.update();
  }

  beginScreen = () => (this.screen = new BeginScreen(this));
  mainMenuScreen = () => (this.screen = new MainMenuScreen(this));
  battleScreen = () => (this.screen = new BattleScreen(this));
  optionsScreen = () => (this.screen = new BeginScreen(this));
  aboutScreen = () => (this.screen = new BeginScreen(this));
}

//screen fades in here, DECORATOR PATTERN?
// if(this.globalAlpha < 1)
//   ctx.globalAlpha = this.globalAlpha += this.delta;
