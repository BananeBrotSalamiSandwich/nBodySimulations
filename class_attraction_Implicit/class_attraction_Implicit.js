function setup() {
  createCanvas(1000, 1000);
  p1 = new Particle(random(width), random(height), 6);
  p2 = new Particle(random(width), random(height), 6);
  p3 = new Particle(random(width), random(height), 6);
  p4 = new Particle(random(width), random(height), 6);
 

}


function draw() {
  background(20, 20, 70);
  p1.update(p2);
  p2.update(p1);
  p3.update(p1);
  //p4.update(p1);
  
  p1.update(p3);
  p2.update(p3);
  p3.update(p2);
  //p4.update(p2);
  
  //p1.update(p4);
  //p2.update(p4);
  //p3.update(p4);
  //p4.update(p3);

  
  
  
}



class Particle {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.setMag(0.1);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }
  
  update(otherParticle) {
    let velTemp = this.vel;
    let posTemp = this.pos;
    let force = p5.Vector.sub(otherParticle.pos, this.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 4;
    let strength = (G * (this.mass * otherParticle.mass)) / distanceSq;
    force.setMag(strength);
    
    
    
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
    
    
    velTemp.add(this.acc);
    posTemp.add(velTemp);
    this.acc.set(0);
    
    //Implicit
    
    let force2 = p5.Vector.sub(otherParticle.pos, posTemp);
    let distanceSq2 = constrain(force2.magSq(), 10, 1000);
    let strength2 = (G * (this.mass * otherParticle.mass)) / distanceSq2;
    force2.setMag(strength2);
    
    let f2 = p5.Vector.div(force2, this.mass);
    this.acc.add(f2);
    
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0);
    
    
    
    
    
    
    
    
    stroke(255);
    strokeWeight(1);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r);
    
  } 
}
