import { TEXT_COLOURS, ANIMATION_STATES, ENEMY_STATES } from "./constants/constants";

export class DeathHandler{
    constructor(
        addEffect,
        addText,
        addCoins,
        addExperience
    ){
        this.addEffect = addEffect;
        this.addText = addText;
        this.addCoins = addCoins;
        this.addExperience = addExperience;
    }

    draw(ctx){

    }

    update(projectiles){
        projectiles.forEach(projectile => {
            this.checkProjectileImpact(projectile);
        })
    }

    checkProjectileImpact(projectile){
        if (checkCollision(projectile.enemy, projectile) && projectile.state === ANIMATION_STATES.ANIMATING){
            projectile.state = ANIMATION_STATES.FINISHED
            projectile.enemy.health -= projectile.damage;

            if(projectile.enemy.health <= 0 && projectile.enemy.state !== ENEMY_STATES.DYING){
                const coins =  this.addCoins();
                this.addText(coins, TEXT_COLOURS.GOLD, projectile.enemy.position);

                const experience = this.addExperience();
                this.addText(experience, TEXT_COLOURS.GREEN, projectile.position);
                this.addBlood();
            }

            if(projectile.enemy.state === ENEMY_STATES.DYING)
                this.addBlood();
        
            this.addExplosion();
        }   
    }

    addExplosion(){
        this.addEffect(
            assets.get('blueExplosion'), 
            this, 
            this.center,
            0, 
            Math.random() * .4 + .3,
            256,
            256
        );
    }

    addBlood(){
        this.addEffect(
            assets.get('blood'), 
            this,  
            this.enemy.position,
            Math.floor(Math.random() * 9),  
            this.enemy.scale / 1.5,
            110,
            110
        );
    }
}