export const TILES = {
    COLUMNS: 40,
    ROWS: 20,
    TILE: 32,
    get HALF_TILE() {
        return this.TILE / 2;
    },
};
export const SCREEN = {
    WIDTH: TILES.TILE * TILES.COLUMNS,
    HEIGHT: TILES.TILE * TILES.ROWS,
    get HALF_WIDTH() {
        return this.WIDTH / 2;
    },
    get HALF_HEIGHT() {
        return this.HEIGHT / 2;
    },
};
//# sourceMappingURL=screenSizes.js.map