let img;

function preload() {
  img = loadImage('moire_animation_cat.webp'); 
}
function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");

}

function draw() {
  background(220);

  image(img, 0, 0, width, height);
  drawMouseMask();
  mousePressed();
   textSize(50);
    text("slide mouse",200,height-100);
}

function drawMouseMask() {
 push();
  noStroke();
  translate(mouseX - 300, mouseY - 300); 
  for (let x = 0; x < width*3; x += 10) {
    if ((x / 30) % 2 == 0) {
      fill(mouseX-150,mouseX,mouseY, 180); 
    } else {
      fill(mouseX-150,mouseY-100,mouseX, 220);
    }
    rect(x, 0, 6, height*3);
  }
  pop();
}

function mousePressed() {
  fill(random(255), random(255), random(255));
  noStroke();
  ellipse(random(600), random(600), 50, 50);
  ellipse(random(600-mouseY), random(300), map(mouseX,0,600,0,100), 50);
  ellipse(random(600), random(600), 50, 50);
  ellipse(random(600), random(600), 50, 50);
}
