function setup(){
  createCanvas(320,240);
  background(255);
  strokeWeight(3);
}

function draw(){
  text('TRILHA A', (width * 0.50) - 25, height * 0.50);
    //       x    y  L  A
  rect(width*0.05,175,50,50);
  fill(255,0,0);
    //        x    y  L  A
  rect(width*0.80,175,50,50);
}

function mouseClicked(){
  if((mouseX > width * 0.05) && (mouseX < (width * 0.05 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
    //voltar
    window.location.href = "../../lado A/floresta/tfloresta.html"
  }
  
  if((mouseX > width * 0.80) && (mouseX < (width * 0.80 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
    //Cidade
    console.log("trilha")
  }
}
