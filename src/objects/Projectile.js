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

    update(event, effects, texts){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.update(event);
                this.updateProjectileMovement();
                this.updateProjectileHitbox();
                this.checkProjectileEnemyCollision(effects, texts);
                break
            case OBJECTS.ANIMATION.FINISHED:
                console.log("SUPERORJECTILE", this.state)
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

    checkProjectileEnemyCollision(effects, texts){
        if(this.state !== OBJECTS.ANIMATION.ANIMATING)
            return;

        if (checkCircleCollision(this.enemy, this)){
            this.state = OBJECTS.ANIMATION.FINISHED;
            this.enemy.health -= this.damage;
            this.addExplosion(effects);
            
            if(this.enemy.health <= 0 && this.enemy.state !== OBJECTS.STATES.DYING){
                texts.push(new GameText({
                    text: 20,// playerStats.addCoins(), 
                    colour: INTERFACE.TEXT_COLOURS.GOLD, 
                    position: {...this.enemy.position},
                }));

                texts.push(new GameText({
                    text: 10,//playerStats.addExperience(),
                    colour: INTERFACE.TEXT_COLOURS.GREEN,
                    position: {...this.origin},
                }));

                this.enemy.addBlood(effects);
            }
            
            if(this.enemy.state === OBJECTS.STATES.DYING)
                this.enemy.addBlood(effects);
        }   
    }
}