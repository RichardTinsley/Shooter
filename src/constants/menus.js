import { GAME_STATES } from "./game.js";

export const MENU_ITEM_SIZES = {
    size: 60,
    spacing: 15,
};

export const MAIN_MENU = [
    {
        text: "New Game",
        option: GAME_STATES.BATTLE,
    }, 
    {
        text: "Options",
        option: GAME_STATES.OPTIONS,
    }, 
    {
        text: "About",
        option: GAME_STATES.ABOUT,
    }, 
];
