import gameCanvas from "./panel/game-canvas.js"

window.addEventListener("load", function(){
    this.gamecanvas = new gameCanvas();

    this.gamecanvas.run();    



})