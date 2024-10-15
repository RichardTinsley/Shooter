export class GameText {
    constructor({
        game,
        text,
        color,
        alpha,
        position,
        textSize,
        align 
    }){
        this.game = game
        this.text = text;
        this.color = color;
        this.alpha = alpha
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.textSize = textSize;
        this.align = align;

        this.lifespan = 60;
    }
    update(deltaTime){
        this.alpha -= 0.1;
        this.position.y -= 0.7;
        if (this.game.eventUpdate)
            this.lifespan--;    
    }

    draw(ctx){
        ctx.fillStyle = `rgba(${this.color} ${this.alpha})`;
        ctx.font = 'bold ' + this.textSize + 'px canterbury';
        ctx.textAlign = this.align;
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, this.position.x + 5, this.position.y - 3);
    }
}