var a = 0;
var b = 0;


function setup() {
  createCanvas(600, 400);
}


function draw() {
  a = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(b);
  fill(255, 0, 0);
  strokeWeight(4);
  ellipse(mouseX, mouseY, 20, 20, 255);
}