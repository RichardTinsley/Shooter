import { ANIMATION } from "../constants/objects.js";

export class Objects{
    constructor(emptyTowerSpots){
        this.towers = emptyTowerSpots();
        this.enemies = [];
    }

    draw(ctx){
        this.towers.forEach(tower => tower.draw(ctx));
        this.enemies.sort((a, b) => a.position.y - b.position.y);   
        this.enemies.forEach(enemy => enemy.draw(ctx));
    }

    update(event){
        this.towers = this.towers.filter(tower => {
            tower.update(event);
            // tower.shootEnemy(this.enemies, this.projectiles);
            return tower.state === ANIMATION.ANIMATING;
        });

        this.enemies = this.enemies.filter(enemy => {
            enemy.update(event);
            return enemy.state === ANIMATION.ANIMATING;
        });

        // this.projectiles = this.projectiles.filter(projectile => {
        //     projectile.update(event);
        //     projectile.checkProjectileEnemyCollision();
        //     return projectile.state === ANIMATION.ANIMATING;
        // });
    }
}
// this.entities = [...this.towers, ...this.enemies, ...this.effects, ...this.projectiles, ...this.texts];
// this.entities.forEach(entity => entity.draw(ctx));

