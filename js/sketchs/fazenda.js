let somDeFundo;
let somDaVaca;
let somDaOvelha;
let somDoPorco;
let fundo
let animais = [];
function preload(){
  fundo = loadImage("../../../src/images/fazenda.png");
  somDeFundo = loadSound("../../../src/sounds/Romani Ranch.mp3");
  somDaVaca = loadSound("../../../src/sounds/cow.m4a");
  somDoPorco = loadSound("../../../src/sounds/pig.m4a");
  somDaOvelha = loadSound("../../../src/sounds/sheep.mp3");
}
function setup(){
  createCanvas(320,240);
  background(255);
  somDeFundo.loop();
  somDeFundo.setVolume(0.5);
  for (let i = 0; i < 6; i++) {
    animais.push(new Animal());
  }
}

function draw(){
  image(fundo, 0, 0, 320, 240);

  for (let animal of animais) {
    animal.mover();
    animal.desenhar();
  }
}

function mousePressed() {
  for (let i = animais.length - 1; i >= 0; i--) {
    if (animais[i].clicado(mouseX, mouseY)) {
      if(animais[i].tipo === "vaca"){
        somDaVaca.play();
      }
      if(animais[i].tipo === "porco"){
        somDoPorco.play();
      }
      if(animais[i].tipo === "ovelha"){
        somDaOvelha.play();
      }
      animais.splice(i, 1);
    }
  }
}

class Animal {
  constructor() {
    this.tamanho = 50;

    this.x = random(this.tamanho, width - this.tamanho);
    this.y = random(height * 0.59, height * 0.95);

    this.velX = random([1.5, 2, 2.5]);

    if (random() < 0.5) {
      this.velX *= -1;
    }

    this.tipo = random(["vaca", "ovelha", "porco"]);
  }

  mover() {
    this.x += this.velX;

    if (
      this.x < this.tamanho / 2 ||
      this.x > width - this.tamanho / 2
    ) {
      this.velX *= -1;
    }
  }

  desenhar() {
    push();
    translate(this.x, this.y);

    if (this.velX < 0) {
      scale(-1, 1);
    }

    if (this.tipo === "vaca") {
      this.desenharVaca();
    } else if (this.tipo === "ovelha") {
      this.desenharOvelha();
    } else {
      this.desenharPorco();
    }

    pop();
  }

  desenharVaca() {
  stroke(0);
    
  line(-15, 15, -15, 30);
  line(15, 15, 15, 30);
  line(-5, 15, -5, 30);
  line(5, 15, 5, 30);

  fill(255);
  ellipse(0, 0, 60, 35);

  fill(0);
  ellipse(-12, -3, 14, 10);
  ellipse(10, 6, 12, 8);

  fill(255);
  ellipse(35, 0, 28, 24);

  fill(220);
  triangle(25, -10, 28, -18, 32, -10);
  triangle(38, -10, 42, -18, 45, -10);

  fill(255);
  ellipse(27, -5, 8, 6);
  ellipse(43, -5, 8, 6);

  fill(0);
  ellipse(33, -4, 3);
  ellipse(39, -4, 3);

  fill(255, 180, 180);
  ellipse(36, 5, 14, 10);

  fill(0);
  ellipse(33, 5, 2);
  ellipse(39, 5, 2);

  noStroke();
}

desenharOvelha() {
  stroke(0);

  line(-10, 20, -10, 35);
  line(10, 20, 10, 35);

  fill(255);
  ellipse(0, 0, 50, 50);

  fill(70);
  ellipse(25, 5, 20, 18);

  ellipse(22, -2, 5, 5);

  fill(255);
  ellipse(28, 2, 4);

  fill(0);
  ellipse(28, 2, 2);

  noStroke();
}

desenharPorco() {
  stroke(0);

  line(-12, 15, -12, 30);
  line(12, 15, 12, 30);
  line(-2, 15, -2, 30);
  line(2, 15, 2, 30);

  fill(255, 180, 200);
  ellipse(0, 0, 55, 35);

  ellipse(30, 0, 24, 22);

  triangle(22, -10, 26, -20, 30, -10);
  triangle(34, -10, 38, -20, 42, -10);

  fill(0);
  ellipse(30, -4, 2);
  
  fill(255, 120, 150);
  ellipse(38, 2, 12, 8);

  fill(0);
  ellipse(36, 2, 2);
  ellipse(40, 2, 2);

  noStroke();
}


  clicado(mx, my) {
    return dist(mx, my, this.x, this.y) < this.tamanho / 2;
  }
}
