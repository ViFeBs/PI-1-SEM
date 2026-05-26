function tTrilhaA(){
  this.enter = () => {
    background(0);
  }

  this.draw = () => {
    // TEXT
    fill(255);
    text('Trilha', (width * 0.50) - 25, height * 0.50);
    text('🔻', (width * 0.50) - 5, height * 0.50 + 25);
  }

  this.mouseClicked = () =>{
    //mover para Trilha
    console.log("T Trilha A")
    this.sceneManager.showScene(trilhaA);
  }
}