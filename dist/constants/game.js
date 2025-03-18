export const SIZES = {
    COLUMNS: 40,
    ROWS: 20,
    TILE: 32,
    get GAME_WIDTH() {
        return this.TILE * this.COLUMNS;
    },
    get GAME_HEIGHT() {
        return this.TILE * this.ROWS;
    },
};
//# sourceMappingURL=game.js.map