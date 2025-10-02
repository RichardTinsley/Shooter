import { Position } from "../constants/types.js";
import { HitDetectionCircle } from "../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "./components/SpriteAnimation.js";

export class Tower {
  protected hitDetection;
  protected sprite;

  constructor(protected position: Position, fileName: string) {
    this.sprite = new SpriteAnimation()
      .setImage(fileName, 64, 64)
      .setPosition(position)
      .setScale(1)
      .initialise();

    this.hitDetection = new HitDetectionCircle().setPosition(position).setWidth(64);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.sprite.draw(ctx);
  }

  update() {
    this.sprite.update();
  }

  mouseClick() {
    return;
  }

  mouseOver(state: number) {
    return;
  }

  getType(): string {
    return "Tower";
  }
}

// export class Tower{
//     constructor({
//         position,
//         image,
//         cost,
//         damage,
//         firerate,
//         range
//     }){

//         this.damage = damage;
//         this.range = range;
//         this.cost = cost;
//         this.range = range;
//         this.cooldown = 20;
//         this.shootTimer = this.cooldown;

//         this.towerRange = {
//             x: this.center.x,
//             y: this.center.y,
//             radius: this.range
//         };

//         this.center.radius = this.halfWidth;
//         this.muzzle = {
//             x: this.position.x,
//             y: this.position.y - this.height
//         };

//         this.enemiesInRange = [];
//         this.target = null;

//     }

//     incrementShootTimer(event){
//         if(event)
//             this.shootTimer++;

//         if(this.shootTimer >= this.cooldown)
//             this.towerState = OBJECTS.STATES.SHOOTING;
//     }

//     targetEnemy(enemies){
//         this.target = this.findEnemyTarget(enemies);
//     }

//     findEnemyTarget(enemies){
//         const enemiesInRange = enemies.filter(enemy => {
//             if(!enemy.isEnemyDying())
//                 return checkCircleCollision(enemy.center, this.towerRange);
//         })

//         const selectedEnemy = enemiesInRange.find(enemy => enemy === Mouse.enemySelected);
//         if(selectedEnemy)
//             return selectedEnemy;

//         enemiesInRange.sort((a, b) => {
//             if (a.waypointIndex > b.waypointIndex) return -1;
//             if (a.waypointIndex < b.waypointIndex) return 1;
//             if (a.priorityDistance < b.priorityDistance) return -1;
//             if (a.priorityDistance > b.priorityDistance) return 1;
//             return 0;
//         });
//         return enemiesInRange[0];
//     }
// }
