import { Menu } from "../GUI/menus/Menu.js";
import { BeginningScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { PlayScreen } from "./PlayScreen.js";

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

  public setBeginningScreen = () =>
    (this.currentScreen = new BeginningScreen(this));

  public setMainMenuScreen = () =>
    (this.currentScreen = new MainMenuScreen(this));

  public setPlayScreen = () => (this.currentScreen = new PlayScreen(this));

  public setOptionsScreen = () =>
    (this.currentScreen = new BeginningScreen(this));

  public setAboutScreen = () =>
    (this.currentScreen = new BeginningScreen(this));
}
