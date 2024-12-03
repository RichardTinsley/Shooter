import * as OBJECTS from "../constants/objects.js";
import * as INTERFACE from "../constants/interface.js";
import { GameText } from "./texts/GameText.js";
import { Sprite } from "./Sprite.js";
import { findAngleOfDirection, giveDirection, checkCircleCollision } from "../utilities/math.js";

export class Projectile extends Sprite{
    constructor({
        image, 
        position,
        width,
        height,
        damage,
        enemy,
    }){
        super({
            image,
            position,
            width,
            height,
            damage,
            enemy,
        })

        this.origin = {...this.position};
        this.damage = damage;       
        this.enemy = enemy;
        this.threeQuarterWidth = this.width * .75;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.center.x , this.center.y);
        ctx.rotate(this.angle);
        super.draw(ctx);
        ctx.restore();
    }

    update(event){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.update(event);
                this.updateProjectileMovement();
                this.updateProjectileHitbox();
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    updateProjectileMovement() {
        this.angle = findAngleOfDirection(this.enemy.center, this.center);
        this.direction = giveDirection(this.angle);

        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }    

    updateProjectileHitbox(){
        this.center.x = this.position.x;
        this.center.y = this.position.y - this.height / 3;
    }

    checkProjectileEnemyCollision(effects, texts, playerStats){
        if(this.state !== OBJECTS.ANIMATION.ANIMATING)
            return;

        if (checkCircleCollision(this.enemy, this)){
            this.state = OBJECTS.ANIMATION.FINISHED;
            this.enemy.health -= this.damage;
            this.addExplosion(effects);
            
            if(this.enemy.health <= 0 && this.enemy.sprite.row !== OBJECTS.STATES.DYING){
                this.addGold(texts, playerStats);
                this.addExperience(texts, playerStats);
                this.enemy.addBlood(effects);
            }
            
            if(this.enemy.state === OBJECTS.STATES.DYING)
                this.enemy.addBlood(effects);
        }   
    }
    
    addGold(texts, playerStats){
        texts.push(new GameText({
            text: playerStats.addCoins(), 
            colour: INTERFACE.TEXT_COLOURS.GOLD, 
            position: {...this.enemy.position},
        }));
    }

    addExperience(texts, playerStats){
        const experienceText = playerStats.addExperience();
        if(experienceText === 0)
            return

        texts.push(new GameText({
            text: experienceText,
            colour: INTERFACE.TEXT_COLOURS.GREEN,
            position: {...this.origin},
        }));
    }
}