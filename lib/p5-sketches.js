export function createProject1Sketch() {
  return (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.noLoop();
    };

    p.draw = () => {
      p.background(0);
      drawSky();
      drawSun();
      drawSea();
      drawWaves();
      drawBuildings();
    };

    function drawSky() {
      p.noStroke();
      p.fill(135, 206, 235);
      p.rect(0, 0, p.width, p.height);
    }

    function drawSun() {
      p.noStroke();
      p.fill(255, 140, 0);
      p.ellipse(300, 90, 70, 70);

      p.push();
      p.blendMode(p.ADD);
      p.fill(255, 170, 80, 60);
      p.ellipse(300, 90, 110, 110);
      p.pop();
    }

    function drawSea() {
      p.noStroke();
      p.fill(10, 30, 120);
      p.rect(0, 260, p.width, 140);
    }

    function drawWaves() {
      p.stroke(160, 210, 255);
      p.strokeWeight(2);
      p.line(40, 290, 160, 290);
      p.line(200, 300, 360, 300);
      p.line(60, 320, 200, 320);
      p.line(230, 340, 380, 340);
      p.strokeWeight(1);
    }

    function drawBuildings() {
      p.noStroke();
      const baseY = 260;

      for (let x = 0; x < p.width; x += 25) {
        const h = p.random(40, 140);
        p.fill(20, 20, 30);
        p.rect(x, baseY - h, 20, h);

        p.fill(255, 220, 120, 160);
        p.rect(x + 6, baseY - h + 12, 3, 3);
        p.rect(x + 12, baseY - h + 24, 3, 3);
      }
    }
  };
}

export function createProject3Sketch() {
  return (p) => {
    p.setup = () => {
      p.createCanvas(600, 600);
      p.angleMode(p.DEGREES);
    };

    p.draw = () => {
      p.background(225);

      const nyTime = (p.second() + 0) % 60;
      const parisTime = (p.second() + 6) % 60;
      const tokyoTime = (p.second() + 13) % 60;

      p.translate(p.width / 2, p.height / 2);
      p.fill(255);
      p.stroke(0);
      p.strokeWeight(3);
      p.ellipse(0, 0, 400, 400);

      p.textFont("Times New Roman");
      p.textAlign(p.CENTER);
      p.textSize(40);
      p.noStroke();
      p.text("NY Paris Tokyo", 0, 250);

      drawArcHand(tokyoTime, 60, p.color(0, 0, 250, 100), 360);
      drawArcHand(parisTime, 60, p.color(255, 255, 0, 100), 380);
      drawArcHand(nyTime, 60, p.color(250, 0, 0, 100), 400);
    };

    function drawArcHand(time, end, colorValue, diameter) {
      p.noStroke();
      p.fill(colorValue);
      const angleNow = p.map(time, 0, end, 0, 360);
      p.arc(0, 0, diameter, diameter, -90, angleNow - 90, p.PIE);
    }
  };
}

