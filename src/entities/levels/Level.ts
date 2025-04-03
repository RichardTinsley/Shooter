import { ALL_ASSETS, FILE_NAMES } from "../../constants/assets.js";
import { SIZES } from "../../constants/game.js";
import { Position } from "../../constants/types.js";
import { EmptyTowerSpot } from "../towers/emptyTowerSpot.js";

export enum LEVEL_NAMES {
  TERRA_HAUTE,
  LAVONEY,
  HELLWORTICA,
}

export abstract class Level {
  levelImage = ALL_ASSETS.get(FILE_NAMES.LEVEL_LAVONEY);
  tile2DMap = this.create2DArray();
  doodads: Array<any> = [];

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.levelImage, 0, 0);
    this.doodads.forEach((towerSpot: EmptyTowerSpot) => towerSpot.draw(ctx));
  }

  update(): void {
    this.doodads.forEach((towerSpot: EmptyTowerSpot) => towerSpot.update());
  }

  abstract getTileMap(): Array<number>;

  abstract getWaypoints(): Array<Position>;

  getEnemyGeneratedWaypoints() {
    return this.getWaypoints().map((waypoint) => {
      return {
        x:
          waypoint.x -
          SIZES.TILE +
          Math.round(Math.random() * (SIZES.TILE * 2)),
        y:
          waypoint.y -
          SIZES.TILE +
          Math.round(Math.random() * (SIZES.TILE * 2)),
      };
    });
  }

  createEmptyTowerSpots(): Array<EmptyTowerSpot> {
    const emptyTowerSpots: Array<EmptyTowerSpot> = [];
    this.tile2DMap.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol !== 0)
          emptyTowerSpots.push(
            new EmptyTowerSpot(
              {
                x: x * SIZES.TILE + SIZES.TILE_HALF,
                y: y * SIZES.TILE + SIZES.TILE_HALF,
              },
              FILE_NAMES.TOWER_EMPTY_SPOT,
              64,
              64
            )
          );
      });
    });
    return emptyTowerSpots;
  }

  create2DArray(): Array<Array<number>> {
    const TileMapArray: Array<number>[] = [];
    for (let i = 0; i < this.getTileMap().length; i += SIZES.COLUMNS)
      TileMapArray.push(this.getTileMap().slice(i, i + SIZES.COLUMNS));
    return TileMapArray;
  }
}
