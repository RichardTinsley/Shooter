import { ANIMATION_STATES, ENEMY_STATES, TEXT_COLOURS } from "../constants/constants.js";
import { findAngleOfDirection, giveDirection, checkCollision } from "../utilities/math.js";
import { assets } from "../AssetLoader.js";

export class Projectile{
    constructor({ 
        sprite,
        position,
        enemy,
        scale,
        speed,
        damage
    }){
        this.sprite = sprite;
        
        this.scale = scale;
        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale;   
        
        this.position = position;
        this.center = {
            x: this.position.x,
            y: this.position.y
        };
        this.hitBox = {
            x: this.center.x,
            y: this.center.y,
            radius: this.width / 18,
        };
        
        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;
        this.sprite.row = 0;
        
        this.state = ANIMATION_STATES.ANIMATING;
        this.direction;
        this.angle;
        this.speed = speed;
        this.velocity = {
            x: 0,
            y: 0
        };
        
        this.damage = damage;       
        this.enemy = enemy;

        this.addText = addText;
        this.addEffect = addEffect;
        this.addCoins = addCoins;
        this.addExperience = addExperience;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.drawProjectile(ctx); 
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        if(event) 
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.updateProjectile();
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    drawProjectile(ctx){
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(this.angle);
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            0 - this.width,
            0 - this.height,
            this.width,
            this.height
        );
        ctx.restore();
    }

    updateProjectile() {
        this.angle = findAngleOfDirection(this.enemy.center, this.center);
        this.direction = giveDirection(this.angle);

        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;
        this.center.x += this.velocity.x;
        this.center.y += this.velocity.y;
    }    
}



// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();

