let G;
let strength;
let pos1;
let m1;
let m2;
let x1;
let y1;
let v1;
let v0;
let acc;
let x2;
let y2;
let force;
let pos2;





function setup() {
  createCanvas(500, 500);
  x1 = 100;
  y1 = 250;
  //v1 = createVector(0, 0);
  v1 = p5.Vector.random2D();
  acc = createVector(0, 0);
  x2 = 250;
  y2 = 250;
  force = createVector(0, 0);
  m1 = 6;
  m2 = 5;
  G = 15;
  strength = 0;
  pos1 = createVector(x1, y1);
  pos2 = createVector(x2, y2); 
  //v0 = createVector(random(-3, 3), random(-3, 3));
  
  

}


function draw() {
  background (15, 15, 15);
  
  force = p5.Vector.sub(pos2, pos1);
  
  circle(pos1.x, pos1.y, 10);
  circle(pos2.x, pos2.y, 15);
  
  let distanceSq = constrain(force.magSq(), 25, 2500);
  
  strength = (G * m1 * m2) / distanceSq;
  
  force.setMag(strength);
  
  let f = p5.Vector.div(force, m1);
  
  acc.add(f);
  
  v1.add(acc);
  
  pos1.add(v1);
  acc.set(0, 0);
  
  

}
