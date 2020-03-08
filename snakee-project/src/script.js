/*jslint browser: true */
/*global window*/
/*global document*/

import "babel-polyfill";
import Game from "./game.js";

window.onload = () => {
    const canvasWidth = 900;
    const canvasHeight = 600;
    const blockSize = 30;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const widthInBlocks = canvasWidth / blockSize;
    const heightInBlocks = canvasHeight / blockSize;
    const centreX = canvasWidth / 2;
    const centreY = canvasHeight / 2;
    let delay = 100;
    let snakee;
    let applee;
    let score;
    let timeout;


    document.onkeydown = (e) => {
        const key = e.keyCode;
        let newDirection;
        switch (key) {
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;
            case 32:
                myGame.launch();
                return;
            default:
                return;
        }
        myGame.snakee.setDirection(newDirection);

    }

    let myGame = new Game();
    myGame.init();


}






