function setup() {
  createCanvas(320,240);
  background(0);
}

function draw(){
  // TEXT
  fill(255);
  text('Trilha', (width * 0.50) - 10, height * 0.50);
  text('🔻', (width * 0.50) - 5, height * 0.50 + 25);
}

function mouseClicked(){
  //mover para Trilha
  console.log("T Trilha A")
  window.location.href = "../../lado A/trilha/trilha.html";
}
