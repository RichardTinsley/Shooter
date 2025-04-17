import { Menu } from "../GUI/menus/Menu.js";
import { BeginningScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { BattleScreen } from "./BattleScreen.js";

export interface IScreenState {
  screen: Screen;
  menu: Menu;

  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
  getArray(): Array<any>;
}

export class Screen {
  public currentScreen: IScreenState = new LoadingScreen(this);

  public getCurrentState(): IScreenState {
    return this.currentScreen;
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
    (this.currentScreen = new BeginningScreen(this));
}
// if(this.globalAlpha < 1)
//   ctx.globalAlpha = this.globalAlpha += this.delta;
