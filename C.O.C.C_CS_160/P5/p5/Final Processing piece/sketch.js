var bx;
var by;
var boxSize = 40;
var overBox = false;
var locked = false;
var lineR = (255)
var lineG = (255)
var lineB = (255)

function setup() {
  createCanvas(500, 500);
  background(200);
  fill(lineR, lineG, lineB)
  rect(5, 5, 100, 40);
}


function keyPressed() {
  if (key === 'q') {
    lineR = (255);
    lineG = (0);
    lineB = (0);
  } else if (key === 'w') {
    lineR = (0);
    lineG = (255);
    lineB = (0);
  } else if (key === 'e') {
    lineR = (0);
    lineG = (0);
    lineB = (255);
  } else if (key === 'a') {
    lineR = (255);
    lineG = (255);
    lineB = (0);
  } else if (key === 's') {
    lineR = (255);
    lineG = (0);
    lineB = (255);
  } else if (key === 'd') {
    lineR = (0);
    lineG = (255);
    lineB = (255);
  } else if (key === 'z') {
    lineR = (255);
    lineG = (255);
    lineB = (255);
  } else if (key === 'x') {
    lineR = (150);
    lineG = (150);
    lineB = (150);
  } else if (key === 'c') {
    lineR = (0);
    lineG = (0);
    lineB = (0);
  }
}

function draw() {
  fill(lineR, lineG, lineB)
  rect(5, 5, 100, 40);
  fill(100);
  rect(0, 0, 500, 50);
  strokeWeight(3);
  text("The text displays the current drawing color. To change the color press and of the q, w, e, a, s, d, z, x, c, keys. MMB (Middle Click) to clear the canvas.", 15, 20, 475)
  stroke(lineR, lineG, lineB);
  if (mouseY > 50) {
    if (mouseIsPressed === true) {
      if (mouseButton === LEFT) {
        line(mouseX, mouseY, pmouseX, pmouseY);
      }
    }
  }
}

function mousePressed() {
  if (mouseButton === CENTER) {
    clear();
    lineR = (255)
    lineG = (255)
    lineB = (255)
    setup();
  }
}