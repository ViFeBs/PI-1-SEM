
function setup(){
  createCanvas(320,240);
  background(255);
  strokeWeight(3);
}

function draw(){
    //       x    y  L  A
  rect(width*0.05,175,50,50);
  fill(255,0,0);
    //        x    y  L  A
  rect(width*0.80,175,50,50);
}

function mouseClicked(){
  //LADO A
  if((mouseX > width * 0.05) && (mouseX < (width * 0.05 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
    //mover para trilha
    console.log("trilha")
    window.location.href = "../../pages/lado A/trilha/trilha.html"
  }
  
  //LADO B
  if((mouseX > width * 0.80) && (mouseX < (width * 0.80 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
    //mover para o buraco
    console.log("buraco")
    window.location.href = "../../../pages/lado B/buraco/buraco.html"    
  }
}
