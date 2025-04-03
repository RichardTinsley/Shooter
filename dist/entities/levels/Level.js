import { ALL_ASSETS, FILE_NAMES } from "../../constants/assets.js";
import { SIZES } from "../../constants/game.js";
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
        this.tile2DMap = this.create2DArray();
        this.doodads = [];
    }
    draw(ctx) {
        ctx.drawImage(this.levelImage, 0, 0);
        this.doodads.forEach((towerSpot) => towerSpot.draw(ctx));
    }
    update() {
        this.doodads.forEach((towerSpot) => towerSpot.update());
    }
    static getEnemyGeneratedWaypoints() {
        return Level.WAYPOINTS.map((waypoint) => {
            return {
                x: waypoint.x -
                    SIZES.TILE +
                    Math.round(Math.random() * (SIZES.TILE * 2)),
                y: waypoint.y -
                    SIZES.TILE +
                    Math.round(Math.random() * (SIZES.TILE * 2)),
            };
        });
    }
    getTowerSpots() {
        return this.createEmptyTowerSpots();
    }
    createEmptyTowerSpots() {
        const emptyTowerSpots = [];
        this.tile2DMap.forEach((row, y) => {
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
    create2DArray() {
        const TileMapArray = [];
        for (let i = 0; i < Level.TILEMAP.length; i += SIZES.COLUMNS)
            TileMapArray.push(Level.TILEMAP.slice(i, i + SIZES.COLUMNS));
        return TileMapArray;
    }
}
//# sourceMappingURL=Level.js.map