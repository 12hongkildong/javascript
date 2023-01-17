export default class Boy{
    constructor(x,y){
        this.img=document.querySelector("#boy");

        this.dx = 0; //마우스 클릭 도착거리x
        this.dy = 0; //마우스 클릭 도착거리y
        this.vx = 0; //마우스 클릭 이동거리 x
        this.vy = 0; //마우스 클릭 이동거리 y


        this.x=0;
        this.y=0;

        this.ix=1;
        this.iy=2;

        this.sw=106;
        this.sh=148.25;

        this.sx=this.ix*this.sw;
        this.sy=this.sh*this.iy;

    }

    update(x,y){
        
        
        
        // 마우스 클릭으로 이동

        if((this.dx-2 < this.x || this.x <this.dx+2)&&(this.dy-2 < this.y || this.y <this.dy+2)){
            this.x+=this.vx;
            this.y+=this.vy;
        }
    }

    draw(ctx){
        ctx.drawImage(this.img, 
            this.sx, this.sy, this.sw, this.sh,
            this.x,this.y, this.sw, this.sh);
    }

    moveTo(x,y){
        this.dx=x-this.x;
        this.dy=y-this.y;
        
        this.d = Math.sqrt(this.dx*this.dx+this.dy*this.dy)
        
        this.vx = this.dx/this.d;
        this.vy = this.dy/this.d;

        console.log(this.vx);
        console.log(this.vy);
    }

}