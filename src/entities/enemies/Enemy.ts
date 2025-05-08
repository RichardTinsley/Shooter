import { Mouse, STYLES } from "../../handlers/Mouse.js";
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
    Mouse.mouseOver(this, STYLES.ENEMY);
  }

  public walkingState = () => (this.state = new Walking(this.components));

  mouseClick(): void {
    if (Mouse.selectedEnemy === this)
      if (Mouse.selectedEnemy) {
        // CHANGE STATE BACK Mouse.selectedEnemy
      }

    Mouse.selectedEnemy = this;
  }

  setState(state: number) {
    this.components.mouseOverEnemy.setState(state);
  }
}
