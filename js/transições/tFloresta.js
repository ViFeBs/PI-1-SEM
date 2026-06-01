let x = 0;
let y = 0;
let dialogo = "lorem ipsu";
let contadorDialogo = 0;
function setup(){
  createCanvas(320,240);
  x = (width * 0.50) - 5;
  y = (height * 0.50) + 25;
}

function draw(){
  background(0);
  escolheDialogo();
  // TEXT
  fill(255);
  textSize(12);
  text(dialogo, (width * 0.50) - 10, height * 0.50);
  textSize(20);
  text('🔻', x, y);
  if(y < (height * 0.50) + 26){
    y = y + 0.02;
  }
  if(y > (height * 0.50) + 25){
    y = y - 1;
  }
}


function escolheDialogo(){
  if(contadorDialogo === 0){
    dialogo = "Floresta 0"
  }
  if(contadorDialogo === 1){
    dialogo = "Floresta 1"
  }
  if(contadorDialogo === 2){
    dialogo = "Floresta 2"
  }
  if(contadorDialogo === 3){
    //mover para Floresta
    window.location.href = "../../lado A/floresta/floresta.html"
  }
}

function mouseClicked(){
  contadorDialogo++;
}
