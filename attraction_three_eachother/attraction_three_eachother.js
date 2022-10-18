let G;
let strength;
let strength3;
let pos1;
let po3;
let m1;
let m2;
let m3;
let x1;
let y1;
let x3;
let y3;
let v1;
let v2;
let acc;
let acc2;
let acc3;
let acc_2;
let acc2_2;
let acc3_2;
let x2;
let y2;
let force;
let force3;
let pos2;
let v1_2;
let v1_3;
let force2;
let strength2;
let force_2;
let force2_2;
let force3_2;
let strength_2;
let strength2_2;
let strength3_2;






function setup() {
  createCanvas(1000, 1000);
  x1 = 400;
  y1 = 400;
  x3 = 300;
  y3 = 500;
  v1 = p5.Vector.random2D();
  v1_2 = p5.Vector.random2D();
  v1_3 = p5.Vector.random2D();
  acc = createVector(0, 0);
  acc2 = createVector(0, 0);
  acc3 = createVector(0, 0);
  acc_2 = createVector(0, 0);
  acc2_2 = createVector(0, 0);
  acc3_2 = createVector(0, 0);
  x2 = 600;
  y2 = 600;
  force = createVector(0, 0);
  force2 = createVector(0, 0);
  force3 = createVector(0, 0);
  force_2 = createVector(0, 0);
  force2_2 = createVector(0, 0);
  force3_2 = createVector(0, 0);
  m1 = 6;
  m2 = 6;
  m3 = 6;
  G = 7;
  strength = 0;
  strength2 = 0;
  strength3 = 0;
  strength_2 = 0;
  strength2_2 = 0;
  strength3_2 = 0;
  pos1 = createVector(x1, y1);
  pos2 = createVector(x2, y2); 
  pos3 = createVector(x3, y3); 

  
  v1.setMag(1);
  v1_2.setMag(1);
  v1_3.setMag(1);
  
  

}


function draw() {
  background (15, 15, 15);
  
  force = p5.Vector.sub(pos2, pos1);
  force_2 = p5.Vector.sub(pos3, pos1);
  force2 = p5.Vector.sub(pos1, pos2);
  force2_2 = p5.Vector.sub(pos3, pos2);
  force3 = p5.Vector.sub(pos1, pos3);
  force3_2 = p5.Vector.sub(pos2, pos3);
  
  circle(pos1.x, pos1.y, 10);
  circle(pos2.x, pos2.y, 10);
  circle(pos3.x, pos3.y, 10);
  
  let distanceSq = constrain(force.magSq(), 25, 2500);
  let distanceSq_2 = constrain(force_2.magSq(), 25, 2500);
  let distanceSq2 = constrain(force2.magSq(), 25, 2500);
  let distanceSq2_2 = constrain(force2_2.magSq(), 25, 2500);
  let distanceSq3 = constrain(force3.magSq(), 25, 2500);
  let distanceSq3_2 = constrain(force3_2.magSq(), 25, 2500);
  
  strength = (G * m1 * m2) / distanceSq;
  strength_2 = (G * m1 * m3) / distanceSq_2;
  strength2 = (G * m1 * m2) / distanceSq2;
  strength2_2 = (G * m3 * m2) / distanceSq2_2;
  strength3 = (G * m3 * m2) / distanceSq3;
  strength3_2 = (G * m1 * m3) / distanceSq3_2;
  
  force.setMag(strength);
  force_2.setMag(strength_2);
  force2.setMag(strength2);
  force2_2.setMag(strength2_2);
  force3.setMag(strength3);
  force3_2.setMag(strength3_2);
  
  
  let f = p5.Vector.div(force, m1);
  let f_2 = p5.Vector.div(force_2, m1);
  let f2 = p5.Vector.div(force2, m2);
  let f2_2 = p5.Vector.div(force2_2, m2);
  let f3 = p5.Vector.div(force3, m3);
  let f3_2 = p5.Vector.div(force3_2, m3);
  
  acc.add(f);
  acc_2.add(f_2);
  acc2.add(f2);
  acc2_2.add(f2_2);
  acc3.add(f3);
  acc3_2.add(f3_2);
  
  v1.add(acc);
  v1.add(acc_2);
  v1_2.add(acc2);
  v1_2.add(acc2_2);
  v1_3.add(acc3);
  v1_3.add(acc3_2);
  
  pos1.add(v1);
  pos2.add(v1_2);
  pos3.add(v1_3);
  
  acc.set(0, 0);
  acc_2.set(0, 0);
  acc2.set(0, 0);
  acc2_2.set(0, 0);
  acc3.set(0, 0);
  acc3_2.set(0, 0);
  
  
  

}
