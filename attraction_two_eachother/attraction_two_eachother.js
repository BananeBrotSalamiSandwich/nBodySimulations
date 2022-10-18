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
let acc2;
let x2;
let y2;
let force;
let pos2;
let v1_2;
let force2;
let strength2;





function setup() {
  createCanvas(1000, 1000);
  x1 = 400;
  y1 = 400;
  //v1 = createVector(0, 0);
  v1 = p5.Vector.random2D();
  v1_2 = p5.Vector.random2D();
  acc = createVector(0, 0);
  acc2 = createVector(0, 0);
  x2 = 600;
  y2 = 600;
  force = createVector(0, 0);
  force2 = createVector(0, 0);
  m1 = 3;
  m2 = 6;
  G = 7;
  strength = 0;
  strength2 = 0;
  pos1 = createVector(x1, y1);
  pos2 = createVector(x2, y2); 
  //v0 = createVector(random(-3, 3), random(-3, 3));
  
  v1.setMag(1);
  v1_2.setMag(1);
  
  

}


function draw() {
  background (15, 15, 15);
  
  force = p5.Vector.sub(pos2, pos1);
  force2 = p5.Vector.sub(pos1, pos2);
  
  circle(pos1.x, pos1.y, 10);
  circle(pos2.x, pos2.y, 15);
  
  let distanceSq = constrain(force.magSq(), 25, 2500);
  let distanceSq2 = constrain(force.magSq(), 25, 2500);
  
  strength = (G * m1 * m2) / distanceSq;
  strength2 = (G * m1 * m2) / distanceSq;
  
  force.setMag(strength);
  force2.setMag(strength2);
  
  let f = p5.Vector.div(force, m1);
  let f2 = p5.Vector.div(force2, m2);
  
  acc.add(f);
  acc2.add(f2);
  
  v1.add(acc);
  v1_2.add(acc2);
  
  pos1.add(v1);
  pos2.add(v1_2);
  
  acc.set(0, 0);
  acc2.set(0, 0);
  
  

}
