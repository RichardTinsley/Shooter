import { Menu } from "../GUI/menus/Menu.js";
import { BeginningScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { BattleScreen } from "./BattleScreen.js";

export interface IScreenState {
  menu: Menu;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Screen {
  public currentScreen: IScreenState;

  constructor() {
    this.currentScreen = new LoadingScreen(this.switchToBeginningScreen);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.currentScreen.draw(ctx);
  }
  update(): void {
    this.currentScreen.update();
  }

  public switchToBeginningScreen = () =>
    (this.currentScreen = new BeginningScreen(this));

  public switchToMainMenuScreen = () =>
    (this.currentScreen = new MainMenuScreen(this));

  public switchToBattleScreen = () =>
    (this.currentScreen = new BattleScreen(this));

  public switchToOptionsScreen = () =>
    (this.currentScreen = new BeginningScreen(this));

  public switchToAboutScreen = () =>
    //screen fades in here, DECORATOR PATTERN?
    (this.currentScreen = new BeginningScreen(this));
}

// if(this.globalAlpha < 1)
//   ctx.globalAlpha = this.globalAlpha += this.delta;
