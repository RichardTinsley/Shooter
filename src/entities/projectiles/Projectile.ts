import { MovingSprite } from "../MovingSprite.js";

export class Projectile extends MovingSprite {
  private origin = { ...this.position };
  // private damage = damage;
  // this.enemy = enemy;

  constructor(fileName: string, spriteWidth: number, spriteHeight: number) {
    super(fileName, spriteWidth, spriteHeight);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y - this.height / 2);
    ctx.rotate(this.angle);
    console.log(this.halfWidth);
    super.draw(ctx);
    ctx.restore();
  }

  update() {
    super.update();
    this.updateSpriteDrawPosition();
    // this.setDestination(this.enemy.center);
  }

  // checkProjectileEnemyCollision(effects, texts) {
  //   if (checkCircleCollision(this.enemy.center, this.center)) {
  //     this.state = OBJECTS.ANIMATION.FINISHED;
  //     this.addExplosion(effects);

  //     this.enemy.health.setHealth(this.damage);
  //     this.enemy.checkEnemyHealth();

  //     if (!this.enemy.isPillaged && this.enemy.isEnemyDying()) {
  //       this.addGold(texts);
  //       this.addExperience(texts);
  //       this.enemy.isPillaged = true;
  //     }

  //     if (this.enemy.isEnemyDying()) this.enemy.addBlood(effects);
  //   }
  // }

  // addGold(texts) {
  //   texts.push(
  //     new GameText({
  //       text: HUD.setCoins(),
  //       colour: INTERFACE.TEXT_COLOURS.GOLD,
  //       position: { ...this.enemy.position },
  //     })
  //   );
  // }

  // addExperience(texts) {
  //   const experienceText = HUD.setExperience();
  //   if (experienceText === 0) return;

  //   texts.push(
  //     new GameText({
  //       text: experienceText,
  //       colour: INTERFACE.TEXT_COLOURS.GREEN,
  //       position: { ...this.origin },
  //     })
  //   );
  // }
}
