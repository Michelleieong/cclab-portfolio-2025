function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");
  background(225);
  drawHead(width/2, 100);
  drawBody();
  drawBottom();
  stroke(0);
  //line(0, 200, width, 200);
 // line(0, 400, width, 400);
}
function drawHead(x, y) {
  push();
  translate(x, y);
  fill(255, 247, 204);
  noStroke();
  ellipse(-60, -20, 100, 100);  
  ellipse(60, -20, 100, 100);  
  ellipse(0, 30, 130, 130);  

  fill(255, 200, 51);
  ellipse(0, 20, 60, 60);  
  fill(255, 80, 51);
  ellipse(0, 20, 20, 20);   

  stroke(250,220,180);
  fill(255);
  line(-65, 30, -65, 80);
  ellipse(-65, 80, 20, 30);
  line(65, 30, 65, 80);
  ellipse(65, 80, 20, 30);

  pop();
}

function drawBody(){
  let x = width/2;
  let y = 200;
  push();
  noStroke();
  fill(73, 112, 100);
  quad(x-100,y+200, x+100,y+200,x+40,y+80,x-40,y+100);
  quad(x-70,y, x+80,y,x+40,y+80,x-40,y+100);
  quad(x+80,y,x+95,y, x+125,y+200,x+110,y+200);
  quad(x-70,y, x-85,y,x-105,y+180,x-95,y+190);
  ellipse(x-100,y+185,15,20);
  fill(31, 64, 51);
  quad(x-100,y+200, x+100,y+200,x+90,y+180,x-80,y+170);
  triangle(x-70, y, x, y+20, x-58, y+40);
  triangle(x, y+20,x+80,y,x+57,y+45);
  ellipse(x+40,y+25,45,28);
  ellipse(x-40,y+23,48,29);
  pop();
  line(x+73,y+13,x,y+20);
  line(x-65,y+13,x,y+20);
  line(x-60,y+29,x,y+20);
  line(x+65,y+29,x,y+20);
  line(x+15,y+119,x+25,y+55);
  line(x-15,y+119,x-25,y+55);
}

function drawBottom() {
  let x = width/2;
  let y = 400;
  push();
  translate(x,y);
  fill(152, 158, 154);
  quad(100,0,-100,0,-60,30,60,30);
  quad(110,0,125,0,150,35,120,30);
  quad(-100,0,-120,0,-150,35,-120,30);
  quad(150,35,120,30,130,60,170,60);
  quad(-150,35,-120,30,-150,80,-170,60);
  triangle(-120,30,-110,60,-130,70);
  quad(130,60,170,60,140,80,115,70);
  quad(120,30,110,40,110,50,100,35);
  line(140,60,125,74);
  line(160,60,135,78);
  line(-140,34,-165,65);
  ellipse(-65,43,25,30);
  ellipse(65,43,25,30);
  quad(-75,58,-60,60,-75,78,-85,80);
  quad(75,58,60,60,75,78,85,80);
  ellipse(-75,93,25,30);
  ellipse(75,93,25,30);
  
  fill(0);
  ellipse(-75,112,45,10) ;
  ellipse(75,112,45,10) ;
  fill(201, 2, 10);
  quad(-100,115,-55,115,-60,175,-100,175);
  quad(100,115,55,115,60,175,100,175);
  fill(255);
  quad(-60,200,-90,200,-90,180,-60,180);
  quad(60,200,90,200,90,180,60,180);
  fill(201, 2, 10);
  quad(60,175,100,175,130,195,60,190);
  quad(-60,175,-100,175,-130,195,-60,190);
  ellipse(125,192,30,10);
  ellipse(-125,192,30,10);
  
  fill(255);
  for (let i= 130; i < 180; i += 10) {
    ellipse(-68, i, 5, 5);
    ellipse(-88, i, 5, 5);
    ellipse(68, i, 5, 5);
    ellipse(88, i, 5, 5);
    stroke(0);
    line(-65, i, -85, i-10);
    line(-85, i, -65, i-10);
    line(65, i, 85, i-10);
    line(85, i, 65, i-10);
  }
   ellipse(-130,190,10,5);
   ellipse(130,190,10,5);
  
  pop();
}
