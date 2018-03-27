var t;
var NUM_LINES;
var contador;
var cicle;
var input;
var output;


function setup(){
  createCanvas(windowWidth,windowHeight);
  background(20);
  t = 0;
  NUM_LINES = 100;
  randomSeed(5);
  contador = 0;
  cicle = 0;

  //noLoop();
}

function draw(){
  background(20);

  strokeWeight(0.5);
  translate(width / 2,height / 2);
  fill(150,0,0);
  //console.log(frameCount);

  for(var i = 0; i < NUM_LINES; i++){
    //fill(random(150, 190));
    var size = 1;
    stroke(255,150,360);
    line(x1(t + i),y1(t + i),x2(t + i) * size,y2(t + i) * size);
    stroke(0,150,360);
    line(x1((t + i) * -1 ),y1((t + i) * -1),x2((t + i) * -1) * size ,y2((t + i) * -1) * size);
    if (cicle % 2 == 0 && cicle > 0){
      rotate(HALF_PI);
      stroke(255,150,360);
      line(x1(t + i),y1(t + i),x2(t + i) * size,y2(t + i) * size);
      stroke(0,150,360);
      line(x1((t + i) * -1 ),y1((t + i) * -1),x2((t + i) * -1) * size,y2((t + i) * -1) * size);
    }

  }

  if (contador > 200){
    t += 0.1; // velocidad del movimiento
  }
  if (contador <= 200){
    t += 0.5;
  }
  if (contador > 300){
    t += 0.12;
  }
  if (contador > 350){
    t += 0.15;
  }
  if (contador > 400){
    t += 0.17;
  }
  if (contador > 450){
    t += 0.19;
  }
  if(contador == 500){
    contador = 0
    cicle ++;
  }else {
    contador ++;
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

WebMidi.enable(function (err) {

  if (err) console.log("An error occurred", err);

  WebMidi.inputs[0].addListener('pitchbend', "all", function(e) {
    console.log("Pitch value: " + e.value);
  });


});
