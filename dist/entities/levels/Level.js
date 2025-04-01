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
    }
    draw(ctx) {
        ctx.drawImage(this.levelImage, 0, 0);
    }
    update() {
    }
    getTowerSpots() {
        return this.emptyTowerSpots();
    }
    emptyTowerSpots() {
        const emptyTowerSpots = [];
        this.tileMap.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol !== 0)
                    emptyTowerSpots.push(new EmptyTowerSpot({
                        x: x * SIZES.TILE + SIZES.TILE_HALF,
                        y: y * SIZES.TILE + SIZES.TILE_HALF,
                    }, FILE_NAMES.TOWER_EMPTY_SPOT, 64, 64));
            });
        });
        return emptyTowerSpots;
    }
}
//# sourceMappingURL=Level.js.map