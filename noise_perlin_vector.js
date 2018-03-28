var inc = 0.1; // nivel de random en noise.
var scl = 5;
var cols,rows;
var zoff = 0;

var fr;

function setup(){
  createCanvas(200,200);
  cols = floor( width / scl);
  rows = floor (height / scl);
  fr = createP('');
  background(0,255,0,0);
}

function draw(){

  //noiseDetail(2, 0.2);
  var yoff = 0
  for(var y = 0; y < rows; y++){
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      //en cada bloque se dibujará un vector con angulo.
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      xoff += inc;
      strokeWeight(0.1);
      stroke(map(noise(xoff),0,1,0,255),map(noise(yoff),0,1,0,255),map(noise(zoff),0,1,0,255),50);
      //push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl * 20, 0);
      //pop();
    }
    yoff += inc;

    zoff += 0.0001;  // velocidad de movimiento de los vectores.
  }
  fr.html(floor(frameRate()));
  //noLoop();
}
