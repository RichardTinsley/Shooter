export class Effect {
    constructor({ 
        sprite, 
        position, 
        scale,
        direction
    }){

    }

    draw(ctx){
    }

    update(event){
    }
    //TRANSFORM ROTATE???@?
    drawEffect(ctx){

    }

    animateEffect(){
        if(this.sprite.frame < this.maxFrame) 
            this.sprite.frame++; 
        else 
            this.state = ANIMATION_STATES.FINISHED;
    }
}
