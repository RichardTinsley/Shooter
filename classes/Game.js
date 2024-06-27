import { World } from "./World.js";
import { Input } from "./Input.js";

export class Game {
    constructor(){
        this.input = new Input(this);
        this.world = new World('LEVEL1');

        this.isRunning = true;
        this.debug = false;
        this.audio = new Audio('./sounds/music.mp3');

        this.hearts = 11;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;
        
        this.eventUpdate = false;
        this.eventTimer = 0;
        this.eventInterval = 60;
    }
    
    render(ctx, deltaTime){
        this.world.drawBackground(ctx);
        if(this.debug)
            this.world.drawGrid(ctx);
        this.drawText(ctx, this.hearts, 65, 52, 20,'left');
        this.drawText(ctx, this.coins, 225, 52, 20,'left');
        this.drawText(ctx, this.exp, 515, 52, 20,'left');
        this.drawText(ctx, this.waves, 805, 52, 20,'left');
        this.drawText(ctx, this.timer, 1155, 52, 20,'left');

        setInterval(this.count, 1000);
        
        this.world.placementTiles.forEach((tile) => tile.update(this.input.mouse, ctx));

        if (this.eventTimer < this.eventInterval){
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            // this.eventTimer = this.eventInterval % this.eventTimer;
            this.eventTimer = 0;
            this.eventUpdate = true; 
        }
    }

    drawText(ctx, text, x, y, textSize, align){
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + textSize + 'px Arial';
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + 5, y - 3);
    }
}