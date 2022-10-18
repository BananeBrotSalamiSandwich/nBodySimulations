let x1;
let y1;
let x2;
let y2;
let angle1;
let gravity;
let len;
let angleV1;
let angleA1;
let angle2;
let angleV2;
let angleA2;




function setup() {
  createCanvas(500, 500);
  angle = 0.8;
  gravity = 1;
  len = 150;
  angleV = 0;
  angleA = 0;
  

}


function draw() {
  background(50, 150, 50);
  translate(250, 100);
  
  angleA = -(sin(angle) * gravity) / len;
  angleV += angleA;
  angle += angleV;
  //angleV *= 0.995;
 
  x1 = len * sin(angle);
  y1 = len * cos(angle);
  
  line(0, 0, x1, y1);
  circle(x1, y1, 25);
  

}
