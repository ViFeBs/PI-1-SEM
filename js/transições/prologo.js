let x = 0;
let y = 0;
let dialogo = "lorem ipsu";
let contadorDialogo = 0;
function setup(){
  createCanvas(320,240);
  pixelDensity(1);
  noSmooth();
  x = (width * 0.50) - 5;
  y = (height * 0.50) + 25;
}

function draw(){
  background(0);
  escolheDialogo();
  // TEXT
  fill(255);
  textSize(12);
  text(dialogo, (width * 0.50) - 25, height * 0.50);
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
    dialogo = "Dialogo 0"
  }
  if(contadorDialogo === 1){
    dialogo = "Dialogo 1"
  }
  if(contadorDialogo === 2){
    dialogo = "Dialogo 2"
  }
  if(contadorDialogo === 3){
    //mover para floresta
    window.location.href = "../../pages/lado A/floresta/tfloresta.html"
  }
}

function mouseClicked(){
  contadorDialogo++;
}