export function createProject4Sketch() {
  return (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(225);
      drawHead(p.width / 2, 100);
      drawBody();
      drawBottom();
      p.stroke(0);
      p.noLoop();
    };

    function drawHead(x, y) {
      p.push();
      p.translate(x, y);
      p.fill(255, 247, 204);
      p.noStroke();
      p.ellipse(-60, -20, 100, 100);
      p.ellipse(60, -20, 100, 100);
      p.ellipse(0, 30, 130, 130);

      p.fill(255, 200, 51);
      p.ellipse(0, 20, 60, 60);
      p.fill(255, 80, 51);
      p.ellipse(0, 20, 20, 20);

      p.stroke(250, 220, 180);
      p.fill(255);
      p.line(-65, 30, -65, 80);
      p.ellipse(-65, 80, 20, 30);
      p.line(65, 30, 65, 80);
      p.ellipse(65, 80, 20, 30);
      p.pop();
    }

    function drawBody() {
      const x = p.width / 2;
      const y = 200;
      p.push();
      p.noStroke();
      p.fill(73, 112, 100);
      p.quad(x - 100, y + 200, x + 100, y + 200, x + 40, y + 80, x - 40, y + 100);
      p.quad(x - 70, y, x + 80, y, x + 40, y + 80, x - 40, y + 100);
      p.quad(x + 80, y, x + 95, y, x + 125, y + 200, x + 110, y + 200);
      p.quad(x - 70, y, x - 85, y, x - 105, y + 180, x - 95, y + 190);
      p.ellipse(x - 100, y + 185, 15, 20);
      p.fill(31, 64, 51);
      p.quad(x - 100, y + 200, x + 100, y + 200, x + 90, y + 180, x - 80, y + 170);
      p.triangle(x - 70, y, x, y + 20, x - 58, y + 40);
      p.triangle(x, y + 20, x + 80, y, x + 57, y + 45);
      p.ellipse(x + 40, y + 25, 45, 28);
      p.ellipse(x - 40, y + 23, 48, 29);
      p.pop();
      p.line(x + 73, y + 13, x, y + 20);
      p.line(x - 65, y + 13, x, y + 20);
      p.line(x - 60, y + 29, x, y + 20);
      p.line(x + 65, y + 29, x, y + 20);
      p.line(x + 15, y + 119, x + 25, y + 55);
      p.line(x - 15, y + 119, x - 25, y + 55);
    }

    function drawBottom() {
      const x = p.width / 2;
      const y = 400;
      p.push();
      p.translate(x, y);
      p.fill(152, 158, 154);
      p.quad(100, 0, -100, 0, -60, 30, 60, 30);
      p.quad(110, 0, 125, 0, 150, 35, 120, 30);
      p.quad(-100, 0, -120, 0, -150, 35, -120, 30);
      p.quad(150, 35, 120, 30, 130, 60, 170, 60);
      p.quad(-150, 35, -120, 30, -150, 80, -170, 60);
      p.triangle(-120, 30, -110, 60, -130, 70);
      p.quad(130, 60, 170, 60, 140, 80, 115, 70);
      p.quad(120, 30, 110, 40, 110, 50, 100, 35);
      p.line(140, 60, 125, 74);
      p.line(160, 60, 135, 78);
      p.line(-140, 34, -165, 65);
      p.ellipse(-65, 43, 25, 30);
      p.ellipse(65, 43, 25, 30);
      p.quad(-75, 58, -60, 60, -75, 78, -85, 80);
      p.quad(75, 58, 60, 60, 75, 78, 85, 80);
      p.ellipse(-75, 93, 25, 30);
      p.ellipse(75, 93, 25, 30);

      p.fill(0);
      p.ellipse(-75, 112, 45, 10);
      p.ellipse(75, 112, 45, 10);
      p.fill(201, 2, 10);
      p.quad(-100, 115, -55, 115, -60, 175, -100, 175);
      p.quad(100, 115, 55, 115, 60, 175, 100, 175);
      p.fill(255);
      p.quad(-60, 200, -90, 200, -90, 180, -60, 180);
      p.quad(60, 200, 90, 200, 90, 180, 60, 180);
      p.fill(201, 2, 10);
      p.quad(60, 175, 100, 175, 130, 195, 60, 190);
      p.quad(-60, 175, -100, 175, -130, 195, -60, 190);
      p.ellipse(125, 192, 30, 10);
      p.ellipse(-125, 192, 30, 10);

      p.fill(255);
      for (let i = 130; i < 180; i += 10) {
        p.ellipse(-68, i, 5, 5);
        p.ellipse(-88, i, 5, 5);
        p.ellipse(68, i, 5, 5);
        p.ellipse(88, i, 5, 5);
        p.stroke(0);
        p.line(-65, i, -85, i - 10);
        p.line(-85, i, -65, i - 10);
        p.line(65, i, 85, i - 10);
        p.line(85, i, 65, i - 10);
      }
      p.ellipse(-130, 190, 10, 5);
      p.ellipse(130, 190, 10, 5);
      p.pop();
    }
  };
}

