function setup(){
  createCanvas(320,240);
  background(255);
  strokeWeight(3);
}

function draw(){
  text('Buraco', (width * 0.50) - 25, height * 0.50);
    //       x    y  L  A
  rect(width*0.05,175,50,50);
  fill(255,0,0);
    //        x    y  L  A
  rect(width*0.80,175,50,50);
}

function mouseClicked(){
  if((mouseX > width * 0.05) && (mouseX < (width * 0.05 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
    //conversar com os cidadões
    window.location.href = "../../lado B/cidade B/cidadoesB.html";
  }
  
  if((mouseX > width * 0.80) && (mouseX < (width * 0.80 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
    //falar com o vendedoor
    window.location.href = "../../lado B/vendedor B/vendedorB.html";
  }
}