import { SIZES } from "../constants/game.js";
export function create2DArray(tileMap, size) {
    const TileMapArray = [];
    for (let i = 0; i < tileMap.length; i += size)
        TileMapArray.push(tileMap.slice(i, i + size));
    return TileMapArray;
}
export function generateEnemyWaypoints(waypoints) {
    return waypoints.map((waypoint) => {
        return {
            x: waypoint.x - SIZES.TILE + Math.round(Math.random() * (SIZES.TILE * 2)),
            y: waypoint.y - SIZES.TILE + Math.round(Math.random() * (SIZES.TILE * 2)),
        };
    });
}
//# sourceMappingURL=array.js.map