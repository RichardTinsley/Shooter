// import { Menu } from "../GUI/menus/Menu.js";
import { IRenderable } from "../interfaces/interfaces.js";
import { Loading } from "./states/Loading.js";
// import { BeginScreen } from "./BeginScreen.js";
// import { MainMenuScreen } from "./MainMenuScreen.js";
// import { BattleScreen } from "./BattleScreen.js";

export interface IScreenState extends IRenderable {
  //   menu: Menu;
}

export class Screen {
  screen: IScreenState;

  constructor() {
    this.screen = new Loading(this);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
  }
  update(): void {
    this.screen.update();
  }

  // beginScreen = () => (this.screen = new BeginScreen(this));
  //   mainMenuScreen = () => (this.screen = new MainMenuScreen(this));
  //   battleScreen = () => (this.screen = new BattleScreen(this));
  //   optionsScreen = () => (this.screen = new BeginScreen(this));
  //   aboutScreen = () => (this.screen = new BeginScreen(this));
}
