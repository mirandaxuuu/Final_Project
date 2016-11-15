function setup() {
  createCanvas(800, 300);

} // end of setup

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);
  
  for(var i = 0; i < 10; i++){ //white tiles
    fill(255);
    rect(80*i, 0, 80, height);
  } // for i
  
  for(var j = 0; j < 9; j++){ // black tiles
    fill(0);
    rect(60+80*j, 0, 40, (2/3)*height);
  } // for j

/*
  if mouseIsPressed(){
    
    if(mouseX < 60) && (mouseY < 200){
      //play 1st note
    }
    
    if(mouseX < 80) && (mouseY > 200) && (mouseY > 200) && (mouseY < 300){
      //play 1st note
    }
    
    if(mouseX > 60) && (mouseX < 100) && (mouseY < 200){
      // play 2nd note
    }
    
    if(mouseX > 100) && (mouseX < 140) && (mouseY < 200){
      // play 3rd note
    }
    
    if(mouseX > 80) && (mouseX < 160) && (mouseY > 200) && (mouseY < 300){
      // play 3rd note
    }
    
    if(mouseX > 140) && (mouseX < 180) && (mouseY < 200){
      // play 4th note
    }
    
    if(mouseX > 180) && (mouseX < 220) && (mouseY < 200){
      // play 5th note
    }
    
    if(mouseX > 160) && (mouseX < 240) && (mouseY > 200) && (mouseY < 300){
      // play 5th note
    }
    
    if(mouseX > 220) && (mouseX < 260) && (mouseY < 200){
      // play 6th note
    }
    
    if(mouseX > 260) && (mouseX < 300) && (mouseY < 200){
      // play 7th note
    }
    
    if(mouseX > 240) && (mouseX < 320) && (mouseY > 200) & (mouseY < 300){
      // play 7th note
    }
    
    if(mouseX > 300) && (mouseX < 340) && (mouseY < 200){
      // play 8th note
    }
    
    if(mouseX > 340) && (mouseX < 380) && (mouseY < 200){
      // play 9th note
    }
    
    if(mouseX > 320) && (mouseX < 400) && (mouseY > 200) && (mouseY < 300){
      // play 9th note
    }
    

  } // if mouseIsPressed
*/

} // end of draw
