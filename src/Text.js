export class Text {
    constructor({
        text,
        color,
        alpha,
        position,
        textSize,
        align 
    }){
        this.text = text;
        this.color = color;
        this.alpha = alpha
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.textSize = textSize;
        this.align = align;
    }
    update(){
        this.alpha -= 0.1;
        this.position.y -= 0.6;
    }

    draw(ctx){
        ctx.fillStyle = `rgba(${this.color} ${this.alpha})`;
        ctx.font = 'bold ' + this.textSize + 'px canterbury';
        ctx.textAlign = this.align;
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 5;
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.strokeText(this.text, this.position.x + 5, this.position.y - 3);
        ctx.fillText(this.text, this.position.x + 5, this.position.y - 3);
    }
}