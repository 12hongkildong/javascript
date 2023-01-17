export default class Map{
    constructor(){
        this.img=document.querySelector("#bg")
        this.x=0;
        this.y=0


    }

    update(){


    }

    draw(ctx){
        ctx.drawImage(this.img,0,0)
        
    }

}