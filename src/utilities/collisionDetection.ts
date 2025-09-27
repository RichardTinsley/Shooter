import { Cursor, HitBox, Position } from "../constants/types.js";

// LINE COLLISION??
export function checkCircleCollision(
  a: Position,
  b: Position,
  aRadius: number,
  bRadius: number
): Boolean {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const distance = Math.hypot(dx, dy);
  const sumOfRadii = aRadius + bRadius;
  return distance < sumOfRadii;
}

export function checkHitBoxCollision(a: Cursor, b: HitBox): Boolean {
  return !(
    a.x > b.x + b.width ||
    a.x + a.width < b.x ||
    a.y > b.y + b.height ||
    a.y + a.height < b.y
  );
}
