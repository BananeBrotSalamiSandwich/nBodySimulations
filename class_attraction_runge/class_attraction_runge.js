function setup() {
  createCanvas(2000, 2000);
  p1 = new Particle(random(width)/3, random(height)/3, 6);
  p2 = new Particle(random(width)/3, random(height)/3, 6);
  p3 = new Particle(random(width)/3, random(height)/3, 6);
  p4 = new Particle(random(width)/3, random(height)/3, 6);
 

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
    this.r = sqrt(this.mass) * 6;
  }
  
  update(otherParticle) {
    let velTemp = this.vel;
    let posTemp = this.pos;
    let force = p5.Vector.sub(otherParticle.pos, this.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = .5;
    let strength = (G * (this.mass * otherParticle.mass)) / distanceSq;
    force.setMag(strength);
    
    // 1
    
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
    let acc1 = this.acc;
    
    velTemp.add(this.acc);
    posTemp.add(velTemp);
    this.acc.set(0);
    
    // 2
    
    let force2 = p5.Vector.sub(otherParticle.pos, posTemp);
    let distanceSq2 = constrain(force2.magSq(), 10, 1000);
    let strength2 = (G * (this.mass * otherParticle.mass)) / distanceSq2;
    force2.setMag(strength2);
    
    let f2 = p5.Vector.div(force2, this.mass);
    this.acc.add(f2);
    let acc2 = this.acc;
    
    velTemp.add(this.acc);
    posTemp.add(velTemp);
    this.acc.set(0);
    
    // 3
    
    let force3 = p5.Vector.sub(otherParticle.pos, posTemp);
    let distanceSq3 = constrain(force3.magSq(), 10, 1000);
    let strength3 = (G * (this.mass * otherParticle.mass)) / distanceSq3;
    force3.setMag(strength3);
    
    let f3 = p5.Vector.div(force3, this.mass);
    this.acc.add(f3);
    let acc3 = this.acc;
    
    velTemp.add(this.acc);
    posTemp.add(velTemp);
    this.acc.set(0);
    
    // 4
    
    let force4 = p5.Vector.sub(otherParticle.pos, posTemp);
    let distanceSq4 = constrain(force4.magSq(), 10, 1000);
    let strength4 = (G * (this.mass * otherParticle.mass)) / distanceSq4;
    force4.setMag(strength4);
    
    let f4 = p5.Vector.div(force4, this.mass);
    this.acc.add(f4);
    let acc4 = this.acc;
    
    velTemp.add(this.acc);
    posTemp.add(velTemp);
    //this.acc.set(0);
    
    // end
    
    this.vel.add(1/6 * acc1 + 1/3 * acc2 + 1/3 * acc3 + 1/6 * acc4);
    this.pos.add(this.vel);
    this.acc.set(0);
    
    // draw
    
    stroke(255);
    strokeWeight(1);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r);
    
  } 
}
