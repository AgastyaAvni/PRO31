class Partical {
    constructor(x, y, r) {
      var options = {
         
          'restitution':0,
         
          
      }
      
      this.r=r;

      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(random(0,255),random(0,255),random(0,255) ;
      World.add(world,this.body)

      
      World.add(world, this.body);
    }
    display(){

     push();

     translate(pos.x,pos.y)
    rotate(angale);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    elipse(0,0,this.r,this.r);
    
    pop();
    }
  };