export class ObjectHandler{
    constructor(emptyTowerSpots){
        this.towers = emptyTowerSpots();
    }

    draw(ctx){
        this.towers.forEach(tower => tower.draw(ctx));
    }

    update(event){
        this.towers.forEach(tower => tower.update(event));
    }
}