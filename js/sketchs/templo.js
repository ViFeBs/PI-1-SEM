let fundo;
let somDeFundo;

let X = 0;
let Y = 0;

let angF2 = 0;
let angF4 = 0;
let angF5 = 0;
let angF6 = 0;
let a = 0;
function preload(){
  fundo = loadImage("../../../src/images/templo.png");
  somDeFundo = loadSound("../../../src/sounds/AstralObservatory.mp3");
}
function setup(){
  createCanvas(320,240);
  background(255);
  noStroke()
  somDeFundo.loop();
  somDeFundo.setVolume(0.5);
}

function draw(){
  image(fundo, 0, 0, 320, 240);


  
  Y = 40 * sin(X / 13) + 80;
  fada = {
    corNucleo: fill('rgba(255, 0, 119, 0.75)'),
    nucleo: circle(X,Y,10),
    cores : fill('rgba(255, 255, 255, 0.4)'),
    entorno: circle(X,Y,15),
    asadireita: circle(X + 8,Y - 5,7),
    asadireitabaixo: circle(X + 8,Y + 5,7),
    asaesquerda: circle(X - 8,Y + 4,7),
    asaesquerdaCima: circle(X - 8,Y - 7,7)
  }

  X+=1;
  if(X>width){
    X = -70;
  }


  let xF2 = 50 * cos(angF2) + 100;
  let yF2 = 50 * sin(angF2) + 100;
  fada2 = {
    corNucleo: fill('rgba(255, 0, 119, 0.75)'),
    nucleo: circle(xF2,yF2,10),
    cores : fill('rgba(255, 255, 255, 0.4)'),
    entorno: circle(xF2,yF2,15),
    asadireita: circle(xF2 + 8,yF2 - 5,7),
    asadireitabaixo: circle(xF2 + 8,yF2 + 5,7),
    asaesquerda: circle(xF2 - 8,yF2 + 4,7),
    asaesquerdaCima: circle(xF2 - 8,yF2 - 7,7)
  }
  fada2;
  angF2+=0.05;
  
  let xF3 = 10 * (16 * pow(sin(a),3));
  let yF3 = 10 * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4*a));
  fada3 = {
    corNucleo: fill('rgba(255, 0, 119, 0.75)'),
    nucleo: circle(xF3,yF3,10),
    cores : fill('rgba(255, 255, 255, 0.4)'),
    entorno: circle(xF3,yF3,15),
    asadireita: circle(xF3 + 8,yF3 - 5,7),
    asadireitabaixo: circle(xF3 + 8,yF3 + 5,7),
    asaesquerda: circle(xF3 - 8,yF3 + 4,7),
    asaesquerdaCima: circle(xF3 - 8,yF3 - 7,7)
  }
  fada3;
  a += 0.02;

  let xF4 = 50 * cos(angF4) + 180;
  let yF4 = 50 * sin(angF4) + 100;
  fada4 = {
    corNucleo: fill('rgba(255, 0, 119, 0.75)'),
    nucleo: circle(xF4,yF4,10),
    cores : fill('rgba(255, 255, 255, 0.4)'),
    entorno: circle(xF4,yF4,15),
    asadireita: circle(xF4 + 8,yF4 - 5,7),
    asadireitabaixo: circle(xF4 + 8,yF4 + 5,7),
    asaesquerda: circle(xF4 - 8,yF4 + 4,7),
    asaesquerdaCima: circle(xF4 - 8,yF4 - 7,7)
  }
  fada4;
  angF4+=0.07;

  let xF5 = 50 * cos(angF5) + 180;
  let yF5 = 25 * sin(2 * angF5) + 100;
  fada5 = {
    corNucleo: fill('rgba(255, 0, 119, 0.75)'),
    nucleo: circle(xF5,yF5,10),
    cores : fill('rgba(255, 255, 255, 0.4)'),
    entorno: circle(xF5,yF5,15),
    asadireita: circle(xF5 + 8,yF5 - 5,7),
    asadireitabaixo: circle(xF5 + 8,yF5 + 5,7),
    asaesquerda: circle(xF5 - 8,yF5 + 4,7),
    asaesquerdaCima: circle(xF5 - 8,yF5 - 7,7)
  }
  fada5;
  angF5+=0.05;

  let xF6 = 50 * cos(angF6) + 100;
  let yF6 = 25 * sin(2 * angF6) + 100;
  fada6 = {
    corNucleo: fill('rgba(255, 0, 119, 0.75)'),
    nucleo: circle(xF6,yF6,10),
    cores : fill('rgba(255, 255, 255, 0.4)'),
    entorno: circle(xF6,yF6,15),
    asadireita: circle(xF6 + 8,yF6 - 5,7),
    asadireitabaixo: circle(xF6 + 8,yF6 + 5,7),
    asaesquerda: circle(xF6 - 8,yF6 + 4,7),
    asaesquerdaCima: circle(xF6 - 8,yF6 - 7,7)
  }
  fada6;
  angF6+=0.07;
}
