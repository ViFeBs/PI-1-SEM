
function setup(){
  createCanvas(320,240);
  background(0);
}

function draw(){
  // TEXT
  fill(255);
  text('Buraco', (width * 0.50) - 10, height * 0.50);
  text('🔻', (width * 0.50) - 5, height * 0.50 + 25);
}

function mouseClicked(){
  //mover para buraco
  console.log("T Buraco")
  window.location.href = "../../lado B/buraco/buraco.html";
}
