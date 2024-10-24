export class Tower {
    constructor({
        sprite, 
        position, 
        damage,
        range,
        cooldown
    }){
        this.sprite = sprite;
        this.width = this.sprite.width;
        this.height = this.sprite.height;
        this.halfWidth = this.width / 2;
        
        this.position = position;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        };
        
        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        
        this.shootTimer = 0;
        this.damage = damage;
        this.range = range;
        this.cooldown = cooldown;
        
        this.cost;
        this.muzzlePosition = {
            x: 0,
            y: 0
        };
    }

    draw(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.center.x - this.width + this.halfWidth,
            this.center.y - this.width ,
            this.width,
            this.height
        );
    }

    update(event) {
        if (event){
            this.shootTimer++;
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
        }
    }
}