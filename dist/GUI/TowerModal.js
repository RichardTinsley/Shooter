import { COLOURS } from "../constants/colours.js";
export class TowerModal {
    constructor(position, maxRadius) {
        this.position = position;
        this.maxRadius = maxRadius;
        this.offset = 10;
        this.radius = this.offset;
    }
    draw(ctx) {
        this.drawCircleGradient(ctx);
    }
    update() {
        if (this.radius < this.maxRadius)
            this.radius += this.offset * 2;
    }
    drawCircleGradient(ctx) {
        const radialGradient = ctx.createRadialGradient(this.position.x, this.position.y, this.radius - this.offset, this.position.x, this.position.y, this.radius / 1.75);
        radialGradient.addColorStop(0, COLOURS.TOWER_MODAL_ALPHA);
        radialGradient.addColorStop(1, "#00000000");
        ctx.beginPath();
        ctx.fillStyle = radialGradient;
        ctx.arc(this.position.x, this.position.y, this.radius - this.offset / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = COLOURS.TOWER_MODAL;
        ctx.stroke();
    }
    setPosition(position) {
        throw new Error("Method not implemented.");
    }
    getPosition() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=TowerModal.js.map