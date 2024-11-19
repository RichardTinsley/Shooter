export class Mouse {
    constructor(){
        this.hitBox = {
            x: 0,
            y: 0,
            radius: 10,
        };
    }

    update(x, y){
        this.hitBox.x = x;
        this.hitBox.y = y;
    }
}