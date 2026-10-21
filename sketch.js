function setup() {
  createCanvas(windowWidth, 600);
  background(255, 45, 200);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
