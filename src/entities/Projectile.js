import { ANIMATION_STATES, ENEMY_STATES } from "../constants/constants.js";
import { findAngleOfDirection, giveDirection, checkCollision } from "../utilities/math.js";
import { assets } from "../AssetLoader.js";

export class Projectile{
    constructor({ 
        sprite,
        position,
        enemy,
        scale,
        speed,
        damage,
        addText,
        addEffect,
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
    }

    update(event){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.updateProjectile(event);
                this.checkProjectileImpact(); 
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
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

    updateProjectile(event) {
        this.angle = findAngleOfDirection(this.enemy.center, this.center);
        this.direction = giveDirection(this.angle);

        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;
        this.center.x += this.velocity.x;
        this.center.y += this.velocity.y;

        if(event)
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
    }

    checkProjectileImpact(){
        if (checkCollision(this.enemy, this) && this.state === ANIMATION_STATES.ANIMATING){
            this.state = ANIMATION_STATES.FINISHED
            this.enemy.health -= this.damage;

            if(this.enemy.health <= 0 && this.enemy.state !== ENEMY_STATES.DYING){
                this.enemy.hudElements.coins += this.enemy.coins;
                this.enemy.hudElements.exp += this.enemy.exp;

                this.addBlood();

                this.addText(
                    '$' + this.enemy.coins, 
                    '255, 215, 0, ',
                    this.enemy.position, 
                );

                if(this.enemy.exp > 0)
                    this.addText(
                        '+' + this.enemy.exp + 'xp', 
                        '50, 205, 50, ', 
                        this.position, 
                    );
            }

            if(this.enemy.state === ENEMY_STATES.DYING)
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

// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();

