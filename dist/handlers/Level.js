import { ALL_ASSETS, FILE_NAMES } from "../constants/assets.js";
import { ALL_WAYPOINTS } from "../constants/waypoints.js";
import { ALL_TILEMAPS } from "../constants/tilemaps.js";
import { SIZES } from "../constants/sizes.js";
import { EmptyTowerSpot } from "../entities/towers/emptyTowerSpot.js";
import { randomNumber } from "../utilities/math.js";
export class Level {
    constructor() {
        this.levelImage = ALL_ASSETS.get(FILE_NAMES.LEVEL_LAVONEY);
        this.tile2DMap = this.create2DArray();
        this.doodads = [];
    }
    draw(ctx) {
        ctx.drawImage(this.levelImage, 0, 0);
    }
    update() {
    }
    static getEnemyGeneratedWaypoints() {
        return ALL_WAYPOINTS.get(FILE_NAMES.LEVEL_LAVONEY).map((waypoint) => {
            return {
                x: waypoint.x - randomNumber(-SIZES.TILE, SIZES.TILE),
                y: waypoint.y - randomNumber(-SIZES.TILE, SIZES.TILE),
            };
        });
    }
    createEmptyTowerSpots() {
        const emptyTowerSpots = [];
        this.tile2DMap.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol !== 0)
                    emptyTowerSpots.push(new EmptyTowerSpot({
                        x: x * SIZES.TILE + SIZES.TILE_HALF,
                        y: y * SIZES.TILE + SIZES.TILE_HALF,
                    }, FILE_NAMES.TOWER_EMPTY_SPOT));
            });
        });
        return emptyTowerSpots;
    }
    create2DArray() {
        const TILEMAP = ALL_TILEMAPS.get(FILE_NAMES.LEVEL_LAVONEY);
        const TileMapArray = [];
        for (let i = 0; i < TILEMAP.length; i += SIZES.COLUMNS)
            TileMapArray.push(TILEMAP.slice(i, i + SIZES.COLUMNS));
        return TileMapArray;
    }
}
//# sourceMappingURL=Level.js.map