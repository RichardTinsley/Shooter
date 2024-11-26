RESEARCH: SCOPE/CLOSURE,  OBJECT.() PROTOTYPES, JS PERFORMANCE, WINDOW DOCUMENT
TIMER CLASS .UPDATE() returns event, timer display from hud.  [destructure]??
move Assets to utilities

DEATH AND BATTLE HANDLERS MERGE, PUT SHOOT() BACK IN TOWER, BUT ITS HANDLED BY BIG BATTLE HANDLER
CLEAN UP SHOOT()/ MERGE target enemies and prioritise enemies in tower range.
if tower not an instanceof Empty tower // shoot
enemiesInRange[]
if enemySelect = enemiesInRange.find(enemy => enemy.isSelected); // return
else enemies in range.sort // return

CHECKCOLLISION WITH MOUSE WITHIN EACH ENTITY?

WITHIN BATTLE HANDLER CALL THESE.
PROJECTILE.ADD EFFECT (internally for each projectile type)  ENEMY.ADD EFFECT(BLOOD)

DELTA TIME * ENEMY MOVIE, (EVENT) on all entiry UPDATE methods UPDATE !event return
SCREEN CLASS, ALL SCREENS INHERIT FROM THIS  

ALL ENTITIES HAVE ANIMATION STATES, BUT ENEMY STATE DETERMINES ANIMATION ROW (ITS NOT A STATE)
MERGE UPDATE MOVEMENT FOR ENEMY AND PROJECTILE / GIVE DIRECTION/FIND ANGLE
MAKE USE OF POSITION AND CENTER, REMOVE HITBOX OBJECTS

FIX PROJECTILE TRANSLATE/ROTATE/CENTER
AUDIO SOUND FX
enemy collisions, push each other away
animate enemy selection

See through options menu so game can keep running in background 


<script defer src .js> tells the browswer to run js after HTML is done. 
window.onload vs window.addevent listener("load)

towers.find(tower => {
	if tower === isSelectedObject
	tower = newTower. 
})

PUT SWITCH MUSIC BACK INTO SWITCH SCREEN

