function trilhaB(){
  //usar setup quando for necessario carregar midias
  this.enter = () => {
    background(255);
    strokeWeight(3);
  }

  this.draw = () => {
    text('TRILHA B', (width * 0.50) - 25, height * 0.50);
      //       x    y  L  A
    rect(width*0.05,175,50,50);
  }

  this.mouseClicked = () => {
    if((mouseX > width * 0.05) && (mouseX < (width * 0.05 + 50)) && (mouseY > 175) && (mouseY < (175 + 50))){
      //Seguir
      console.log("buraco")
    }
  }
}