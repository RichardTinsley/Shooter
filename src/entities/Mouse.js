
export class Mouse {
    constructor(){
        this.cursor = document.getElementById("canvas");
        this.cursor.style = "cursor: url(../image/cursors/normal.cur), auto;";
        this.hitBox = {
            x: 0,
            y: 0,
            radius: 3,
        };
    }
}