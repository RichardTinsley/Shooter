import { Mouse, CURSOR_STYLES } from "../../handlers/Mouse.js";
import { EnemyComponents } from "./components/EnemyComponents.js";
import { Walking } from "./states/Walking.js";

export interface IEnemyState {
  components: Enemy;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Enemy {
  public state!: IEnemyState;
  public components = new EnemyComponents();

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }

  update(): void {
    this.state.update();
    this.mouseOver();
  }

  public walkingState = () => (this.state = new Walking(this.components));

  mouseClick(): void {
    // if(Mouse.selectedEnemy !== this.mouseOverItem)
    //   Mouse.selectedEnemy.mouseClick("NOLONGERSELECTED")
    //   Mouse.selectedEnemy = this.mouseOverItem
  }

  mouseOver(): void {
    Mouse.mouseOver(this, CURSOR_STYLES.ENEMY);
  }

  setState(state: number) {
    this.components.mouseOverEnemy.setState(state);
  }
}
