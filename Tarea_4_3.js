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
var threshold = 0.5;
var inc = 0.5; // nivel de random en noise.
var scl = 7;
var cols,rows;
var zoff = 0;
var limit = 15;
var litle_factor = 0.1;


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
  //variables para pintura abstacta.
  cols = floor( width / scl);
  rows = floor (height / scl);
  //colorMode(HSB,100);
  //frameRate(20);
}

function draw(){
  //background(0);
  micLevel = mic.getLevel();


  if(sw > limit){
    drawAbstractPaint(rows,cols,inc,scl);
  }
  else{
    if(micLevel > threshold){
      sw ++;
      console.log(sw);
    }else{
      sw =0;
    }
    t = drawLines(micLevel, t, 0.5);
  }
  contador ++;

}

function drawLines(micLevel, t, grosor){
  background(0);
  strokeWeight(grosor);
  translate(width / 2,height / 2);

  if(micLevel > 0.12){
    go_crazy = true;
  }

  for(var i = 0; i < NUM_LINES; i++){
    //escala el valor del volumen del mic a una proporción de 1 a 5
    var size = map(micLevel,0.1,1,1,4.5);

    drawPinkLine(i, t, size);
    drawBlueLine(i, t, size);
    rotate(HALF_PI);
    drawPinkLine(i, t, size);
    drawBlueLine(i, t, size);
    rotate(HALF_PI);
    drawPinkLine(i, t, size * litle_factor);
    drawBlueLine(i, t, size * litle_factor);
    rotate(HALF_PI);
    drawPinkLine(i, t, size * litle_factor);
    drawBlueLine(i, t, size * litle_factor);
  }

  return t += VELOCITY;
  //
}

function drawPinkLine(i, t, size){
  stroke(200  * size, 150  * size, 360  * size);
  line(x1(t + i),y1(t + i),x2(t + i) * size,y2(t + i) * size);
}

function drawBlueLine(i, t, size){
  stroke(0, 150, 360 * size);
  line(x1((t + i) * -1 ),y1((t + i) * -1),x2((t + i) * -1) * size ,y2((t + i) * -1) * size);
}
function drawAbstractPaint(){

  var yoff = 0
  for(var y = 0; y < rows; y++){
    var coff = 0;
    for (var x = 0; x < cols; x++) {
      //en cada bloque se dibujará un vector con angulo.
      //var index = (x + y * width) * 4;
      var angle = noise(coff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      xoff += inc;
      strokeWeight(0.1);
      stroke(map(noise(coff),0,1,0,255),map(noise(yoff),0,1,0,255),map(noise(zoff),0,1,0,255));
      //stroke(map(random(xoff),0,1,0,255),map(random(yoff),0,1,0,255),map(random(zoff),0,1,0,255),random(50,100));
      //push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl * 20, 0);
      //pop();
    }
    yoff += inc;

    zoff += 0.001;  // velocidad de movimiento de los vectores.
    //t = drawLines(micLevel, t, 0.5);
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