export function createProject5Sketch() {
  return (p) => {
    let img;

    p.preload = () => {
      img = p.loadImage("/moire_animation_cat.webp");
    };

    p.setup = () => {
      p.createCanvas(600, 600);
    };

    p.draw = () => {
      p.background(220);
      p.image(img, 0, 0, p.width, p.height);
      drawMouseMask();
      p.textSize(50);
      p.text("slide mouse", 200, p.height - 100);
    };

    p.mousePressed = () => {
      p.fill(p.random(255), p.random(255), p.random(255));
      p.noStroke();
      p.ellipse(p.random(600), p.random(600), 50, 50);
      p.ellipse(
        p.random(600 - p.mouseY),
        p.random(300),
        p.map(p.mouseX, 0, 600, 0, 100),
        50,
      );
      p.ellipse(p.random(600), p.random(600), 50, 50);
      p.ellipse(p.random(600), p.random(600), 50, 50);
    };

    function drawMouseMask() {
      p.push();
      p.noStroke();
      p.translate(p.mouseX - 300, p.mouseY - 300);
      for (let x = 0; x < p.width * 3; x += 10) {
        if ((x / 30) % 2 === 0) {
          p.fill(p.mouseX - 150, p.mouseX, p.mouseY, 180);
        } else {
          p.fill(p.mouseX - 150, p.mouseY - 100, p.mouseX, 220);
        }
        p.rect(x, 0, 6, p.height * 3);
      }
      p.pop();
    }
  };
}

export function createProject6Sketch() {
  return (p) => {
    const snacks = [4, 1, 5, 0, 3, 6, 2];
    let currentDay = -1;
    let revealTimer = 0;
    let pulse = 0;
    let dir = 1;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.angleMode(p.DEGREES);
      p.textAlign(p.CENTER);
      p.textSize(12);
    };

    p.draw = () => {
      p.background(230);
      drawTrunk();

      revealTimer += 1;
      if (revealTimer % 30 === 0 && currentDay < snacks.length - 1) {
        currentDay += 1;
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

      const gap = 60;
      for (let i = 0; i < snacks.length; i += 1) {
        const x = p.width / 2;
        const y = 300 - 3 * gap + i * gap;

        if (i <= currentDay) {
          const n = snacks[i];
          const baseSize = p.map(n, 0, 6, 10, 50);

          let r = 0;
          let g = 0;
          let b = 0;

          if (n === 0) {
            r = 80;
            g = 180;
            b = 80;
          } else if (n <= 2) {
            r = 255;
            g = 117;
            b = 156;
          } else if (n <= 4) {
            r = 255;
            g = 253;
            b = 117;
          } else {
            r = 117;
            g = 216;
            b = 255;
          }

          p.noStroke();
          p.fill(r, g, b, 220);
          const d = baseSize + pulse;

          if (n === 0) {
            p.stroke(80);
            p.strokeWeight(0.5);
            p.ellipse(x - 10, y, d + 10, d);
            p.ellipse(x + 10, y, d + 10, d);
          } else {
            drawFlower(x, y, d, p.color(r, g, b));
          }

          p.noStroke();
          p.fill(20);
          p.text(n, x, y);
        }
      }

      p.fill(40);
      p.textSize(16);
      p.text("Snack Tree", p.width / 2, 40);
      p.textSize(12);
      p.text("How many snakes I ate ?", p.width / 2, 60);
    };

    function drawTrunk() {
      p.stroke(90, 60, 30);
      p.strokeWeight(15);
      p.line(p.width / 2, p.height, p.width / 2, 100);
    }

    function drawFlower(x, y, size, colorValue) {
      p.push();
      p.translate(x, y);
      p.fill(colorValue);
      p.stroke(80);
      p.strokeWeight(0.5);

      const petals = 5;
      const angleStep = 360 / petals;

      for (let i = 0; i < petals; i += 1) {
        p.push();
        p.rotate(i * angleStep);
        p.ellipse(size / 2, 0, size * 0.5, size * 0.8);
        p.pop();
      }

      p.fill(255, 203, 203);
      p.ellipse(0, 0, size * 0.6, size * 0.6);
      p.pop();
    }
  };
}

