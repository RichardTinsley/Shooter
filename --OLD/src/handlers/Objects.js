import { ANIMATION } from "../constants/objects.js";

export class Objects{
    constructor(emptyTowerSpots){
        this.towers = emptyTowerSpots();
        this.enemies = [];
        this.projectiles = [];
        this.effects = [];
        this.texts = [];
    }

    draw(ctx){
        this.enemies.sort((a, b) => a.position.y - b.position.y);   
        this.enemies.forEach(enemy => enemy.draw(ctx));
        this.towers.forEach(tower => tower.draw(ctx));
        this.projectiles.forEach(projectile => projectile.draw(ctx));
        this.effects.forEach(effect => effect.draw(ctx));
        this.texts.forEach(text => text.draw(ctx));
    }

    update(event){
        this.towers = this.towers.filter(tower => {
            tower.update(event, this.enemies, this.projectiles);
            return tower.state !== ANIMATION.FINISHED;
        });

        this.enemies = this.enemies.filter(enemy => {
            enemy.update(event);
            return enemy.state !== ANIMATION.FINISHED;
        });

        this.projectiles = this.projectiles.filter(projectile => {
            projectile.update(event);
            projectile.checkProjectileEnemyCollision(this.effects, this.texts)
            return projectile.state !== ANIMATION.FINISHED;
        });

        this.effects = this.effects.filter(effect => {
            effect.update(event);
            return effect.state !== ANIMATION.FINISHED;
        });

        this.texts = this.texts.filter(text => {
            text.update(event);
            return text.state !== ANIMATION.FINISHED;
        });
    }
}


