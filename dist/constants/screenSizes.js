export const TILE_SIZES = {
    COLUMNS: 40,
    ROWS: 20,
    TILE: 32,
    get TILE_HALF() {
        return this.TILE / 2;
    },
};
export const SCREEN_SIZES = {
    SCREEN_WIDTH: TILE_SIZES.TILE * TILE_SIZES.COLUMNS,
    SCREEN_HEIGHT: TILE_SIZES.TILE * TILE_SIZES.ROWS,
    get SCREEN_WIDTH_HALF() {
        return this.SCREEN_WIDTH / 2;
    },
    get SCREEN_HEIGHT_HALF() {
        return this.SCREEN_HEIGHT / 2;
    },
};
//# sourceMappingURL=screenSizes.js.map