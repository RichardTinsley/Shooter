export default class PlacementTile {
    constructor({ 
        position = { 
            x: 0, 
            y: 0 
        } }) {
        this.position = position;
        this.size = 32;
        this.colour = 'rgba(255, 255, 255, 0.15)';
        this.occupied = false;
    }
    draw(ctx) {
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
    update(mouse, ctx) {
        this.draw(ctx);
        if (
            mouse.x > this.position.x &&
            mouse.x < this.position.x + this.size &&
            mouse.y > this.position.y &&
            mouse.y < this.position.y + this.size
        ) {
        this.colour = 'rgba(50, 255, 50, 0.15)';
        } else this.colour = 'rgba(255, 255, 255, 0.15)';
    }
}

