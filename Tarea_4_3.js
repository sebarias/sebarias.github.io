var t;
var NUM_LINES;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(20);
  t = 0;
  NUM_LINES = 50;
  randomSeed(5);
}

function draw(){
  background(20);

  strokeWeight(0.5);
  translate(width / 2,height / 2);
  fill(150,0,0);
  console.log(frameCount);

  for(var i = 0; i < NUM_LINES; i++){
    //fill(random(150, 190));
    stroke(255,150,360);
    line(x1(t + i),y1(t + i),x2(t + i),y2(t + i));
    stroke(0,150,360);
    line(x1((t + i) * -1 ),y1((t + i) * -1),x2((t + i) * -1),y2((t + i) * -1));
  }
  if (frameCount > 200){
    t += 0.1; // velocidad del movimiento
  }
  if (frameCount <= 200){
    t += 0.5;
  }
  if (frameCount > 300){
    t += 0.12;
  }
  if (frameCount > 350){
    t += 0.15;
  }
  if (frameCount > 400){
    t += 0.17;
  }
  if (frameCount > 450){
    t += 0.19;
  }



}

function x1(t){
  return sin(t /10) * 100 + sin(t / 5) * 20;
}

function y1(t){
  return cos(-t / 10) * 10 + sin(t / 5) * 50;
}

function x2(t){
  //return sin(t / 10) * 200  + sin(t)* 2;
  return sin(t / 10) * 200  + sin(t)* 20;
}

function y2(t){
  return -cos(t / 20) * 200 + cos(t / 12) * 20;
}
