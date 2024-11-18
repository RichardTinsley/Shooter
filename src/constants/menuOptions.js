export const menuOptions = [
    {
        name: "New Game",
        scene: "menu",
        colour: "white",
        optionAction: function(switchScene, music) {
            music.pause();
            switchScene();
        }
    },
    {
        name: "Options",
        scene: "menu",
        colour: "white",
        optionAction: function(switchScene) {
            switchScene();
        }
    },  
    {
        name: "About",
        scene: "menu",
        colour: "white",
        optionAction: function(switchScene) {
            switchScene();
        }
    },
    {
        name: "Restart",
        scene: "gameover",
        colour: "white",
        optionAction: function(switchScene) {
            switchScene();
        }
    },
    {
        name: "Main Menu",
        scene: "gameover",
        colour: "white",
        optionAction: function(switchScene) {
            switchScene();
        }
    },
];

