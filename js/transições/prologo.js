function prologo(){
  this.setup = () => {
    background(0);
  }

  this.draw = () => {
    // TEXT
    fill(255);
    text('lorem ipsu', (width * 0.50) - 25, height * 0.50);
    text('🔻', (width * 0.50) - 5, height * 0.50 + 25);
  }

  this.mouseClicked = () =>{
    //mover para floresta
    this.sceneManager.showScene(tFloresta);
  }
}