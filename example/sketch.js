function setup() {
  createCanvas(640, 480);
  background(0,200,0);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(255);
    rect(mouseX, mouseY, 80, 80);
  }
}

// 4 arguments (x location, y location, width, height)
// x, y (0,0) is the top left corner of the canvs

// rect, ellipse, line, arc, point...

// stroke() sets the outline/border color
// fill() fills the inside of the shape with color