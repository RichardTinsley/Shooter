import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";

export function create2DArray(
  tileMap: Array<number>,
  size: number
): Array<Array<number>> {
  const TileMapArray: Array<number>[] = [];
  for (let i = 0; i < tileMap.length; i += size)
    TileMapArray.push(tileMap.slice(i, i + size));
  return TileMapArray;
}

export function generateEnemyWaypoints(waypoints: Array<Position>) {
  return waypoints.map((waypoint) => {
    return {
      x: waypoint.x - SIZES.TILE + Math.round(Math.random() * (SIZES.TILE * 2)),
      y: waypoint.y - SIZES.TILE + Math.round(Math.random() * (SIZES.TILE * 2)),
    };
  });
}
