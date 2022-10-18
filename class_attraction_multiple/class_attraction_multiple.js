function setup() {
  createCanvas(1000, 1000);
  p1 = new Particle(random(width), random(height), 6);
  p2 = new Particle(random(width), random(height), 6);
  p3 = new Particle(random(width), random(height), 6);
 
 

}


function draw() {
  background(20, 20, 70);
  p1.updateCrank(p2);
  p2.updateCrank(p1);
  p3.updateCrank(p1);
  
  p1.updateCrank(p3);
  p2.updateCrank(p3);
  p3.updateCrank(p2);


  
  
  
}



class Particle {
  constructor(x, y, m, c, startPos) { // START POS
    this.pos = createVector(x, y);
    //this.vel = p5.Vector.random2D();
    this.vel = createVector(0, 0);
    this.vel.setMag(0.1);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 3.5;
    this.color = c;
  }
  
  updateCrank(otherParticle) {
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
    let explicitAcc = this.acc;
    this.acc.set(0);
    
    //Implicit
    
    let force2 = p5.Vector.sub(otherParticle.pos, posTemp);
    let distanceSq2 = constrain(force2.magSq(), 10, 1000);
    let strength2 = (G * (this.mass * otherParticle.mass)) / distanceSq2;
    force2.setMag(strength2);
    
    let f2 = p5.Vector.div(force2, this.mass);
    this.acc.add(f2);
    let implicitAcc = this.acc;
    this.acc.set(0);
    

    
    this.acc.add(0.5*explicitAcc + 0.5*implicitAcc);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0);
    
 
    
    stroke(25);
    strokeWeight(1);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r);
    
  } 
  
  updateRunge(otherParticle) {
    let velTemp = this.vel;
    let posTemp = this.pos;
    let force = p5.Vector.sub(otherParticle.pos, this.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 4;
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
    
    this.vel.add(1/6 * acc1 + 1/3 * acc2 + 1/3 * acc3 + 1/6 * acc4); //Runge 4th order
    this.pos.add(this.vel);
    this.acc.set(0);
    
    // draw
    
    stroke(25);
    strokeWeight(1);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r);
    
  } 
}
