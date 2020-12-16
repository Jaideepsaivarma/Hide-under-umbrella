class U {
    constructor(x,y) {
      var options = {
        isStatic: true,
          
      }
      this.body = Bodies.circle(x,y,50,options);
     // this.color = (random(0,255),random(0,255),random(0,255));
      this.width = 100;
      World.add(world, this.body);
    }
   
  };
