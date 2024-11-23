export const GAME_SIZES = {
    COLUMNS: 40,
    ROWS: 24,
    TILE_SIZE: 32,
    get TILE_SIZE_HALF(){
        return this.TILE_SIZE / 2;
    },
    get GAME_WIDTH(){
        return this.TILE_SIZE * this.COLUMNS;
    },
    get GAME_HEIGHT(){
        return this.TILE_SIZE * this.ROWS;
    }, 
    get GAME_WIDTH_HALF(){
        return this.GAME_WIDTH / 2;
    },
    get GAME_HEIGHT_HALF(){
        return this.GAME_HEIGHT / 2;
    }, 
};

export const GAME_STATES = {
    PLAY: 'PLAY',
    PAUSED: 'PAUSED',
    DEBUG: 'DEBUG',
    RESTART: 'RESTART',
    BATTLE: 'BATTLE',
    MENU: 'MENU',
    LOADING: 'LOADING',
    GAMEOVER: 'GAMEOVER',
    OPTIONS: 'OPTIONS',
    MUSIC: 'MUSIC'
};
