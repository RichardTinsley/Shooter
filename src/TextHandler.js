import { Text } from "./Text.js";

export class TextHandler{
    constructor() {
        this.texts = [];
    }

    draw(ctx){
        this.texts.forEach(text =>{
            text.draw(ctx);
        });
    }

    update(event){
        this.texts.sort((b, a) => a.position.y - b.position.y); 
        for (let i = this.texts.length - 1; i >= 0; i-- ){
            const text = this.texts[i];        
            text.update(event);
            if (text.alpha <= 0){
                this.texts.splice(i, 1);
            }
        }
    }

    add(text, colour, position){
        this.texts.push(new Text({
            text: text,
            colour: colour,
            position: {
                x: position.x,
                y: position.y
            },
        }));
    }
}
