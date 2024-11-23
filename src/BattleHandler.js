import { TEXT_COLOURS, ANIMATION_STATES, ENEMY_STATES } from "./constants/constants.js";

export class BattleHandler{
    constructor(
        addProjectile,
        addEffect,
        addText,
        addCoins,
        addExperience
    ){
        this.addProjectile = addProjectile;
        this.addEffect = addEffect;
        this.addText = addText;
        this.addCoins = addCoins;
        this.addExperience = addExperience;
    }


    update(projectiles, towers, enemies){

        towers.forEach(tower => {
            tower.shootEnemy(enemies, projectiles);
        });

        projectiles.forEach(projectile => {
            this.checkProjectileTargetCollisions(projectile); //PASS ARRAYS??
        })

    }

    checkProjectileTargetCollisions(projectile){
        if(projectile.state !== ANIMATION_STATES.ANIMATING)
            return;

        if (checkCollision(projectile.target, projectile)){
            projectile.state = ANIMATION_STATES.FINISHED
            projectile.target.health -= projectile.damage;
            this.addExplosion();

            if(projectile.target.health <= 0 && projectile.target.state !== ENEMY_STATES.DYING){
                const coins =  this.addCoins();
                this.addText(coins, TEXT_COLOURS.GOLD, projectile.target.position);

                const experience = this.addExperience();
                this.addText(experience, TEXT_COLOURS.GREEN, projectile.position);
                this.addBlood();
            }
            
            if(projectile.target.state === ENEMY_STATES.DYING)
                this.addBlood();
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