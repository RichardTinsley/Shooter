export const TIME = {
    SECOND: 1000,
    FRAMES:  60
};

export const SIZES = {
    COLUMNS: 40,
    ROWS: 24,
    TILE: 32,
    get TILE_HALF(){
        return this.TILE / 2;
    },
    get GAME_WIDTH(){
        return this.TILE * this.COLUMNS;
    },
    get GAME_HEIGHT(){
        return this.TILE * this.ROWS;
    }, 
    get GAME_WIDTH_HALF(){
        return this.GAME_WIDTH / 2;
    },
    get GAME_HEIGHT_HALF(){
        return this.GAME_HEIGHT / 2;
    }, 
};

export const STATES = {
    LOADING: 'LOADING',
    MAINMENU: 'MAINMENU',
    BATTLE: 'BATTLE',
    PAUSED: 'PAUSED',
    RESUME: 'RESUME',
    RESTART: 'RESTART',
    GAMEOVER: 'GAMEOVER',
    DEBUG: 'DEBUG',
    OPTIONS: 'OPTIONS',
    MUSIC: 'MUSIC',
    ABOUT: 'ABOUT',
};
