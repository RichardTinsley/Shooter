import { ANIMATION_STATES } from "./utilities/constants.js";
import { findAngleOfDirection, giveDirection } from "./utilities/math.js";
export class Projectile{
    constructor({ 
        sprite,
        position,
        enemy,
        scale,
        speed,
        damage,
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
        this.maxRow = (this.sprite.image.height / this.sprite.height) - 1;
        
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
    }

    update(event){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.updateProjectile(event); 
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
            if(this.sprite.frame < this.maxFrame)
                this.sprite.frame++;
            else{
                if(Math.floor(this.maxRow) !== 0)
                    this.sprite.row++;
                
                this.sprite.frame = 0;
            }
            if(this.sprite.row === this.maxRow && this.sprite.frame < this.maxFrame){
                this.sprite.row = 0;
                this.sprite.frame = 0;
            }
    }
}

// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();

