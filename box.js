class Box{
    constructor(x, y,width, height,angle) {
      var options = {
          
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  