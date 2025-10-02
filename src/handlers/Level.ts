import { ALL_ASSETS, FILE_NAMES } from "../constants/assets.js";
import { ALL_WAYPOINTS } from "../constants/waypoints.js";
import { ALL_TILEMAPS } from "../constants/tilemaps.js";
import { SIZES } from "../constants/sizes.js";
import { Position } from "../constants/types.js";
import { randomNumber } from "../utilities/math.js";
import { Tower } from "../entities/Tower.js";

export class Level {
  levelImage = ALL_ASSETS.get(FILE_NAMES.LEVEL_LAVONEY);
  tile2DMap = this.create2DArray();
  doodads: Array<any> = [];

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.levelImage, 0, 0);
    // this.doodads.forEach((towerSpot: EmptyTowerSpot) => towerSpot.draw(ctx));
  }

  update(): void {
    // this.doodads.forEach((towerSpot: EmptyTowerSpot) => towerSpot.update());
  }

  static getEnemyGeneratedWaypoints(): Array<Position> {
    return ALL_WAYPOINTS.get(FILE_NAMES.LEVEL_LAVONEY)!.map((waypoint) => {
      return {
        x: waypoint.x - randomNumber(-SIZES.TILE, SIZES.TILE),
        y: waypoint.y - randomNumber(-SIZES.TILE, SIZES.TILE),
      };
    });
  }

  createEmptyTowerSpots(): Array<Tower> {
    const emptyTowerSpots: Array<Tower> = [];
    this.tile2DMap.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol !== 0)
          emptyTowerSpots.push(
            new Tower(
              {
                x: x * SIZES.TILE + SIZES.TILE_HALF,
                y: y * SIZES.TILE + SIZES.TILE_HALF,
              },
              FILE_NAMES.TOWER_EMPTY_SPOT
            )
          );
      });
    });
    return emptyTowerSpots;
  }

  create2DArray(): Array<Array<number>> {
    const TILEMAP = ALL_TILEMAPS.get(FILE_NAMES.LEVEL_LAVONEY);
    const TileMapArray: Array<number>[] = [];

    for (let i = 0; i < TILEMAP!.length; i += SIZES.COLUMNS)
      TileMapArray.push(TILEMAP!.slice(i, i + SIZES.COLUMNS));
    return TileMapArray;
  }
}
