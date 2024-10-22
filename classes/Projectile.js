import { HALF_TILE_SIZE } from "../index.js";
import { ANIMATION_STATE } from "./RenderHandler.js";

export class Projectile {
    constructor({ 
        sprite,
        position,
        enemy,
        scale,
        damage,
    }){
        this.sprite = sprite ?? { 
            image: "", 
            frame: 0, 
            row: 0, 
            width: 0, 
            height: 0 
        };
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;
        this.damage = damage;
        this.speed = 2;
        
        this.enemy = enemy;

        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale;   

        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;
        this.maxRow = (this.sprite.image.height / this.sprite.height) - 1;

        this.angle;
        this.center = {
            x: this.position.x + 8,
            y: this.position.y - 32 // DOUBLE CHECK THIS
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        this.state = ANIMATION_STATE.ANIMATING;
    }

    renderProjectile(ctx, event){
        switch(this.state){
            case ANIMATION_STATE.ANIMATING:
                this.update(event); 
                this.draw(ctx);
                break
            case ANIMATION_STATE.FINISHED:
                break
        }
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(this.angle);
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            0 / 2,
            0,
            this.width,
            this.height
        );
        ctx.restore();
    }

    update(event) {
        this.angle = Math.atan2(
            this.enemy.center.y - this.center.y,
            this.enemy.center.x - this.center.x
        );
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

    loadEffect(effect){
        return {        
            sprite: { 
                image: effect.image,
                x: 0, 
                y: Math.floor(Math.random() * 9),  
                width: effect.width, 
                height: effect.height 
            }, 
            position: {
                x: this.enemy.position.x, 
                y: this.enemy.position.y
            }, 
            width: effect.width,
            height: effect.height,
            scale: effect.scale,
            direction: effect.direction
        }
    }

    loadExplosion(effect){
        return {        
            sprite: { 
                image: effect.image,
                x: 0, 
                y: 0,  
                width: effect.width, 
                height: effect.height 
            }, 
            position: {
                x: this.enemy.position.x + Math.floor(Math.random() * HALF_TILE_SIZE), 
                y: this.enemy.position.y + Math.floor(Math.random() * HALF_TILE_SIZE)
            }, 
            width: effect.width,
            height: effect.height,
            scale: Math.random() * .4 + .3,
            direction: effect.direction
        }
    }

    loadGameText(gameText, text, position){
        return {
            text: text,
            color: gameText.color,
            alpha: gameText.alpha,
            position: {
                x: position.x,
                y: position.y
            },
            textSize: gameText.textSize,
            align: gameText.align 
        }
    }

    checkCollision(a, b){
        const dx = a.center.x - b.center.x;
        const dy = a.center.y - b.center.y;
        const distance = Math.hypot(dx, dy);
        const sumOfRadii = a.width / 3 + b.width / 3 ;
        return distance < sumOfRadii; 
    }
}

// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();