function tFloresta(){
  this.enter = () => {
    background(0);
  }

  this.draw = () => {
    // TEXT
    fill(255);
    text('Floresta', (width * 0.50) - 25, height * 0.50);
    text('🔻', (width * 0.50) - 5, height * 0.50 + 25);
  }

  this.mouseClicked = () =>{
    //mover para Floresta
    this.sceneManager.showScene(floresta);
  }
}