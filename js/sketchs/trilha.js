let fundo;
let somDeFundo;
let X = 0;
let Y = 0;
function preload(){
  fundo = loadImage("../../../src/images/Trilha.png");
  somDeFundo = loadSound("../../../src/sounds/WoodsofMystery.mp3");
}
function setup(){
  createCanvas(320,240);
  background(255);
  noStroke();
  somDeFundo.loop();
  somDeFundo.setVolume(0.5);
}

function draw(){
  image(fundo, 0, 0, 320, 240);
    
  fill(102,47,52);
    //        x    y  L  A
  rect(width*0.66,height * 0.45,10,48);
  rect(width*0.6250,height * 0.44,30,10);
  let x = width * 0.625;
  let y = height * 0.44;
  let w = 30;
  let h = 10;

  rect(x, y, w, h);

  // ponta da placa
  triangle(
    x + w, y,
    x + w, y + h,
    x + w + 15, y + h/2
  );

  fill(0,0,0)
  text('Rancho', width * 0.625, height * 0.48);
  textSize(10);


  Y = 40 * sin(X / 13) + 80;
  fada = {
    corNucleo: fill('rgba(0, 0, 225, 0.75)'),
    nucleo: circle(X,Y,10),
    cores : fill('rgba(255, 255, 255, 0.4)'),
    entorno: circle(X,Y,15),
    asadireita: circle(X + 8,Y - 5,7),
    asadireitabaixo: circle(X + 8,Y + 5,7),
    asaesquerda: circle(X - 8,Y + 4,7),
    asaesquerdaCima: circle(X - 8,Y - 7,7)
  }

  fada;

  X+=1;
  //rect(X + 10,Y + 10,20,20);
  console.log(X,Y)
  if(X>width){
    X = -70;
  }
  
}

function mouseClicked(){
  if((mouseX > X - 10) && (mouseX < (X + 10)) && (mouseY > Y - 10) && (mouseY < (Y + 10))){
    //Templo
    window.location.href = "../../lado A/templo/templo.html"
  }
  
  if((mouseX > width*0.75) && (mouseX < (width*0.75 + 50)) && (mouseY > height * 0.05) && (mouseY < (height * 0.05 + 60))){
    //Fazenda
    window.location.href = "../../lado A/fazenda/fazenda.html"
  }
}
