let x1;
let y1;
let x2;
let y2;
let a1;
let g;
let r1;
let r2;
let a1_v;
let a1_a;
let a2;
let a2_v;
let a2_1;
let m1;
let m2;




function setup() {
  createCanvas(500, 500);
  a1 = PI / 2;
  a2 = 0.5;
  g = 1;
  r1 = 150;
  r2 = 150;
  a1_v = 0;
  a1_a = 0;
  a2_v = 0;
  a2_a = 0;
  m1 = 1;
  m2 = 1;
  

}


function draw() {
  background(50, 150, 50);
  translate(250, 100);
  
  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = a1_v * a1_v * r1 * (m1 + m2);
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a2_a = (num1 * (num2 + num3 + num4)) / den;
  
  //angleA1 = (-gravity*(2*mass1 + mass2)*sin(angle1) - mass2*gravity*sin(angle1 - 2*angle2) - 2*sin(angle1-angle2)*mass2*(angleV2*angleV2*len2+angleV1*angleV1*len1*cos(angle1-angle2))) / (len1*(2*mass1+mass2 - mass2*cos(2*angle1-2*angle2))); 
  //angleA1 = 0.001;
  a1_v += a1_a;
  a1 += a1_v;
  
  //angleA2 = (2*sin(angle1-angle2)*(angleV1*angleV1*len1*(mass1+mass2)+gravity*(mass1+mass2)*cos(angle1)+angleV2*angleV2*len2*mass2*cos(angle1-angle2))) / (len2*(2*mass1+mass2-mass2*cos(2*angle1-2*angle2)));
  //angleA2 = 0.01;
  a2_v += a2_a;
  a2 += a2_v;

  x1 = r1 * sin(a1);
  y1 = r1 * cos(a1);
  
  x2 = x1 + r2 * sin(a2);
  y2 = y1 + r2 * cos(a2);
  
  line(0, 0, x1, y1);
  line(x1, y1, x2, y2);
  circle(x1, y1, 10);
  circle(x2, y2, 10);
  

}
