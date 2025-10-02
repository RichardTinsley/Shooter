import { FILE_NAMES } from "../constants/assets.js";
export const ENEMY_TYPES = new Map([
    [
        "zombieCheeks",
        {
            width: 32,
            height: 32,
            scale: 1.5,
            speed: 6,
            drawOffsets: { x: 0.0, y: 0.0 },
            widthDivisor: 1,
            hitboxHeightDivisor: 2,
            healthBarHeightOffset: 16,
            normal: {
                move: FILE_NAMES.ZOMBIE_CHEEKS_WALK,
                attack: FILE_NAMES.ZOMBIE_CHEEKS_ATTACK,
                death: FILE_NAMES.ZOMBIE_CHEEKS_DIE,
                idle: FILE_NAMES.ZOMBIE_CHEEKS_IDLE,
            },
            dark: {
                move: FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK,
                attack: FILE_NAMES.ZOMBIE_DARK_CHEEKS_ATTACK,
                death: FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE,
                idle: FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE,
            },
        },
    ],
    [
        "zombieCrawler",
        {
            width: 64,
            height: 32,
            scale: 1.5,
            speed: 1,
            drawOffsets: { x: 0.25, y: 0.1 },
            widthDivisor: 2,
            hitboxHeightDivisor: 4,
            healthBarHeightOffset: 0,
            normal: {
                move: FILE_NAMES.ZOMBIE_CRAWLER_WALK,
                attack: FILE_NAMES.ZOMBIE_CRAWLER_ATTACK,
                death: FILE_NAMES.ZOMBIE_CRAWLER_DIE,
                idle: FILE_NAMES.ZOMBIE_CRAWLER_IDLE,
            },
            dark: {
                move: FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK,
                attack: FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK,
                death: FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE,
                idle: FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE,
            },
        },
    ],
]);
//# sourceMappingURL=EnemyTypes.js.map