function Keyboard() {
  this.display = function() {

    var blackkey = new Keys();
    var whitekey = new Keys2();

    if (((mouseX < 60) && (mouseY < 200)) || ((mouseX < 80) && (mouseY > 200) && (mouseY > 200) && (mouseY < 300))) {
      line(0, 0, 60, 0);
      line(0, 0, 0, 300);
      line(0, 300, 80, 300);
      line(60, 0, 60, 200);
      line(60, 200, 80, 200);
      line(80, 200, 80, 300);
      C4.play();
      //play 1st note

    } else if ((mouseX > 60) && (mouseX < 100) && (mouseY < 200)) {
      blackkey.display(0);
      /*
      line(60, 0, 100, 0);
      line(60, 200, 100, 200);
      line(60, 0, 60, 200);
      line(100, 0, 100, 200);
      */
      Db4.play();
      // play 2nd note

    } else if (((mouseX > 100) && (mouseX < 140) && (mouseY < 200)) || ((mouseX > 80) && (mouseX < 160) && (mouseY > 200) && (mouseY < 300))) {
      whitekey.display(0);
      /*
      line(100, 0, 140, 0);
      line(80, 200, 100, 200);
      line(140, 200, 160, 200);
      line(80, 300, 160, 300);
      line(100, 0, 100, 200);
      line(140, 0, 140, 200);
      line(80, 200, 80, 300);
      line(160, 200, 160, 300);
      */
      D4.play();
      // play 3rd note

    } else if ((mouseX > 140) && (mouseX < 180) && (mouseY < 200)) {
      blackkey.display(1);
      /*
      line(140, 0, 180, 0);
      line(140, 200, 180, 200);
      line(140, 0, 140, 200);
      line(180, 0, 180, 200);
      */
      Eb4.play();
      // play 4th note

    } else if (((mouseX > 180) && (mouseX < 220) && (mouseY < 200)) || ((mouseX > 160) && (mouseX < 240) && (mouseY > 200) && (mouseY < 300))) {
      whitekey.display(1);
      E4.play();
      // play 5th note

    } else if ((mouseX > 220) && (mouseX < 260) && (mouseY < 200)) {
      blackkey.display(2);
      F4.play();
      // play 6th note

    } else if (((mouseX > 260) && (mouseX < 300) && (mouseY < 200)) || ((mouseX > 240) && (mouseX < 320) && (mouseY > 200) & (mouseY < 300))) {
      whitekey.display(2);
      Gb4.play();
      // play 7th note

    } else if ((mouseX > 300) && (mouseX < 340) && (mouseY < 200)) {
      blackkey.display(3);
      G4.play();
      // play 8th note

    } else if (((mouseX > 340) && (mouseX < 380) && (mouseY < 200)) || ((mouseX > 320) && (mouseX < 400) && (mouseY > 200) && (mouseY < 300))) {
      whitekey.display(3);
      Ab4.play();
      // play 9th note

    } else if ((mouseX > 380) && (mouseX < 420) && (mouseY < 200)) {
      blackkey.display(4);
      A4.play();
      // play 10th note

    } else if (((mouseX > 420) && (mouseX < 460) && (mouseY < 200)) || ((mouseX > 400) && (mouseX < 480) && (mouseY > 200) && (mouseY < 300))) {
      whitekey.display(4);
      Bb4.play();
      //play 11th note

    } else if ((mouseX > 460) && (mouseX < 500) && (mouseY < 200)) {
      blackkey.display(5);
      B4.play();
      // play 12th note

    } else if (((mouseX > 500) && (mouseX < 540) && (mouseY < 200)) || ((mouseX > 480) && (mouseX < 560) && (mouseY > 200) && (mouseY < 300))) {
      whitekey.display(5);
      C5.play();
      // play 13th note

    } else if ((mouseX > 540) && (mouseX < 580) && (mouseY < 200)) {
      blackkey.display(6);
      Db5.play();
      // play 14th note

    } else if (((mouseX > 580) && (mouseX < 620) && (mouseY < 200)) || ((mouseX > 560) && (mouseX < 640) && (mouseY > 200) && (mouseY < 300))) {
      whitekey.display(6);
      D5.play();
      // play 15th note

    } else if ((mouseX > 620) && (mouseX < 660) && (mouseY < 200)) {
      blackkey.display(7);
      Eb5.play();
      // play 16th note

    } else if (((mouseX > 660) && (mouseX < 700) && (mouseY < 200)) || ((mouseX > 640) && (mouseX < 720) && (mouseY > 200) && (mouseY < 300))) {
      whitekey.display(7);
      E5.play();
      // play 17th note

    } else if ((mouseX > 700) && (mouseX < 740) && (mouseY < 200)) {
      blackkey.display(8);
      F5.play();
      // play 18th note

    } else if (((mouseX > 740) && (mouseX < 800) && (mouseY < 200)) || ((mouseX > 720) && (mouseX < 800) && (mouseY > 200) && (mouseY < 300))) {
      line(740, 0, 800, 0);
      line(720, 300, 800, 300);
      line(720, 200, 740, 200);
      line(720, 200, 720, 300);
      line(740, 0, 740, 200);
      line(800, 0, 800, 300);
      Gb5.play();
      // play 19th note
    }

  } // end of display
} // end of class