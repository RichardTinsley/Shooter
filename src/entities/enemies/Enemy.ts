import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { EnemyWaves } from "../../handlers/EnemyWaves.js";
import { Position } from "../../constants/types.js";

export class Enemy {
  protected position!: Position;
  protected sprite!: SpriteAnimation;
  protected healthBar!: HealthBar;
  protected hitDetection!: HitDetectionCircle;

  protected shadowWidth!: number;
  protected mouseOverWidth!: number;

  constructor() {}

  initialiseEnemy(): this {
    this.sprite.setPosition(this.position);

    this.shadowWidth = this.sprite.getScaledWidth();
    this.mouseOverWidth = this.sprite.getScaledWidth() * 1.25;

    this.healthBar = new HealthBar()
      .setPosition(this.position)
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(this.sprite.getScaledHeight());

    this.hitDetection = new HitDetectionCircle()
      .setPosition(this.position)
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);

    return this;
  }

  setDamage(damage: number) {
    this.healthBar.setDamage(damage);
    if (this.healthBar.getCurrentStatus() === 0) {
      EnemyWaves.enemyKilled();
    }
    //this.enemyState === dying
  }

  getType(): string {
    return "Enemy";
  }

  mouseClick() {
    // if(Mouse.selectedEnemy !== this.mouseOverItem) handle this logic in entity.mouseclick()
    //   Mouse.selectedEnemy.mouseClick("NOLONGERSELECTED")
    //   Mouse.selectedEnemy = this.mouseOverItem
    // same swap logic in tower
    return;
  }
}
