export const COLUMNS = 40;
export const ROWS = 24;
export const TILE_SIZE = 32;
export const TILE_SIZE_HALF = TILE_SIZE / 2;
export const GAME_WIDTH = TILE_SIZE * COLUMNS;
export const GAME_HEIGHT = TILE_SIZE * ROWS;

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
