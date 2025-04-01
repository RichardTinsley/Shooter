import { ALL_ASSETS, FILE_NAMES } from "../../constants/assets.js";
import { SIZES } from "../../constants/game.js";
import { create2DArray } from "../../utilities/array.js";
import { EmptyTowerSpot } from "../towers/emptyTowerSpot.js";
export var LEVEL_NAMES;
(function (LEVEL_NAMES) {
    LEVEL_NAMES[LEVEL_NAMES["TERRA_HAUTE"] = 0] = "TERRA_HAUTE";
    LEVEL_NAMES[LEVEL_NAMES["LAVONEY"] = 1] = "LAVONEY";
    LEVEL_NAMES[LEVEL_NAMES["HELLWORTICA"] = 2] = "HELLWORTICA";
})(LEVEL_NAMES || (LEVEL_NAMES = {}));
export class Level {
    constructor() {
        this.levelImage = ALL_ASSETS.get(FILE_NAMES.LEVEL_LAVONEY);
        this.tileMap = create2DArray(this.getTileMap(), SIZES.COLUMNS);
        this.doodads = [];
        this.towerSpots = this.emptyTowerSpots();
    }
    draw(ctx) {
        ctx.drawImage(this.levelImage, 0, 0);
        this.towerSpots.forEach((towerSpot) => towerSpot.draw(ctx));
    }
    update() {
        this.towerSpots.forEach((towerSpot) => towerSpot.update());
    }
    emptyTowerSpots() {
        const emptyTowerSpots = [];
        console.log(this.tileMap);
        this.tileMap.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol !== 0)
                    emptyTowerSpots.push(new EmptyTowerSpot(FILE_NAMES.TOWER_EMPTY_SPOT, 64, 64).setPosition({
                        x: x * SIZES.TILE + SIZES.TILE_HALF,
                        y: y * SIZES.TILE + SIZES.TILE_HALF,
                    }));
            });
        });
        return emptyTowerSpots;
    }
}
//# sourceMappingURL=Level.js.map