// import * as OBJECTS from "../constants/objects.js";
// import * as INTERFACE from "../constants/interface.js";
// import { assets } from "../utilities/assets.js";
// import { checkCircleCollision } from "../utilities/math.js";
// import { Sprite } from "./Sprite.js";
// import { Mouse } from "../handlers/Mouse.js";

// export class Tower extends Sprite{
//     constructor({
//         position,
//         image,
//         cost,
//         damage,
//         firerate,
//         range
//     }){
//         super({
//             image: image ?? assets.get('towerSpot'),
//             width: OBJECTS.SIZES.TOWER,
//             height: OBJECTS.SIZES.TOWER,
//             position,
//             scale: 1,
//         });

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

//         this.modal = null;
//         this.type = OBJECTS.TYPES.TOWER;
//         this.towerState = OBJECTS.STATES.RELOADING;
//     }

//     draw(ctx){
//         super.draw(ctx);
//         this.drawIsMouseOver(ctx);
//     }

//     update(event, enemies, projectiles){
//         super.update(event);
//         switch(this.towerState){
//             case OBJECTS.STATES.SHOOTING:
//                 this.targetEnemy(enemies);
//                 this.shootEnemy(projectiles);
//                 break
//             case OBJECTS.STATES.RELOADING:
//                 this.incrementShootTimer(event);
//                 break
//         }
//     }

//     drawSelectionIcon(ctx){
//         ctx.beginPath();
//         ctx.ellipse(this.position.x, this.position.y, this.quarterWidth, this.halfWidth, Math.PI / 2, 0, 2 * Math.PI);
//         ctx.lineWidth = 3;
//         ctx.strokeStyle = INTERFACE.COLOURS.GREEN
//         ctx.stroke();
//     }

//     createModal(){
//         return
//     }

//     drawIsMouseOver(ctx){
//         if(this.isMouseOver)
//             this.drawSelectionIcon(ctx);
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
