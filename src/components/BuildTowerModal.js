
export class BuildTowerModal{
    constructor({
        position
    }){
        this.position = {
            x: position.x,
            y: position.y,
        };

        this.radius = 60;
        this.circle = 20;
        this.hexagonCorners = this.getHexagonCornerPositions();
    }

    draw(ctx){
        this.drawHexagon(ctx);
    }

    
    update(event){
    }

    drawHexagon(ctx){
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.lineJoin = "miter";

        this.hexagonCorners.forEach(corner => {
            ctx.lineTo(corner.x, corner.y);
            ctx.arc(corner.x, corner.y, this.circle, 0, 2 * Math.PI);
            ctx.lineTo(corner.x, corner.y);
        });

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }

    getHexagonCornerPositions(){
        const array = [];
        for (let i = 0; i < 6; i++){
            const rotation = (Math.PI / 3) * i;
            const x = this.radius * Math.cos(rotation);
            const y = this.radius * Math.sin(rotation);
            const circlePosition = {x:x,y:y};
            array.push(circlePosition);
        }
        return array;
    }
}
