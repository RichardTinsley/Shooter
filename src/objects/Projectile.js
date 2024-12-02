import * as OBJECTS from "../constants/objects.js"
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

        this.origin = this.position;
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

    update(event, effects){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.update(event);
                this.updateProjectileMovement();
                this.checkProjectileEnemyCollision(effects);
                this.updateProjectileHitbox();
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

    checkProjectileEnemyCollision(effects){
        if(this.state !== OBJECTS.ANIMATION.ANIMATING)
            return;
        
        if (checkCircleCollision(this.enemy, this)){
            this.state = OBJECTS.ANIMATION.FINISHED;
            this.enemy.health -= this.damage;
            this.addExplosion(effects);
            
            if(this.enemy.health <= 0 && this.enemy.state !== OBJECTS.STATES.DYING){
                // const coinString = this.addCoins();
                // this.addText(coinString, TEXT_COLOURS.GOLD, this.enemy.position);

                // const experienceString = this.addExperience();
                // this.addText(experienceString, TEXT_COLOURS.GREEN, this.position);
                this.enemy.addBlood(effects);
            }
            
            if(this.enemy.state === OBJECTS.STATES.DYING)
                this.enemy.addBlood(effects);
        }   
    }
}

// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();

// FOR SPRITE SHEETS WITH MULTIPLE ROWS
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