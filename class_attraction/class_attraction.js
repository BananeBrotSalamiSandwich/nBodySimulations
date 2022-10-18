function setup() {
  createCanvas(1000, 1000);
  p1 = new Particle(random(width), random(height), 6);
  p2 = new Particle(random(width), random(height), 6);
  p3 = new Particle(random(width), random(height), 6);
  p4 = new Particle(random(width), random(height), 6);
 

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
  
  update(otherParticle) {  //otherParticle ist der Körper welcher dieser anziehen soll
    let force = p5.Vector.sub(otherParticle.pos, this.pos);  //Berechnung der Distanz zwischen den Körpern (Und die Richtung)
    let distanceSq = constrain(force.magSq(), 100, 1000);  //quadrieren der Distanz und zwischen 100 und 1000 begrenzen
    let G = 4;  //Definieren der Gravitationskonstante
    let strength = (G * (this.mass * otherParticle.mass)) / distanceSq; //Implementieren der Gravitationskraftformel
    force.setMag(strength);  //Richtige skalierung der Kraft
    
    
    let f = p5.Vector.div(force, this.mass);  //Beschleunigung erhalten
    this.acc.add(f);
    
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);  //Position mit der Beschleunigung und Geschwindigkeit aktualisieren
    this.acc.set(0);
    
    
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r);  //Zeichnen des Körpers an der neuen Position
    
  } 
}
