function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");

  angleMode(DEGREES);
}

function draw(){
  background(225);
  
  let nyTime = (second() + 0) % 60;
  let parisTime = (second () + 6) % 60;
  let tokyoTime = (second() + 13) % 60;

  let r = map(nyTime, 0, 60, 0, 255);
  let g = map(parisTime, 0, 60, 0, 255);
  let b = map(tokyoTime, 0, 60, 0, 255);

  translate(width/2, height/2); 
  fill(255);
  stroke(0);
  strokeWeight(3);
  ellipse(0,0,400,400);

  textFont("Times New Roman");
  textAlign(CENTER);
  textSize(40);
  noStroke();
  text("NY Paris Tokyo",0,250);
 

 drawArcHand(tokyoTime, 60, color(0,0,250,100), 360);// Tokyo/blue
 drawArcHand(parisTime, 60, color(255,255,0,100), 380);// Paris/green
 drawArcHand(nyTime, 60, color(250,0,0,100), 400);   // NY/red

}  
  function drawArcHand(time,end,color,d){
    noStroke();
    fill(color);
    let angleNow = map(time, 0, end, 0, 360);
    arc(0, 0, d, d, -90, angleNow - 90, PIE);
}
