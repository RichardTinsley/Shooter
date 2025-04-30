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
    this.screen = new LoadingScreen(this.buttons);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
  }
  update(): void {
    this.screen.update();
  }

  beginScreen = () => (this.screen = new BeginScreen(this.buttons));

  mainMenuScreen = () => (this.screen = new MainMenuScreen(this.buttons));

  battleScreen = () => (this.screen = new BattleScreen(this.buttons));

  optionsScreen = () => (this.screen = new BeginScreen(this.buttons));

  aboutScreen = () => (this.screen = new BeginScreen(this.buttons));

  buttons = {
    begin: this.beginScreen,
    mainMenu: this.mainMenuScreen,
    battle: this.battleScreen,
    option: this.optionsScreen,
    about: this.aboutScreen,
  };
}

//screen fades in here, DECORATOR PATTERN?
// if(this.globalAlpha < 1)
//   ctx.globalAlpha = this.globalAlpha += this.delta;
