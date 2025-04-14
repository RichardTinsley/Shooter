const EFFECTS_URL = "./images/effects/";
const ENEMIES_URL = "./images/enemies/";
const PROJECTILES_URL = "./images/projectiles/";
const TOWERS_URL = "./images/towers/";
const UI_URL = "./images/UI/";
const LEVELS_URL = "./images/levels/";
const MUSIC_URL = "./audio/";
const ICONS_URL = "./images/UI/icons/";
export const ALL_ASSETS = new Map();
export const FILE_NAMES = {
    DSLOGO: "DsShieldLogo.png",
    LEVEL_LAVONEY: "lavoney.png",
    ICONS_LIVES: "lives.png",
    ICONS_COINS: "coins.png",
    ICONS_EXP: "experience.png",
    ICONS_MANA: "mana.png",
    ICONS_WAVES: "waves.png",
    ICONS_PAUSE: "pause.png",
    ICONS_AUDIO: "audio.png",
    ICONS_SETTINGS: "settings.png",
    ICONS_TIMER: "timer.png",
    MUSIC_MAIN_MENU: "mainMenu.mp3",
    TOWER_EMPTY_SPOT: "emptyTowerSpot.png",
    TOWER_AMETHYST_1: "amethystTower (1).png",
    PROJECTILE_SAPPHIRE_1: "Iceball_84x9.png",
    ENEMY_ZOMBIE_1_WALK: "zombie_1_walk.png",
    ENEMY_ZOMBIE_1_DIE: "zombie_1_die.png",
    ENEMY_ZOMBIE_3_WALK: "zombie_3_walk.png",
    ENEMY_ZOMBIE_3_DIE: "zombie_3_die.png",
};
export const ASSET_LIST = [
    [`${FILE_NAMES.DSLOGO}`, `${UI_URL}${FILE_NAMES.DSLOGO}`],
    [`${FILE_NAMES.LEVEL_LAVONEY}`, `${LEVELS_URL}${FILE_NAMES.LEVEL_LAVONEY}`],
    [`${FILE_NAMES.ICONS_LIVES}`, `${ICONS_URL}${FILE_NAMES.ICONS_LIVES}`],
    [`${FILE_NAMES.ICONS_COINS}`, `${ICONS_URL}${FILE_NAMES.ICONS_COINS}`],
    [`${FILE_NAMES.ICONS_EXP}`, `${ICONS_URL}${FILE_NAMES.ICONS_EXP}`],
    [`${FILE_NAMES.ICONS_MANA}`, `${ICONS_URL}${FILE_NAMES.ICONS_MANA}`],
    [`${FILE_NAMES.ICONS_WAVES}`, `${ICONS_URL}${FILE_NAMES.ICONS_WAVES}`],
    [`${FILE_NAMES.ICONS_PAUSE}`, `${ICONS_URL}${FILE_NAMES.ICONS_PAUSE}`],
    [`${FILE_NAMES.ICONS_AUDIO}`, `${ICONS_URL}${FILE_NAMES.ICONS_AUDIO}`],
    [`${FILE_NAMES.ICONS_SETTINGS}`, `${ICONS_URL}${FILE_NAMES.ICONS_SETTINGS}`],
    [`${FILE_NAMES.ICONS_TIMER}`, `${ICONS_URL}${FILE_NAMES.ICONS_TIMER}`],
    [`${FILE_NAMES.MUSIC_MAIN_MENU}`, `${MUSIC_URL}${FILE_NAMES.MUSIC_MAIN_MENU}`],
    [`${FILE_NAMES.ENEMY_ZOMBIE_1_WALK}`, `${ENEMIES_URL}${FILE_NAMES.ENEMY_ZOMBIE_1_WALK}`],
    [`${FILE_NAMES.ENEMY_ZOMBIE_3_WALK}`, `${ENEMIES_URL}${FILE_NAMES.ENEMY_ZOMBIE_3_WALK}`],
    [`${FILE_NAMES.TOWER_EMPTY_SPOT}`, `${TOWERS_URL}${FILE_NAMES.TOWER_EMPTY_SPOT}`],
    [`${FILE_NAMES.TOWER_AMETHYST_1}`, `${TOWERS_URL}${FILE_NAMES.TOWER_AMETHYST_1}`],
    [`${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`, `${PROJECTILES_URL}${FILE_NAMES.PROJECTILE_SAPPHIRE_1}`],
];
//# sourceMappingURL=assets.js.map