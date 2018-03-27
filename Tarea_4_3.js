var t;
var NUM_LINES;
var contador;
var cicle;
var input;
var output;
var mic;
var VELOCITY;


function setup(){
  createCanvas(600,600);
  background(20);
  t = 0;
  NUM_LINES = 100;
  VELOCITY = 0.1;
  randomSeed(5);
  contador = 0;
  cicle = 0;
  mic = new p5.AudioIn()
  mic.start();

  //noLoop();
}

function draw(){
  background(20);
  micLevel = mic.getLevel();
  t = drawLines(micLevel, t, 1);
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

function drawLines(micLevel, t, grosor){
  strokeWeight(grosor);
  translate(width / 2,height / 2);

  for(var i = 0; i < NUM_LINES; i++){
    var size = map(micLevel,0,1,1,50);

    drawPinkLine(i, t, size);
    drawBlueLine(i, t, size);
    rotate(HALF_PI);
    drawPinkLine(i, t, size);
    drawBlueLine(i, t, size);
}
  return t += VELOCITY;
  rotate(HALF_PI * t);
}

function drawPinkLine(i, t, size){
  stroke(200  * size, 150  * size, 360  * size);
  line(x1(t + i),y1(t + i),x2(t + i) * size,y2(t + i) * size);
}

function drawBlueLine(i, t, size){
  stroke(0,150,360 * size);
  line(x1((t + i) * -1 ),y1((t + i) * -1),x2((t + i) * -1) * size ,y2((t + i) * -1) * size);
}
