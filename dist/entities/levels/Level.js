export var LEVEL_NAMES;
(function (LEVEL_NAMES) {
    LEVEL_NAMES[LEVEL_NAMES["TERRA_HAUTE"] = 0] = "TERRA_HAUTE";
    LEVEL_NAMES[LEVEL_NAMES["LAVONEY"] = 1] = "LAVONEY";
    LEVEL_NAMES[LEVEL_NAMES["HELLWORTICA"] = 2] = "HELLWORTICA";
})(LEVEL_NAMES || (LEVEL_NAMES = {}));
export class Level {
    constructor() {
        this.emptyTowerSpots = () => {
        };
    }
    draw(ctx) {
        ctx.drawImage(this.levelImage, 0, 0);
    }
}
//# sourceMappingURL=Level.js.map