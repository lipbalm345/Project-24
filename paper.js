class Paper{
    constructor(x, y, radius, options,) {
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, 30, {restitution: 0, isStatic:true});
        World.add(world, this.body);
      }
      display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      circle(30, 600, 30);
      pop();
    }
};