var t;
var NUM_LINES;
var contador;
var cicle;
var input;
var output;
var mic;
var VELOCITY;
var sw;
var xoff = 0;

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
  fft = new p5.FFT(); //requerido para el análisis de la frecuencia
  fft.setInput(mic);
  //noLoop();
  sw = 0;
}

function draw(){
  background(20);
  micLevel = mic.getLevel();
  if(micLevel > 0.7 || sw == 1){
    sw = 1;
    xoff = drawCircles(micLevel, xoff);
  }else{
    t = drawLines(micLevel, t, 1);
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

function drawLines(micLevel, t, grosor){
  strokeWeight(grosor);
  translate(width / 2,height / 2);

  for(var i = 0; i < NUM_LINES; i++){
    //escala el valor del volumen del mic a una proporción de 1 a 5
    var size = map(micLevel,0.1,1,1,5);

    drawPinkLine(i, t, size);
    drawBlueLine(i, t, size);
    rotate(HALF_PI);
    drawPinkLine(i, t, size);
    drawBlueLine(i, t, size);
}
  return t += VELOCITY;
  //rotate(HALF_PI * t);
}

function drawPinkLine(i, t, size){
  stroke(200  * size, 150  * size, 360  * size);
  line(x1(t + i),y1(t + i),x2(t + i) * size,y2(t + i) * size);
}

function drawBlueLine(i, t, size){
  stroke(0,150,360 * size);
  line(x1((t + i) * -1 ),y1((t + i) * -1),x2((t + i) * -1) * size ,y2((t + i) * -1) * size);
}

//dibujo circules
function drawCircles(micLevel, xoff){
    var x = map(noise(xoff),0,1,0,width);
    var y = map(noise(micLevel),0,1,0,height);
    fill(255);
    ellipse(x, y, 100, 100);
    //velocity of movement circle
    return xoff += 0.01;
}
/*
  Capitulo Uno
  - Grita Lo mas fuerte que puedas, sólo así abriras el portal.
*/
function chapterOne(){
  var titulo = "Capitulo Uno";
}
