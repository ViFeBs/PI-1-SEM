function tburaco(){
  this.enter = () => {
    background(0);
  }

  this.draw = () => {
    // TEXT
    fill(255);
    text('Buraco', (width * 0.50) - 25, height * 0.50);
    text('🔻', (width * 0.50) - 5, height * 0.50 + 25);
  }

  this.mouseClicked = () =>{
    //mover para buraco
    console.log("T Buraco")
    this.sceneManager.showScene(buraco);
  }
}