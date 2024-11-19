import { GAME_STATES } from "./constants.js";

export const menuScreenButtonsPosition = 460;
export const menuScreenButtonsTextSize = 60;

export const menuScreenButtons = [
    {
        name: "New Game",
        colour: "white",
        option: GAME_STATES.PLAYING
    },
    {
        name: "Options",
        colour: "white",
        option: GAME_STATES.OPTIONS
    },  
    {
        name: "About",
        colour: "white",
        option: ""
    },
];

export const gameOverScreenButtons = [
    {
        name: "Restart",
        colour: "white",
        option: GAME_STATES.RESTART
    },
    {
        name: "Main Menu",
        colour: "white",
        option: GAME_STATES.MENU
    },
]
