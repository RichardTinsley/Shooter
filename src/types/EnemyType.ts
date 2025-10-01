type EnemySprite = {
  move: string;
  death: string;
  idle: string;
  attack: string;
  attack2?: string;
  attack3?: string;
};

export type EnemyType = {
  width: number;
  height: number;
  scale: number;
  speed: number;
  offsets?: { x: number; y: number };
  normal: EnemySprite;
  dark?: EnemySprite;
};
