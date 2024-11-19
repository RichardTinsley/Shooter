export const COLUMNS = 40;
export const ROWS = 24;
export const TILE_SIZE = 32;
export const TILE_SIZE_HALF = TILE_SIZE / 2;
export const TOWER_SIZE = 64;
export const GAME_WIDTH = TILE_SIZE * COLUMNS;
export const GAME_HEIGHT = TILE_SIZE * ROWS;
export const ENEMY_SIZE = 48;
export const ENEMY_SIZE_HALF = ENEMY_SIZE / 2;

export const ANIMATION_STATES = {
    ANIMATING: 0,
    FINISHED: 1,
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};

export const ENEMY_COLOURS = [
    'topaz',
    'ruby',
    'sapphire',
    'emerald',
    'amethyst',
    'citrine',
    'silver',
    'gold',
    'diamond',
    'obsidian',
    'opal',
    'uranium'
];

export const ENEMY_STATES = {
    IDLE: 0,
    WALKING: 1,
    RUNNING: 2,
    ATTACK: 3,
    INJURED: 4,
    DYING: 5,
    DEAD: 6,
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};

export const USER_INPUT_KEYS = {
    PAUSE: 'p',
    UNPAUSE: 'u',
    DEBUG: 'o',
    MUSIC: 'm',
    RESTART: 'r'
}

export const GAME_STATES = {
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    UNPAUSED: 'UNPAUSED',
    MENU: 'MENU',
    LOADING: 'LOADING',
    GAMEOVER: 'GAMEOVER',
    DEBUG: 'DEBUG',
    RESTART: 'RESTART',
    OPTIONS: 'OPTIONS',
};
export const LEVELS = {
    TERRA_HAUTE: 0,
}
export const TIME_INTERVALS = {
    SECOND: 1000,
    EVENT:  60
}