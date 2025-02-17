import * as OBJECTS from "../constants/objects.js";
import * as INTERFACE from "../constants/interface.js";
import { GameText } from "./texts/GameText.js";
import { Sprite } from "./Sprite.js";
import { checkCircleCollision } from "../utilities/math.js";
import { PlayerStats } from "../handlers/PlayerStats.js";

export class Projectile extends Sprite{
    constructor({
        image, 
        width,
        height,
        position,
        damage,
        enemy,
    }){
        super({
            image,
            width,
            height,
            position,
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
                this.updateDestination(this.enemy.center);
                this.updateDirection();
                this.updateMovement();
                this.updateHitbox();
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    checkProjectileEnemyCollision(effects, texts){
        if(checkCircleCollision(this.enemy.center, this.center)){
            this.state = OBJECTS.ANIMATION.FINISHED;
            this.addExplosion(effects);  

            this.enemy.health.setHealth(this.damage);
            this.enemy.checkEnemyHealth();
                        
            if(!this.enemy.isPillaged && this.enemy.isEnemyDying()){
                this.addGold(texts);
                this.addExperience(texts);
                this.enemy.isPillaged = true;
            }
            
            if(this.enemy.isEnemyDying())
                this.enemy.addBlood(effects);
        }   
    }
    
    addGold(texts){
        texts.push(new GameText({
            text: PlayerStats.setCoins(), 
            colour: INTERFACE.TEXT_COLOURS.GOLD, 
            position: {...this.enemy.position},
        }));
    }

    addExperience(texts){
        const experienceText = PlayerStats.setExperience();
        if(experienceText === 0)
            return

        texts.push(new GameText({
            text: experienceText,
            colour: INTERFACE.TEXT_COLOURS.GREEN,
            position: {...this.origin},
        }));
    }

    
    //FOR SPRITE SHEETS WITH MULTIPLE ROWS
    // animate(event){
    //     if(!event || this.maxFrame === 0)
    //         return

    //     if(this.maxRow === 0)
    //         this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
    //     else
    //         this.animateRows();
    // }

    // animateRows(){
    //     if(this.sprite.frame < this.maxFrame)
    //         this.sprite.frame++;
    //     else{
    //         this.sprite.row++;
    //         this.sprite.frame = 0;
    //     }
    //     if(this.sprite.row === this.maxRow && this.sprite.frame < this.maxFrame){
    //         this.sprite.row = 0;
    //         this.sprite.frame = 0;
    //     }
    // }
}