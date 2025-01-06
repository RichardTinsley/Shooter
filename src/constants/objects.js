export const SIZES = {
    ENEMY: 48,
    TOWER: 64,
}

export const TYPES = {
    NORMAL: "Plain",
    MENUITEM: 'MenuItem',
    ENEMY: 'Enemy',
    TOWER: 'Tower',
    PROJECTILE: 'Projectile',
    EFFECT: 'Effect',
}

export const ANIMATION = {
    LEFT: -1,
    ANIMATING: 0,
    RIGHT: 1,
    FINISHED: 2,
    MOUSEOVER: 3,
    SELECTED: 4,
};

export const STATES = {
    IDLE: 0,
    WALKING: 1,
    RUNNING: 2,
    ATTACK: 3,
    INJURED: 4,
    DYING: 5,
    DEAD: 6,
    SHOOTING: 7,
};

export const COLOURS = {
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

export const TOWERINFORMATION = {
    [COLOURS.AMETHYST]: {
        name: COLOURS.AMETHYST[0].toUpperCase() + COLOURS.AMETHYST.substring(1),
        cost: 200,
        damage: 100,
        range: 150,
        firerate: 5,
        ability: "Has a special aura which gives boosts to other towers in range.",
    },
    [COLOURS.DIAMOND]: {
        name: COLOURS.DIAMOND[0].toUpperCase() + COLOURS.DIAMOND.substring(1),
        cost: 400,
        damage: 400,
        range: 100,
        firerate: 4,
        ability: "Has a chance of doing critical damage to an enemy.",
    },
}

//TOWER COSTS? TOWER TYPES FOR ASSET RETRIEVAL?
/* 
Ruby		Splash damage / flame thrower
Amethyst  	Aura, Tower boost auras
Sapphire	Freeze / slow group 
Topaz 		rapid fire / upgraqdes to laser rail gun laser 
Diamond		Heavy damage / stun / critical hit 
Gold 		money generation, weak damage
Silver		Sniper range
Opal		Damage Aura
Citrine     chain lighting, spreadshot
*Uranium	Enemy Damage, weakness auras / remove armour and abilities && tower boost aura
Obsidian	/ ION cannon that comes from the sky and follows the waypoints
fire pit, landmines, net traps /air units to the ground

GREEN TOWER - Emerald Enemy Immune, Poison, damage, reduce armour
grass,
flower
cactus
venusfly trap
pirhana
tree stump
elder tree

    LASER LINES        
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(this.center.x, this.center.y);
    ctx.strokeStyle = "red";
    ctx.stroke();
*/
