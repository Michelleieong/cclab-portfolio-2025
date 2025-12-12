let snacks = [4, 1, 5, 0, 3, 6, 2]; 

let currentDay = -1;   
let revealTimer = 0;
let pulse = 0;        
let dir = 1; 

function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(12);
}

function draw() {
  background(230);

  drawTrunk();

  revealTimer++;
  if (revealTimer % 30 === 0 && currentDay < snacks.length - 1) {
    currentDay++;
  }
  
  pulse += dir * 0.5;      
  if (pulse > 3) {       
    pulse = 3;
    dir = -1;
  }
  if (pulse < -3) { 
    pulse = -3;
    dir = 1;
  }

  let gap = 60;
  for (let i = 0; i < snacks.length; i++) {
    let x = width/2;
    let y = 300 - 3*gap + i*gap;;

    if (i <= currentDay) {
      let n = snacks[i];
      let baseSize = map(n, 0, 6, 10, 50);

      let r=0, g=0, b=0;
      if (n === 0) { 
        r=80; g=180; b=80;
      } else if (n <= 2) { 
        r=255; g=117; b=156;
      } else if (n <= 4) { 
        r=255; g=253; b=117;
      } else {           
        r=117; g=216; b=255;
      }

      noStroke();
      fill(r, g, b, 220);

      let d = baseSize + pulse;

      if (n === 0) {
        stroke(80);    
        strokeWeight(0.5);
        ellipse(x-10, y, d+10, d);
        ellipse(x+10, y, d+10, d);
      } else {
        drawFlower(x, y, d, color(r, g, b));
      }

      noStroke();
      fill(20);
      text(n, x, y);
    }
  }

  fill(40);
  textSize(16);
  text("Snack Tree", width/2, 40);
  textSize(12);
  text("How many snakes I ate ?", width/2, 60);
}

function drawTrunk() {
  stroke(90, 60, 30);
  strokeWeight(15);
  line(width/2, height, width/2, 100);
}
function drawFlower(x, y, size, col) {
  push();                  
  translate(x, y);      
  fill(col);
  stroke(80);    
  strokeWeight(0.5);

  let petals = 5;    
  let angleStep = 360 / petals; 

  for (let i = 0; i < petals; i++) {
    push();
    rotate(i * angleStep);     
    ellipse(size / 2, 0, size * 0.5, size * 0.8);  
    pop();
  }

  fill(255, 203, 203);
  ellipse(0, 0, size * 0.6, size * 0.6);
  pop();
}
