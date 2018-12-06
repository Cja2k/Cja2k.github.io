function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
}

function draw() {
  randomChord();
}

function randomChord() {
  R = random(255);
	G = random(255);
	B = random(255);
	A = random(255);
  
  stroke(R, G, B, A);
  
  var angle1 = random(0, 2 * PI);
  var xpos1 = 200 + 200 * cos(angle1);
  var ypos1 = 200 + 200 * sin(angle1);

  var angle2 = random(0, 2 * PI);
  var xpos2 = 200 + 200 * cos(angle2);
  var ypos2 = 200 + 200 * sin(angle2);

  line(xpos1, ypos1, xpos2, ypos2);
}