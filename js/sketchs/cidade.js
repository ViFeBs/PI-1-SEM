let fundo;
let somDeFundo;

let xEsquerda;
let xDireita;

let camisetaEsquerda = [255,0,0];
let camisetaDireita = [0,0,255];

let velocidadeEsquerda = 0.9;
let velocidadeDireita = 0.9;
function preload(){
  fundo = loadImage("../../../src/images/cidade.png");
  somDeFundo = loadSound("../../../src/sounds/GuruGuru'sSong.mp3");
}
function setup(){
  createCanvas(320,240);
  background(255);
  strokeWeight(1);
  somDeFundo.loop();
  somDeFundo.setVolume(0.5);

  xEsquerda = 0;
  xDireita = width;


}

function draw(){
  image(fundo, 0, 0, 320, 240);

  //personagem que vai para a direita
  //camisa
  fill(camisetaEsquerda[0],camisetaEsquerda[1],camisetaEsquerda[2]);
      //x    y          L  A
  rect(xEsquerda,height * 0.63,10,15);

  //sapato
  fill(0,0,0);
  //x    y          L  A
  rect(xEsquerda,height * 0.63 + (height * 0.63 * 0.06),10,10);

  //cabeça
  fill(245,160,151)
  circle(xEsquerda + 5,height * 0.63 - (height * 0.63 * 0.03),13);

  xEsquerda = xEsquerda + velocidadeEsquerda;
  if(xEsquerda > width){
    xEsquerda = 0;
    novoNpcEsquerda();
  }


  //personagem que vai para a esquerda
  //camisa
  fill(camisetaDireita[0],camisetaDireita[1],camisetaDireita[2]);
      //x    y          L  A
  rect(xDireita,height * 0.51,10,15);

  //sapato
  fill(0,0,0);
  //x    y          L  A
  rect(xDireita,height * 0.51 + (height * 0.51 * 0.06),10,10);

  //cabeça
  fill(245,160,151)
  circle(xDireita + 5,height * 0.48,13);

  xDireita = xDireita - velocidadeDireita;
  if(xDireita < -15){
     xDireita = width;
     novoNpcDireita();
  }
}

function novoNpcEsquerda(){
  let r,g,b;
  r = random(255);
  g = random(255);
  b = random(255);

  camisetaEsquerda[0] = r;
  camisetaEsquerda[1] = g;
  camisetaEsquerda[2] = b;

  velocidadeEsquerda = random(0.5,1);
}

function novoNpcDireita(){
  let r,g,b;
  r = random(255);
  g = random(255);
  b = random(255);

  camisetaDireita[0] = r;
  camisetaDireita[1] = g;
  camisetaDireita[2] = b;

  velocidadeDireita = random(0.5,1);
}


function mouseClicked(){
  if((mouseX > (width * 0.10 - 10)) && (mouseX < (width * 0.10 + 60)) && (mouseY > height * 0.79) && (mouseY < (height * 0.79 + 50))){
    //conversar com o vendedo
    window.location.href = "../../lado B/vendedorA/vendedorA.html";
  }
  
  if((mouseX > (width * 0.74 - 10)) && (mouseX < (width * 0.74 + 60)) && (mouseY > height * 0.79) && (mouseY < (height * 0.79 + 50))){
    //falar com o vendedor de flores
    window.location.href = "../../lado B/vendedorB/vendedorB.html";
  }
}