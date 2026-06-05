
let fundo;
let somDeFundo;
let audioisplaying = false;
function preload(){
  fundo = loadImage("../../src/images/floresta.png");
  somDeFundo = loadSound("../../src/sounds/GreatFairy'sFountain.mp3");
}
function setup(){
  createCanvas(320,240);
  background(255);
  strokeWeight(3);
  frameRate(2);
  
  somDeFundo.setVolume(0.5);
}

function draw(){
  image(fundo, 0, 0, 320, 240);

        //       x    y           L  A
  //rect(width*0.83,height * 0.25,50,50);
  
  //arvore do centro
  for(i = 0; i < 60;i++){
    stroke(0,255,68);
    let x = random((width*0.37), (width*0.37 + 50));
    let y = random((height * 0.05), (height * 0.05 + 50));
    point(x,y);
    
    noStroke();
    fill('rgba(0, 255, 0, 0.25)')
    circle(x, y, 10);
  }

  //arvore da esquerda 1
  for(i = 0; i < 60;i++){
    stroke(0,255,68);
    let x = random((width*0.02), (width*0.02 + 50));
    let y = random((height * 0.65), (height * 0.65 + 50));
    point(x,y);
    
    noStroke();
    fill('rgba(0, 255, 0, 0.25)')
    circle(x, y, 10);
  }

  //arvore da esquerda 2
  for(i = 0; i < 60;i++){
    stroke(0,255,68);
    let x = random((width*0.15), (width*0.15 + 50));
    let y = random((height * 0.74), (height * 0.74 + 50));
    point(x,y);
    
    noStroke();
    fill('rgba(0, 255, 0, 0.25)')
    circle(x, y, 10);
  }

  //arvore do centro baixo
  for(i = 0; i < 60;i++){
    stroke(0,255,68);
    let x = random((width*0.45), (width*0.45 + 50));
    let y = random((height * 0.60), (height * 0.60 + 50));
    point(x,y);
    
    noStroke();
    fill('rgba(0, 255, 0, 0.25)')
    circle(x, y, 10);
  }

  //arvore da direita baixo
  for(i = 0; i < 60;i++){
    stroke(0,255,68);
    let x = random((width*0.75), (width*0.75 + 50));
    let y = random((height * 0.69), (height * 0.69 + 50));
    point(x,y);
    
    noStroke();
    fill('rgba(0, 255, 0, 0.25)')
    circle(x, y, 10);
  }

  //arvore da direita cima
  for(i = 0; i < 60;i++){
    stroke(0,255,68);
    let x = random((width*0.83), (width*0.83 + 50));
    let y = random((height * 0.25), (height * 0.25 + 50));
    point(x,y);
    
    noStroke();
    fill('rgba(0, 255, 0, 0.25)')
    circle(x, y, 10);
  }

}

function mouseClicked(){
  if(!audioisplaying){
    somDeFundo.loop();
    audioisplaying = true;
  }

  //LADO A
  if((mouseX > (width*0.10 - 10)) && (mouseX < (width*0.10 + 70)) && (mouseY > height * 0.25) && (mouseY < (height * 0.25 + 50))){
    //mover para trilha
    console.log("trilha")
    window.location.href = "../../pages/lado A/trilha/trilha.html"
  }
  
  //LADO B
  if((mouseX > (width*0.70 - 20)) && (mouseX < (width*0.70 + 50)) && (mouseY > height * 0.25) && (mouseY < (height * 0.25 + 50))){
    //mover para o buraco
    console.log("buraco")
    window.location.href = "../../../pages/lado B/cidade/cidade.html"    
  }
}
