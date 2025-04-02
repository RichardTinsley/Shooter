export const COLOURS = {
  TOPAZ: "topaz",
  RUBY: "ruby",
  SAPPHIRE: "sapphire",
  EMERALD: "emerald",
  AMETHYST: "amethyst",
  CITRINE: "citrine",
  SILVER: "silver",
  GOLD: "gold",
  DIAMOND: "diamond",
  OBSIDIAN: "obsidian",
  OPAL: "opal",
  URANIUM: "uranium",
};

export const TOWERINFORMATION = {
  [COLOURS.AMETHYST]: {
    name: COLOURS.AMETHYST[0].toUpperCase() + COLOURS.AMETHYST.substring(1),
    cost: 10000,
    damage: 0,
    range: 200,
    firerate: 0,
    ability: "Has a special aura which gives boosts to other towers in range.", // Aura, Tower boost auras
  },
  [COLOURS.DIAMOND]: {
    name: COLOURS.DIAMOND[0].toUpperCase() + COLOURS.DIAMOND.substring(1),
    cost: 5000,
    damage: 400,
    range: 100,
    firerate: 5,
    ability: "Has a chance of doing critical damage to an enemy.", // Heavy damage / stun / critical hit
  },
  [COLOURS.EMERALD]: {
    name: COLOURS.EMERALD[0].toUpperCase() + COLOURS.EMERALD.substring(1),
    cost: 3000,
    damage: 100,
    range: 120,
    firerate: 4,
    ability:
      "Has the ability to poison enemy and slow their movement with venom attack.", // Emerald Enemy Immune, Poison, damage, reduce armour
  },
  [COLOURS.RUBY]: {
    name: COLOURS.RUBY[0].toUpperCase() + COLOURS.RUBY.substring(1),
    cost: 110, //500
    damage: 200,
    range: 150,
    firerate: 8,
    ability: "Has splash damage ability", //Splash damage / flame thrower
  },
  [COLOURS.SAPPHIRE]: {
    name: COLOURS.SAPPHIRE[0].toUpperCase() + COLOURS.SAPPHIRE.substring(1),
    cost: 100, //1000
    damage: 100,
    range: 120,
    firerate: 3,
    ability: "Has the ability to slow enemy movement with frost bite attack.", // Freeze / slow group
  },
  [COLOURS.TOPAZ]: {
    name: COLOURS.TOPAZ[0].toUpperCase() + COLOURS.TOPAZ.substring(1),
    cost: 100,
    damage: 10,
    range: 150,
    firerate: 1,
    ability: "Has rapidfire and multifire attack.", //rapid fire / upgraqdes to laser rail gun laser
  },
};

///START OFF WITH THREE TOWERS,  MULTIPLE SHOT EVOLVES INTO AURA TOWERS,  FROST TURNS INTO POISON, SPLASH DAMAGE LASER STUFF

//TOWER COSTS? TOWER TYPES FOR ASSET RETRIEVAL?
/* 
  Gold 		money generation, weak damage
  Silver		Sniper range
  Opal		Damage Aura
  Citrine     chain lighting, spreadshot
  *Uranium	Enemy Damage, weakness auras / remove armour and abilities && tower boost aura
  Obsidian	/ ION cannon that comes from the sky and follows the waypoints
  fire pit, landmines, net traps /air units to the ground
  
  Tower places obstacles, dragons teeth, landmines etc to obstruct enemies, which enemies have to attack to get through
  
    // LINE GRADIENT!!!
      LASER LINES        
      ctx.beginPath();
      ctx.moveTo(this.position.x, this.position.y);
      ctx.lineTo(this.center.x, this.center.y);
      ctx.strokeStyle = "red";
      ctx.stroke();
  */
