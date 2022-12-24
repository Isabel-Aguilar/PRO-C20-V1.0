class Ground {
    constructor(x,y,w,h)
    {
      var static ={
        isStatic: true
      };
      this.piso = Bodies.rectangle(x,y,w,h,static);
      
      this.x =x;
      this.y =y;
      this.w =w;
      this.h =h;
      World.add(world,this.piso);
      
    }

    show()
    {
      push();
      rectMode(CENTER); 
      stroke(255); fill(127);
      rect(this.x,this.y,this.w,this.h)
      pop();
    }
}