export const SIZES = {
    COLUMNS: 40,
    ROWS: 20,
    TILE: 32,
    get TILE_HALF() {
        return this.TILE / 2;
    },
    get GAME_WIDTH() {
        return this.TILE * this.COLUMNS;
    },
    get GAME_HEIGHT() {
        return this.TILE * this.ROWS;
    },
    get GAME_WIDTH_HALF() {
        return this.GAME_WIDTH / 2;
    },
    get GAME_HEIGHT_HALF() {
        return this.GAME_HEIGHT / 2;
    },
    TEXT_IN_GAME: 25,
    TEXT_TITLE: 120,
    TEXT_MENUITEM: 50,
    TEXT_SPACING: 15,
};
//# sourceMappingURL=game.js.map