let img;
let canvas;

function preload() {
  img = loadImage('moire_animation_cat.webp');
}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
  drawMouseMask();

  textSize(50);
  text("slide mouse", 200, height - 100);
}

function drawMouseMask() {
  push();
  noStroke();
  translate(mouseX - 300, mouseY - 300);
  for (let x = 0; x < width * 3; x += 10) {
    if ((x / 30) % 2 == 0) fill(mouseX - 150, mouseX, mouseY, 180);
    else fill(mouseX - 150, mouseY - 100, mouseX, 220);
    rect(x, 0, 6, height * 3);
  }
  pop();
}

function mousePressed() {
  fill(random(255), random(255), random(255));
  noStroke();
  ellipse(random(600), random(600), 50, 50);
  ellipse(random(600 - mouseY), random(300), map(mouseX, 0, 600, 0, 100), 50);
  ellipse(random(600), random(600), 50, 50);
  ellipse(random(600), random(600), 50, 50);
}
