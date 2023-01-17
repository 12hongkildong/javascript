import Map from './game/map.js'
import Boy from './game/boy.js'
import Background from './game/background.js'


export default class gameCanvas{
    constructor(){
        this.dom=document.querySelector("#game");

        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        // 객체들
        this.boy = new Boy();
        this.map = new Map();
        

        // handler
        this.dom.onclick=this.onclickHandler.bind(this);
        

    }
    run(){
        this.update();
        this.draw();

        window.setTimeout(()=>{
            this.run();
        },17)

    }

    update(){
        this.boy.update();

    }

    draw(){
        this.map.draw(this.ctx);
        this.boy.draw(this.ctx);

    }

    onclickHandler(e){
        this.boy.moveTo(e.x,e.y);


    }


}