function setup() {
  createCanvas(1000, 1000, WEBGL);
  p1 = new Particle(random(width), random(height), 100, 6);
  p2 = new Particle(random(width), random(height), 100, 6);
  p3 = new Particle(random(width), random(height), 100, 6);
  p4 = new Particle(random(width), random(height), 100, 6);
 

}


function draw() {
  background(20, 20, 60);
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
  
  orbitControl();

  
  
  
}



class Particle {
  constructor(x, y, z, m) {
    this.pos = createVector(x, y, z);
    this.vel = p5.Vector.random3D();
    this.vel.setMag(0.1);
    this.acc = createVector(0, 0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }
  
  update(otherParticle) {
    let force = p5.Vector.sub(otherParticle.pos, this.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 4;
    let strength = (G * (this.mass * otherParticle.mass)) / distanceSq;
    force.setMag(strength);
    
    
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
    
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0);
    
    
    stroke(255);
    strokeWeight(20);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.pos.z);
    
  } 
}