export function createProject7Sketch() {
  return (p) => {
    let charactor;
    let startButton;
    let pixelFont;
    let meow;
    let sleep;
    let paw;
    let cloud;
    let moon;
    let sun;
    let meowS;
    let shine;
    let bling;
    let bg;
    let night;
    let bcat;
    let scene = 1;
    let lightling;
    let clouds = [];
    let goal;
    let startBtnArea = { x: 0, y: 0, w: 0, h: 0 };
    let pawArea = { x: 0, y: 0, w: 0, h: 0 };

    p.preload = () => {
      bg = p.loadImage("/bg1.png");
      night = p.loadImage("/bnight.png");
      bcat = p.loadImage("/bcat.png");
      charactor = p.loadImage("/charactor.png");
      startButton = p.loadImage("/startButton.png");
      pixelFont = p.loadFont("/VT323-Regular.ttf");
      meow = p.loadImage("/meowmeow.png");
      sleep = p.loadImage("/sleep.png");
      paw = p.loadImage("/paw.png");
      cloud = p.loadImage("/Cloud.png");
      moon = p.loadImage("/moon.png");
      sun = p.loadImage("/sun.png");
      meowS = p.loadSound("/meowS.mp3");
      shine = p.loadSound("/shine.mp3");
      bling = p.loadSound("/bling.mp3");
    };

    p.setup = () => {
      p.createCanvas(600, 400);
      lightling = new Lightling(100, p.height / 2);

      for (let i = 0; i < 5; i += 1) {
        const x = p.random(200, p.width - 100);
        const y = p.random(50, p.height - 50);
        clouds.push(new Cloud(x, y, p.random(40, 80)));
      }

      goal = new Star(p.width - 100, p.height / 2, 40);
    };

    p.draw = () => {
      if (scene === 1 || scene === 3) {
        p.background(255, 182, 193);
      } else if (scene === 4) {
        p.background(60, 60, 120);
      } else {
        p.background(30);
      }

      switch (scene) {
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
        default:
          break;
      }
    };

    p.mousePressed = () => {
      if (
        scene === 1 &&
        p.mouseX > startBtnArea.x &&
        p.mouseX < startBtnArea.x + startBtnArea.w &&
        p.mouseY > startBtnArea.y &&
        p.mouseY < startBtnArea.y + startBtnArea.h
      ) {
        bling.play();
        scene = 2;
      }

      if (scene === 3) {
        scene = 1;
        resetGame();
        meowS.play();
      }

      if (
        scene === 4 &&
        p.mouseX > pawArea.x &&
        p.mouseX < pawArea.x + pawArea.w &&
        p.mouseY > pawArea.y &&
        p.mouseY < pawArea.y + pawArea.h
      ) {
        meowS.play();
        scene = 1;
        resetGame();
      }
    };

    function startScene() {
      p.image(bg, 0, 0, 600, 400);
      p.image(charactor, 400, 140, 200, 200);
      p.textFont(pixelFont);
      p.fill(252, 172, 184);
      p.textAlign(p.CENTER);
      p.textSize(35);
      p.text("✨ The Light Within ✨", p.width / 2, p.height / 2 - 40);
      p.textSize(20);
      p.text("Move your mouse to guide your lightling.", p.width / 2, p.height / 2 + 110);

      const btnX = p.width / 2 - 100;
      const btnY = p.height / 2 - 20;
      const btnW = 200;
      const btnH = 100;
      p.image(startButton, btnX, btnY, btnW, btnH);
      startBtnArea = { x: btnX, y: btnY, w: btnW, h: btnH };
    }

    function playScene() {
      goal.display();
      lightling.update(p.mouseX, p.mouseY);
      lightling.display();

      let allGlowing = true;

      for (const currentCloud of clouds) {
        currentCloud.display();
        const distance = p.dist(lightling.x, lightling.y, currentCloud.x, currentCloud.y);
        if (distance < 80) {
          currentCloud.glow();
        }
        if (!currentCloud.isGlowing) {
          allGlowing = false;
        }
      }

      const goalDistance = p.dist(lightling.x, lightling.y, goal.x, goal.y);
      if (goalDistance < 50) {
        if (allGlowing) {
          goal.glowUp();
          scene = 3;
        } else {
          scene = 4;
        }
      }

      p.fill(255);
      p.textAlign(p.CENTER);
      p.textSize(16);

      if (!allGlowing) {
        p.text(
          "Try to light up all the clouds before reaching the sun !",
          p.width / 2,
          p.height - 30,
        );
      } else {
        p.text("All clouds are bright! Now go find the sun !", p.width / 2, p.height - 30);
      }
    }

    function endScene() {
      p.image(bcat, 0, 0, 600, 400);
      p.fill(255);
      p.textAlign(p.CENTER);
      p.textSize(24);
      p.text("You Reached the Sun", p.width / 2, p.height / 2 - 100);
      p.image(meow, p.width / 2 - 40, p.height / 2 - 80, 300, 150);
      p.text("‘Meow~’ To Play Again", p.width / 2, p.height - 100);
    }

    function moonScene() {
      p.image(night, 0, 0, 600, 400);
      p.fill(255, 255, 200);
      p.textAlign(p.CENTER);
      p.textSize(24);
      p.text("Not all clouds are bright yet...", p.width / 2, p.height / 2 - 20);
      p.textSize(16);
      p.text("Press Paw to wakes it up", p.width / 2, p.height / 2 + 40);
      p.image(paw, 40, 100, 50, 50);
      pawArea = { x: 40, y: 100, w: 50, h: 50 };
      p.image(sleep, p.width - 140, p.height - 180, 100, 140);
      p.image(moon, p.width - 90, 20, 80, 80);
    }

    function resetGame() {
      lightling = new Lightling(100, p.height / 2);
      for (const currentCloud of clouds) {
        currentCloud.bright = 50;
        currentCloud.isGlowing = false;
      }
      goal.bright = 200;
    }

    class Lightling {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.trail = [];
      }

      update(targetX, targetY) {
        this.x = targetX;
        this.y = targetY;
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 20) {
          this.trail.shift();
        }
      }

      display() {
        p.push();
        p.noStroke();
        for (let i = 0; i < this.trail.length; i += 1) {
          const point = this.trail[i];
          p.fill(255, 200, 220, i * 8);
          p.ellipse(point.x, point.y, 10);
        }
        p.fill(255);
        p.image(charactor, this.x - 40, this.y - 40, 80, 80);
        p.pop();
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
        p.push();
        p.translate(this.x, this.y);

        if (this.isGlowing) {
          p.imageMode(p.CENTER);
          p.image(cloud, 0, 0, this.size * 1.5, this.size * 1.2);
        } else {
          p.fill(this.bright);
          p.noStroke();
          p.ellipse(0, 0, this.size, this.size * 0.6);
          p.ellipse(20, 0, this.size * 0.8, this.size * 0.5);
          p.ellipse(-20, 0, this.size * 0.8, this.size * 0.5);
        }

        p.pop();
      }

      glow() {
        this.bright = 200;
        this.isGlowing = true;
      }
    }

    class Star {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.bright = 200;
      }

      display() {
        p.push();
        p.imageMode(p.CENTER);
        p.tint(255, this.bright);
        p.image(sun, this.x, this.y, this.size * 2, this.size * 2);
        p.pop();
      }

      glowUp() {
        this.bright += 10;
        if (this.bright > 255) {
          this.bright = 255;
        }
        shine.play();
      }
    }
  };
}
