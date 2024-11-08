import { ANIMATION_STATES } from "./utilities/constants.js";
import { Projectile } from "./Projectile.js";

export class ProjectileHandler{
    constructor(
        enemyHandler,
        textHandler,
        effectHandler,
        hudElements
    ) {

        this.enemyHandler = enemyHandler;
        this.textHandler = textHandler;
        this.effectHandler = effectHandler;
        this.hudElements = hudElements;

        this.projectiles = [];
    }

    draw(ctx){
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx);
        });
    }

    update(event){
        for (let i = this.projectiles.length - 1; i >= 0; i--){
            const projectile = this.projectiles[i];        
            projectile.update(event);

            const enemy = this.enemyHandler.enemies.find(enemy => projectile.enemy === enemy);
            
            projectile.checkProjectileImpact(enemy, this.textHandler, this.effectHandler, this.hudElements);

            if(projectile.state === ANIMATION_STATES.FINISHED)
                this.projectiles.splice(i, 1); 
        }
    }

    add(enemy, tower, projectile){
        this.projectiles.push(new Projectile({
            sprite: { 
                image: projectile, 
                frame: 0, 
                row: 0,  
                width: 50, 
                height: 25 
            },
            position : {
                x: tower.center.x,
                y: tower.center.y - (tower.height / 2)
            }, 
            enemy: enemy,
            scale: 1, 
            speed: 2.5,
            damage: tower.damage, 
        }));
    }
}