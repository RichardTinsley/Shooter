import * as OBJECTS from "../constants/objects.js"
import { assets } from "../utilities/assets.js";
import { checkCircleCollision } from "../utilities/math.js";
import { Sprite } from "./Sprite.js";

export class Tower extends Sprite{
    constructor({
        image,
        width,
        height,
        position,
        scale,
    }){
        super({ 
            image: image ?? assets.get('towerSpot'),
            width: width ?? OBJECTS.SIZES.TOWER,
            height: height ?? OBJECTS.SIZES.TOWER,
            position,
            scale: scale ?? 1, 
        });
        
        this.type = OBJECTS.TYPES.TOWER;
        this.isOccupied = false;
        
        this.center.radius = this.halfWidth;
        this.muzzle = {
            x: this.position.x,
            y: this.position.y - this.height
        };       

        this.enemiesInRange = [];
        this.target = null;
    }

    draw(ctx){
        super.draw(ctx);
        this.drawSelection(ctx);
    }

    update(event){
        super.update(event);
    }

    drawSelection(ctx){
        if(this.isSelected){
            ctx.beginPath();
            ctx.arc(this.center.x, this.center.y, this.center.radius, 0, Math.PI * 2);
            ctx.setLineDash([5, 15]);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.setLineDash([0, 0]);
            ctx.closePath();

        } 
    }

    isReadyToShoot(){
        return this.shootTimer >= this.cooldown;
    }	
    
    incrementShootTimer(event){
        if(event && !this.isReadyToShoot())
            this.shootTimer++;
    }

    targetEnemy(enemies){
        if(this.isReadyToShoot())
            this.target = this.findEnemyTarget(enemies);
    }

    findEnemyTarget(enemies){
        const enemiesInRange = enemies.filter(enemy => {
            if(!enemy.isDying())
                return checkCircleCollision(enemy.center, this.towerRange);
        })
        
        const selectedEnemy = enemiesInRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            return selectedEnemy;

        enemiesInRange.sort((a, b) => {
            if (a.waypointIndex > b.waypointIndex) return -1;
            if (a.waypointIndex < b.waypointIndex) return 1;
            if (a.priorityDistance < b.priorityDistance) return -1;
            if (a.priorityDistance > b.priorityDistance) return 1;
            return 0;
        });
        return enemiesInRange[0];
    }
}

//CHAIN METHODS

// getEnemiesInRange(enemies){
// 	return enemies.filter(enemy => {
//             if(!enemy.isDying())
//                 return checkCircleCollision(enemy.center, this.towerRange);
//         })
// }

