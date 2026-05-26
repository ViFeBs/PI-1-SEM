
let mrg;
function setup() {
  createCanvas(320,240);
  mrg = new SceneManager();
  //grencia funções do p5
  mrg.wire();
  mrg.showScene(prologo);
}

function draw() {
  mrg.draw();
}


