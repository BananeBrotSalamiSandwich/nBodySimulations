

function setup() {
  createCanvas(14000, 8000);
  /*p1 = new Particle(5450, 490, 6, (-0.3, -.4));
  p2 = new Particle(7300, 1900, 6, (-5000.4, 0));
  p3 = new Particle(6150, 1600, 6, (0.8, -.4));
  
  p21 = new Particle(5450, 490, 6, (-0.3, -.4));
  p22 = new Particle(7300, 1900, 6, (-5000.4, 0));
  p23 = new Particle(6160, 1600, 6, (0.8, -.4)); */
  /*p1 = new Particle(5400, 490, 6, (-0.3, -.4));
  p2 = new Particle(7300, 1900, 6, (-5000.4, 0));
  p3 = new Particle(4150, 1600, 6, (0.8, -.4));
  
  p21 = new Particle(5450, 490, 6, (-0.3, -.4));
  p22 = new Particle(7300, 1900, 6, (-5000.4, 0));
  p23 = new Particle(4160, 1600, 6, (0.8, -.4));*/
  p1 = new Particle(5400, 490, 6, (-0.3, -.4));
  p2 = new Particle(7300, 1900, 6, (5000.4, 0));
  p3 = new Particle(4150, 1600, 32, (0.8, -.4));
  p4 = new Particle(2150, 1600, 6, (0.8, .4));
  
  p21 = new Particle(5400, 485, 6, (-0.3, -.4));
  p22 = new Particle(7300, 1900, 6, (5000.4, 0));
  p23 = new Particle(4150, 1600, 32, (0.8, -.4));
  p24 = new Particle(2150, 1600, 6, (0.8, .4));

  
  
 
  

   
}


function draw() {
  
  
  
  
  background(20, 20, 70);
  p1.update(p2, (0, 255, 255));
  p2.update(p1, (0, 255, 255));
  p3.update(p1, (0, 255, 255));
  p4.update(p1, (0, 255, 255));
  
  
  p1.update(p3, (0, 255, 255));
  p2.update(p3, (0, 255, 255));
  p3.update(p2, (0, 255, 255));
  p4.update(p3, (0, 255, 255));
  
  p1.update(p4, (0, 255, 255));
  p2.update(p4, (0, 255, 255));
  p3.update(p4, (0, 255, 255));
  p4.update(p2, (0, 255, 255));
  
  
  p21.update(p2, (0, 0, 0));
  p22.update(p1, (0, 0, 0));
  p23.update(p1, (0, 0, 0));
  p24.update(p1, (0, 0, 0));
  
  
  p21.update(p3, (0, 0, 0));
  p22.update(p3, (0, 0, 0));
  p23.update(p2, (0, 0, 0));
  p24.update(p3, (0, 0, 0));
  
  p21.update(p4, (0, 0, 0));
  p22.update(p4, (0, 0, 0));
  p23.update(p4, (0, 0, 0));
  p24.update(p2, (0, 0, 0));

}



class Particle {                          //Erstellen einer Klasse für einen Körper (Partikel)
  constructor(x, y, m, startVel) {        //Eingabeparameter (Position, Masse, Startgeschwindigkeit)
    this.pos = createVector(x, y);        //Die Position als Vektor definieren
    this.vel = createVector(startVel);    //Die Startgeschwindigkeit wird zugeteilt
    this.acc = createVector(0, 0);        //Die Startbeschleunigung auf 0 setzen 
    this.mass = m;                        //Die Masse zuordnen
    this.r = sqrt(this.mass) * 6;         //Den Radius des Körpers festlegen
  }
  
  update(otherParticle, color) {
    let velTemp = this.vel;  //Temporäre Position und Geschwindigkeit wird zugeordnet (Runge-Kutta)
    let posTemp = this.pos;
    let force = p5.Vector.sub(otherParticle.pos, this.pos); //Richtungsvektor zwischen zwei Körpern
    let distanceSq = constrain(force.magSq(), 10, 1000);
    let G = .5;  //Die Gravitationskonstante wird definiert
    let strength = (G * (this.mass * otherParticle.mass)) / distanceSq;  //Berechnung der Kraft zwischen zwei Körpern
    force.setMag(strength);  //Die Kraft richtig skalieren
    
    // k1
    
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
    let acc1 = this.acc;
    
    velTemp.add(this.acc);
    posTemp.add(velTemp*0.5);
    this.acc.set(0);
    
    // k2
    
    let force2 = p5.Vector.sub(otherParticle.pos, posTemp);  //mit der neuen veltemp wird jetzt die Beschleunigung k2 Berechnet
    let distanceSq2 = constrain(force2.magSq(), 10, 1000);
    let strength2 = (G * (this.mass * otherParticle.mass)) / distanceSq2;
    force2.setMag(strength2);
    
    let f2 = p5.Vector.div(force2, this.mass);
    this.acc.add(f2);
    let acc2 = this.acc;  //acc2 = k1
    
    velTemp.add(this.acc);
    posTemp.add(velTemp*0.5);
    this.acc.set(0);
    
    // k3
    
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
    
    // k4
    
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
    
    // Endgültige Berechnung
    
    this.vel.add(1/6 * acc1 + 1/3 * acc2 + 1/3 * acc3 + 1/6 * acc4);
    this.pos.add(this.vel);
    this.acc.set(0);
    
    // draw
    
    //stroke(255);
    //strokeWeight(1);
    fill(color);
    ellipse(this.pos.x, this.pos.y, 100);
    
  } 
}
