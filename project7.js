let charactor,startButton,pixelFont,meow,sleep,paw,cloud,moon,sun,meowS,shine,bling,bg,night,bcat;
let scene = 1;
let lightling;
let clouds = [];
let goal;

function preload() {
  bg = loadImage('bg1.png');
  night = loadImage('bnight.png');
   bcat = loadImage('bcat.png');
  charactor = loadImage('charactor.png');
  startButton = loadImage('startButton.png'); 
  pixelFont = loadFont("VT323-Regular.ttf");
  meow = loadImage('meowmeow.png');
  sleep = loadImage('sleep.png');
  paw = loadImage('paw.png');
  cloud = loadImage('Cloud.png');
  moon = loadImage('moon.png');
  sun = loadImage('sun.png');
  meowS = loadSound('meowS.mp3');
  shine = loadSound('shine.mp3');
  bling = loadSound('bling.mp3');
}

function setup() {
  // create the canvas - increased size to match image dimensions (600x400)
  canvas = createCanvas(600, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");
  lightling = new Lightling(100, height/2);

  for (let i = 0; i < 5; i++) {
    let x = random(200, width - 100);
    let y = random(50, height - 50);
    clouds.push(new Cloud(x, y, random(40, 80)));
  }

  goal = new Star(width - 100, height/2, 40);
}

function draw() {
  if (scene === 1 || scene === 3) {
    background(255, 182, 193);
  } else if (scene === 4) {
    background(60, 60, 120); //月亮界面
  } else {
    background(30);
  }

  switch(scene) {
    case 1:
      startScene();
      break;
    case 2:
      playScene();
      break;
    case 3:
      endScene();
      break;
    case 4:
      moonScene();
      break;
  }
}

function mousePressed() {
  if (scene === 1) {
    if (mouseX > startBtnArea.x &&
        mouseX < startBtnArea.x + startBtnArea.w &&
        mouseY > startBtnArea.y &&
        mouseY < startBtnArea.y + startBtnArea.h) {
    bling.play();
      scene = 2;
    }
  } if (scene === 3) { 
    scene = 1;
    resetGame();
    meowS.play();
  }
  if (scene === 4) {
    if (mouseX > pawArea.x &&
        mouseX < pawArea.x + pawArea.w &&
        mouseY > pawArea.y &&
        mouseY < pawArea.y + pawArea.h) {
       
      meowS.play();
      scene = 1;
      resetGame();
    }
}
}

function startScene() {
  image(bg, 0, 0, 600, 400);
  image(charactor,400,140,200,200)
  textFont(pixelFont);
  fill(252, 172, 184);
  textAlign(CENTER);
  textSize(35);
  text("✨ The Light Within ✨", width/2, height/2 - 40);
  textSize(20);
  text("Move your mouse to guide your lightling.", width/2 , height/2 + 110);
 // 按钮位置
  let btnX = width/2 - 100;
  let btnY = height/2 - 20;
  let btnW = 200;
  let btnH = 100;
  image(startButton, btnX, btnY, btnW, btnH);
  startBtnArea = { x: btnX, y: btnY, w: btnW, h: btnH };
}


function playScene() {
  goal.display();
  lightling.update(mouseX, mouseY);
  lightling.display();

  let allGlowing = true;

  for (let c of clouds) {
    c.display();
    let d = dist(lightling.x, lightling.y, c.x, c.y);
    if (d < 80) {
      c.glow();
    }
    if (!c.isGlowing) {
      allGlowing = false;
    }
  }

  let g = dist(lightling.x, lightling.y, goal.x, goal.y);
  if (g < 50) {
    if (allGlowing) {
      goal.glowUp();
      scene = 3; // 所有云都亮了，进入成功场景
    } else {
      scene = 4; // 没亮完云
    }
  }
    fill(255);
  textAlign(CENTER);
  textSize(16);

  if (!allGlowing) {
    text("Try to light up all the clouds before reaching the sun !", width / 2, height - 30);
  } else {
    text("All clouds are bright! Now go find the sun !", width / 2, height - 30);
  }
}

function endScene() {
  image(bcat, 0, 0, 600, 400);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("You Reached the Sun", width/2, height/2 -100);
  image(meow, width/2 - 40, height/2 - 80, 300, 150);     text("‘Meow~’ To Play Again", width/2, height -100); 
}  

function moonScene() {
  image(night, 0, 0, 600, 400);
  fill(255, 255, 200);
  textAlign(CENTER);
  textSize(24);
  text("Not all clouds are bright yet...", width/2, height/2 - 20);
  textSize(16);
  text("Press Paw to wakes it up", width/2, height/2 + 40);
  image(paw, 40, 100, 50, 50); 
  pawArea = { x: 40, y: 100, w: 50, h: 50 };
  image(sleep, width - 140, height - 180, 100, 140); 
  image(moon, width - 90 ,20 , 80 , 80);
}

function resetGame() {
  lightling = new Lightling(100, height/2);
  for (let c of clouds) {
    c.bright = 50;
    c.isGlowing = false;
  }
  goal.bright = 200;
}

class Lightling {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.trail = [];
  }

  update(tx, ty) {
    this.x = tx;
    this.y = ty; 
    this.trail.push({x: this.x, y: this.y});
    if (this.trail.length > 20) {
      this.trail.shift();
    }
  }

  display() {
    push();
    noStroke();
    for (let i = 0; i < this.trail.length; i++) {
      let t = this.trail[i];
      fill(255, 200, 220, i * 8);
      ellipse(t.x, t.y, 10);
    }
    fill(255);
   // ellipse(this.x, this.y, 20);
    image(charactor, this.x - 40, this.y - 40, 80, 80);
    pop();
  }
}

class Cloud {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.bright = 50;
    this.isGlowing = false;
  }

  display() {
    push();
    translate(this.x, this.y);

    if (this.isGlowing) {
      // 云被点亮, 显示图片
      imageMode(CENTER);
      image(cloud, 0, 0, this.size * 1.5, this.size * 1.2);
    } else {
      fill(this.bright);
      noStroke();
      ellipse(0, 0, this.size, this.size * 0.6);
      ellipse(20, 0, this.size * 0.8, this.size * 0.5);
      ellipse(-20, 0, this.size * 0.8, this.size * 0.5);
    }

    pop();
  }

  glow() {
    this.bright = 200;
    this.isGlowing = true;
  }
}

class Star {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.bright = 200;
  }

  display(){
    push();
    imageMode(CENTER);
    tint(255, this.bright);
    image(sun, this.x, this.y, this.size * 2, this.size * 2);
    pop();
  }

  glowUp(){
    this.bright += 10;
    if (this.bright > 255) {
      this.bright = 255;
    }
    shine.play();
  }
}
