function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-container");
  noLoop();
}

function draw() {
  background(0);

  drawSky();
  drawSun();
  drawSea();
  drawWaves();
  drawBuildings();
}

function drawSky() {
  noStroke();
  fill(135, 206, 235);
  rect(0, 0, width, height);
}

function drawSun() {
  noStroke();
  fill(255, 140, 0);
  ellipse(300, 90, 70, 70);

  push();
  blendMode(ADD);
  fill(255, 170, 80, 60);
  ellipse(300, 90, 110, 110);
  pop();
}

function drawSea() {
  noStroke();
  fill(10, 30, 120);
  rect(0, 260, width, 140);
}

function drawWaves() {
  stroke(160, 210, 255);
  strokeWeight(2);

  line(40, 290, 160, 290);
  line(200, 300, 360, 300);
  line(60, 320, 200, 320);
  line(230, 340, 380, 340);

  strokeWeight(1);
}

function drawBuildings() {
  noStroke();
  let baseY = 260;

  for (let x = 0; x < width; x += 25) {
    let h = random(40, 140);
    fill(20, 20, 30);
    rect(x, baseY - h, 20, h);

    fill(255, 220, 120, 160);
    rect(x + 6, baseY - h + 12, 3, 3);
    rect(x + 12, baseY - h + 24, 3, 3);
  }
}
