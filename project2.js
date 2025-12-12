function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");
}

function draw() {
  drawSky();
  drawMountains();
  drawBuidings();
  drawWater();
}

function drawSky() {
  for (let y = 0; y < height/2; y++) {
    let inter = map(y, 0, height/2, 0, 1);
    let c = lerpColor(color(20,40,90), color(240,180,80), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawMountains() {
  noStroke();
  fill(70,90,100); 
  beginShape();
  vertex(0, height/2 + 70); 
  for (let x = 0; x <= width; x += 20) {
    let y = height/2 + 20 - noise(x*0.01) * 100; 
    vertex(x, y);
  }
  vertex(width, height/2 + 70);
  endShape(CLOSE);
  
}

  function drawBuidings(){
    fill(0); 
  rect(50, 250, 40, 100);
  rect(120, 230, 50, 120);
  rect(200, 240, 60, 110);
  rect(300, 200, 70, 150);
  rect(400, 190, 80, 160); 

  // 右边两栋最高的大楼
  rect(600, 120, 80, 230);
  rect(720, 140, 90, 210);

  // 给大楼加黄色小灯点
  fill(255, 220, 100);
    for (let y = 100; y < 350; y += 30) {
    rect(610, y, 5, 5);
    rect(740, y, 5, 5);
  }}


function drawWater() {
  WATER_TOP = height / 2
  // 1) 先画整片深蓝水面（从 WATER_TOP 到画布底）
  noStroke();
  fill(10, 30, 90);
  rect(0, WATER_TOP, width, height - WATER_TOP);

  // 2) 叠一层很淡的竖向渐变（越往下越深），让水面层次更自然
  for (let y = WATER_TOP; y < height; y++) {
    let t = map(y, WATER_TOP, height, 0, 1);
    let c = lerpColor(color(10, 30, 90), color(5, 30, 40), t);
    stroke(c);
    line(0, y, width, y);
  }

  // 3) 轻微正弦波（透明浅蓝），全部限制在水面内部
  stroke(160, 200, 255, 80); // 低透明度
  noFill();
  let amp = 4;         // 波高（越小越自然）
  let period = 220;    // 波长
  for (let y = WATER_TOP + 22; y < height; y += 28) {
    beginShape();
    for (let x = 0; x <= width; x += 8) {
      let offset = sin((x / period + y * 0.004) * TWO_PI) * amp;
      vertex(x, y + offset);
    }
    endShape();
  }
}
