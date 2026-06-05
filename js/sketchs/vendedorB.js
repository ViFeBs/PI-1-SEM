let fundo;
let somDeFundo;

let pocoes = [];
let pocaoSelecionada = null;
function preload(){
  fundo = loadImage("../../../src/images/vendedorB.png");
  somDeFundo = loadSound("../../../src/sounds/CuriosityShop.mp3");
}
function setup(){
  createCanvas(320,240);
  background(255);
  strokeWeight(3);
  somDeFundo.loop();
  somDeFundo.setVolume(0.5);

  let cores = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 255, 0),
    color(255, 0, 255)
  ];

  pocoes.push(new Pocao(width * 0.1, height * 0.1, cores[0]));
  pocoes.push(new Pocao(width * 0.2, height * 0.27, cores[1]));
  pocoes.push(new Pocao(width * 0.85, height * 0.1, cores[2]));
  pocoes.push(new Pocao(width * 0.75, height * 0.29, cores[3]));
  pocoes.push(new Pocao(width * 0.87, height * 0.29, cores[4]));
}

function draw(){
  image(fundo, 0, 0, 320, 240);

  for (let pocao of pocoes) {
    pocao.desenhar();
  }

  if (pocaoSelecionada != null) {

    stroke(255, 215, 0);
    strokeWeight(2);
    noFill();

    rect(
      pocaoSelecionada.x - 20,
      pocaoSelecionada.y - 35,
      40,
      60,
      5
    );

    fill(220);
    stroke(0);
    rect(110, 190, 100, 30, 5);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(14);
    text("Comprar", 160, 205);
  }
}

function mousePressed() {

  // Comprar
  if (
    pocaoSelecionada != null &&
    mouseX > 110 &&
    mouseX < 210 &&
    mouseY > 190 &&
    mouseY < 220
  ) {

    let indice = pocoes.indexOf(pocaoSelecionada);

    if (indice != -1) {
      pocoes.splice(indice, 1);
    }

    pocaoSelecionada = null;
    return;
  }

  // Selecionar poção
  pocaoSelecionada = null;

  for (let pocao of pocoes) {
    if (pocao.clicada(mouseX, mouseY)) {
      pocaoSelecionada = pocao;
      break;
    }
  }
}

class Pocao {

  constructor(x, y, cor) {
    this.x = x;
    this.y = y;
    this.cor = cor;
  }

  desenhar() {

    // Tampa
    fill(120, 70, 20);
    rect(this.x - 6, this.y - 25, 12, 8);

    // Frasco
    fill(220);
    stroke(0);
    rect(this.x - 12, this.y - 18, 24, 32, 4);

    // Líquido
    fill(this.cor);
    rect(this.x - 10, this.y - 2, 20, 14, 3);
  }

  clicada(mx, my) {
    return (
      mx > this.x - 12 &&
      mx < this.x + 12 &&
      my > this.y - 25 &&
      my < this.y + 14
    );
  }
}
  
  