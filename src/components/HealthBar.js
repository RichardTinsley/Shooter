import * as INTERFACE from "../constants/interface.js";
import { randomPositiveFloat } from "../utilities/math.js";

export class HealthBar{
    constructor({
        length,
    }){
        this.maxHealth = randomPositiveFloat(100);
        this.health = this.maxHealth;

        this.position = {};

        this.length = length; 
        this.height = 3;
    }

    draw(ctx){
        this.drawHealthBar(ctx);
    }
    
    update(position){
        this.position = {...position};
    }

    setHealth(damage){
        this.health -= damage;
        if(this.health < 0)
            this.health = 0;
    }

    getHealth(){
        return this.health > 0;
    }

    drawHealthBar(ctx){
        if(this.getHealth()){
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.lineJoin = "bevel";
            ctx.strokeStyle = INTERFACE.COLOURS.WHITE;
            ctx.strokeRect(this.position.x - 2, this.position.y - 2, this.length + 4, this.height + 4);
            ctx.strokeStyle = INTERFACE.COLOURS.BLACK;
            ctx.strokeRect(this.position.x - 1, this.position.y - 1, this.length + 2, this.height + 2);
    
            ctx.fillStyle = INTERFACE.COLOURS.BLACK;
            ctx.fillRect(this.position.x, this.position.y, this.length, this.height);
            this.health > (this.maxHealth * .33) ? ctx.fillStyle = INTERFACE.COLOURS.BRIGHT_GREEN : ctx.fillStyle = INTERFACE.COLOURS.RED;
            ctx.fillRect(this.position.x, this.position.y, this.length * (this.health / this.maxHealth), this.height);
            ctx.closePath();
        }
    }
}
