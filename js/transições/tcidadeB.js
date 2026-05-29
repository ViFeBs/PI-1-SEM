function setup(){
    createCanvas(320,240);
    background(0);
  }
  
  function draw(){
    // TEXT
    fill(255);
    text('Cidade B', (width * 0.50) - 25, height * 0.50);
    text('🔻', (width * 0.50) - 5, height * 0.50 + 25);
  }
  
  function mouseClicked(){
    //mover para floresta
    window.location.href = "../../pages/lado A/cidade B/cidadeB.html"
  }
  