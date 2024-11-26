export const TOWER_SIZE = 64;
export const ENEMY_SIZE = 48;
export const ENEMY_SIZE_HALF = ENEMY_SIZE / 2;

export const OBJECT_TYPES = {
    NORMAL: "Plain",
    MENUITEM: 'MenuItem',
    ENEMY: 'Enemy',
    TOWER: 'Tower',
    PROJECTILE: 'Projectile',
    EFFECT: 'Effect',
}

export const ENEMY_STATES = {
    IDLE: 0,
    WALKING: 1,
    RUNNING: 2,
    ATTACK: 3,
    INJURED: 4,
    DYING: 5,
    DEAD: 6,
};

export const TOWER_STATES = {
    IDLE: 0,
    SHOOTING: 1,
}

export const OBJECT_COLOURS = {
    TOPAZ: 'topaz',
    RUBY: 'ruby',
    SAPPHIRE: 'sapphire',
    EMERALD: 'emerald',
    AMETHYST: 'amethyst',
    CITRINE: 'citrine',
    SILVER: 'silver',
    GOLD: 'gold',
    DIAMOND: 'diamond',
    OBSIDIAN: 'obsidian',
    OPAL: 'opal',
    URANIUM: 'uranium'
}





//TOWER COSTS? TOWER TYPES FOR ASSET RETRIEVAL?
/* 
Ruby		Splash damage / flame thrower
Amethyst  	Air Attack only
Sapphire	Freeze / slow group 
Topaz 		rapid fire
Diamond		Heavy damage / stun / critical hit 
Gold 		money generation, weak damage
Silver		Sniper range
Opal		Tower boost auras
Citrine     chain lighting, spreadshot
*Uranium	Enemy Damage, weakness auras / remove armour and abilities
Obsidian	rail gun laser / ION cannon that comes from the sky and follows the waypoints
fire pit, landmines, net traps /air units to the ground

GREEN TOWER - Emerald Enemy Immune, Poison, damage, reduce armour
grass,
flower
cactus
venusfly trap
pirhana
tree stump
elder tree
*/