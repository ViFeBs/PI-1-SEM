let fundo;
let somDeFundo;

let mascaras = [];
let mascaraSelecionada = null;
function preload(){
  fundo = loadImage("../../../src/images/vendedorA.png");
  somDeFundo = loadSound("../../../src/sounds/Shop.mp3");
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

  mascaras.push(new Mascara(width * 0.14, height * 0.20, cores[0]));
  mascaras.push(new Mascara(width * 0.25, height * 0.27, cores[1]));
  mascaras.push(new Mascara(width * 0.75, height * 0.29, cores[3]));
  mascaras.push(new Mascara(width * 0.87, height * 0.29, cores[4]));
}

function draw(){
  image(fundo, 0, 0, 320, 240);

  for (let mascara of mascaras) {
    mascara.desenhar();
  }

  if (mascaraSelecionada != null) {

    stroke(255, 215, 0);
    strokeWeight(2);
    noFill();

    rect(
      mascaraSelecionada.x - 20,
      mascaraSelecionada.y - 35,
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
    mascaraSelecionada != null &&
    mouseX > 110 &&
    mouseX < 210 &&
    mouseY > 190 &&
    mouseY < 220
  ) {

    let indice = mascaras.indexOf(mascaraSelecionada);

    if (indice != -1) {
      mascaras.splice(indice, 1);
    }

    mascaraSelecionada = null;
    return;
  }

  // Selecionar poção
  mascaraSelecionada = null;

  for (let mascara of mascaras) {
    if (mascara.clicada(mouseX, mouseY)) {
      mascaraSelecionada = mascara;
      break;
    }
  }
}

class Mascara {

  constructor(x, y, cor) {
    this.x = x;
    this.y = y;
    this.cor = cor;
  }

  desenhar() {

    push();
    translate(this.x, this.y);


    stroke(120);

    fill(this.cor);
    stroke(0);

    beginShape();
    vertex(-12, -18);
    vertex(12, -18);
    vertex(15, 5);
    vertex(0, 20);
    vertex(-15, 5);
    endShape(CLOSE);


    fill(0);
    ellipse(-5, -5, 4, 6);
    ellipse(5, -5, 4, 6);


    triangle(0, 0, -2, 5, 2, 5);

    pop();
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

