function floresta(){
  //usar setup quando for necessario carregar midias
  this.enter = () => {
    background(255);
    strokeWeight(3);
  }

  this.draw = () => {
      //       x    y  L  A
    rect(width*0.05,175,50,50);
    fill(255,0,0);
      //        x    y  L  A
    rect(width*0.80,175,50,50);
  }

  this.mouseClicked = () => {
    //LADO A
    if((mouseX > width * 0.05) && (mouseX < (width * 0.05 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
      //mover para trilha
      console.log("trilha")
      this.sceneManager.showScene(tTrilhaA);
    }
    
    //LADO B
    if((mouseX > width * 0.80) && (mouseX < (width * 0.80 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
      //mover para o buraco
      console.log("buraco")
      this.sceneManager.showScene(tburaco);
      
    }
  }
}