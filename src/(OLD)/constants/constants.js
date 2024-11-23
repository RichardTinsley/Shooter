export const COLUMNS = 40;
export const ROWS = 24;
export const TILE_SIZE = 32;
export const TILE_SIZE_HALF = TILE_SIZE / 2;
export const GAME_WIDTH = TILE_SIZE * COLUMNS;
export const GAME_HEIGHT = TILE_SIZE * ROWS;
export const ENEMY_SIZE = 48;
export const ENEMY_SIZE_HALF = ENEMY_SIZE / 2;
export const TOWER_SIZE = 64;

export const ANIMATION_STATES = {
    ANIMATING: 0,
    FINISHED: 1,
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};

export const TEXT_COLOURS = {
    GOLD: '255, 215, 0, ',
    GREEN: '50, 205, 50, ',
    RED: '250, 0, 0, ',
}

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
};

export const LEVELS = {
    TERRA_HAUTE: 0,
}
