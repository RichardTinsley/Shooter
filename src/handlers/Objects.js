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

    update(event, playerStats){
        this.towers = this.towers.filter(tower => {
            tower.update(event, this.enemies, this.projectiles);
            return tower.state === ANIMATION.ANIMATING;
        });

        this.enemies = this.enemies.filter(enemy => {
            enemy.update(event);
            enemy.checkEndpointArrival(playerStats);
            return enemy.state === ANIMATION.ANIMATING;
        });

        this.projectiles = this.projectiles.filter(projectile => {
            projectile.update(event);
            projectile.checkProjectileEnemyCollision(this.effects, this.texts, playerStats)
            return projectile.state === ANIMATION.ANIMATING;
        });

        this.effects = this.effects.filter(effect => {
            effect.update(event);
            return effect.state === ANIMATION.ANIMATING;
        });

        this.texts = this.texts.filter(text => {
            text.update(event);
            return text.state === ANIMATION.ANIMATING;
        });
    }
}
// this.entities = [...this.towers, ...this.enemies, ...this.effects, ...this.projectiles, ...this.texts];
// this.entities.forEach(entity => entity.draw(ctx));

