var A4, Ab4, B4, Bb4, C4, C5, D4, D5, Db4, Db5, E4, E5, Eb4, Eb5, F4, F5, G4, Gb4, Gb5; // vars for sound files
var x = 150;
var y = 400; // initial position of the grey mouse
var c, c2; 
var s; // colors of piano keys
var paw; // image file for cat paw
var points = [];
var greymouse, whitemouse, brownmouse; // image files
var mode = 1; // set defult mode
var jumper; // jumper that controls the movement of brown mouse
var pic; 
var vx = 10;
var vy = 10; // initial position of the white mouse
var font1;
var fontSize = 40;
var rateOfChange = 2; // rate of change of font size
var textx = 100;
var texty = 260; // initial position of text for mode 3
var rateOfChange2 = 10;


function preload() { // preload sound and image files
  A4 = loadSound('data/Piano.mf.A4.mp3');
  Ab4 = loadSound('data/Piano.mf.Ab4.mp3');
  B4 = loadSound('data/Piano.mf.B4.mp3');
  Bb4 = loadSound('data/Piano.mf.Bb4.mp3');
  C4 = loadSound('data/Piano.mf.C4.mp3');
  C5 = loadSound('data/Piano.mf.C5.mp3');
  D4 = loadSound('data/Piano.mf.D4.mp3');
  D5 = loadSound('data/Piano.mf.D5.mp3');
  Db4 = loadSound('data/Piano.mf.Db4.mp3');
  Db5 = loadSound('data/Piano.mf.Db5.mp3');
  E4 = loadSound('data/Piano.mf.E4.mp3');
  E5 = loadSound('data/Piano.mf.E5.mp3');
  Eb4 = loadSound('data/Piano.mf.Eb4.mp3');
  Eb5 = loadSound('data/Piano.mf.Eb5.mp3');
  F4 = loadSound('data/Piano.mf.F4.mp3');
  F5 = loadSound('data/Piano.mf.F5.mp3');
  G4 = loadSound('data/Piano.mf.G4.mp3');
  Gb4 = loadSound('data/Piano.mf.Gb4.mp3');
  Gb5 = loadSound('data/Piano.mf.Gb5.mp3'); // piano notes sound files
  paw = loadImage('data/catpaw.png');
  greymouse = loadImage('data/mouse1.png');
  whitemouse = loadImage('data/mouse2.png');
  brownmouse = loadImage('data/mouse3.png'); // image files
  font1 = loadFont('data/font1.ttf'); // text fond file

}


function setup() {
  createCanvas(900, 300);
  frameRate(40);

  jumper = new Jumper();

} // end of setup

function draw() {
  background(255);
  strokeWeight(2);

  imageMode(CORNER);
  image(greymouse, 800, 5, 80, 80);
  image(whitemouse, 805, 100, 80, 80);
  image(brownmouse, 810, 200, 85, 75); // 3 icons on the right, to let users choose the mode


  if ((mouseX > 800) && (mouseX < width) && (mouseY > 0) && (mouseY < 100)) { // user selecting the grey mouse (mode 1)
    fill(255);
    noStroke();
    rect(800, 0, 100, 100);
    image(greymouse, 790, 0, 100, 100);

    if (mouseIsPressed) {
      mode = 1;
    }
  }

  if ((mouseX > 800) && (mouseX < width) && (mouseY > 100) && (mouseY < 200)) { // user selectng the white mouse (mode 2)
    fill(255);
    noStroke();
    rect(800, 100, 100, 100);
    image(whitemouse, 790, 100, 100, 100);

    if (mouseIsPressed) {
      mode = 2;
    }
  }

  if ((mouseX > 800) && (mouseX < width) && (mouseY > 200) && (mouseY < 300)) { // user selectng the brown mouse (mode 3)
    fill(255);
    noStroke();
    rect(800, 200, 100, 100);
    image(brownmouse, 800, 200, 115, 95);

    if (mouseIsPressed) {
      mode = 3;
    }
  }


  // color of black keys slightly change periodically

  if (frameCount % 90 < 30) {
    c = color(12, 43, 115);
    s = color(192, 232, 213);
  }
  if ((frameCount % 90 > 30) && (frameCount % 90 < 60)) {
    c = color(60, 43, 115);
    s = color(211, 232, 192);
  }
  if ((frameCount % 90 > 60) && (frameCount % 90 < 90)) {
    c = color(92, 36, 71);
    s = color(255, 254, 211);
  }


  //for different modes, the white keys have different colors

  if (mode == 1) {
    c2 = color(186, 138, 232);
    pic = greymouse;
  }

  if (mode == 2) {
    c2 = color(255, 97, 90);
    pic = whitemouse;
  }

  if (mode == 3) {
    c2 = color(255, 239, 194);
    pic = brownmouse;
  }


  //draw white piano tiles
  
  for (var i = 0; i < 10; i++) { 
    stroke(0);
    fill(c2);
    rect(80 * i, 0, 80, height);
  } 
  
  // draw black piano tiles

  for (var j = 0; j < 9; j++) { 
    fill(c);
    stroke(s);
    rect(60 + 80 * j, 0, 40, (2 / 3) * height);
  } 

  //using an array to create a "tail" effect for the cat paw
  var point = {
    x: mouseX,
    y: mouseY
  }

  //console.log(x);
  //console.log(y);

  points.push(point);

  if (points.length > 15) {
    points.splice(0, 1);
  }


  if (mouseIsPressed) { // when the cat touches and scratches the screen
    // a cat paw is shown, with a "tail" behind it
    imageMode(CENTER);
    image(paw, mouseX, mouseY, 40, 40);

    for (var k = 0; k < points.length; k++) {
      noStroke();
      fill(255, 0, 0, 255 - k * 5);
      image(paw, points[k].x, points[k].y, 20, 20);
    }

    strokeWeight(4);
    stroke(random(120, 255), random(120, 255), random(120, 255));

    var keyboard = new Keyboard();
    keyboard.display();

  } // end of mouseIsPressed

  // mode 1: a grey mouse moves randomly and disappears periodically
  if (mode == 1) { 
    if (frameCount % 30 < 20) {
      strokeWeight(1.5);
      fill(255);
      textFont(font1, fontSize);
      text('CATCH ME!', 520, 265);
    }

    if (frameCount % 80 < 45) {
      // moves the mouse randomly -> invites the cat to interact with it
      imageMode(CENTER);
      image(pic, x, y, 50, 50);
      x += random(-20, 20);
      y += random(-20, 20);

      if (x > width) { // limiter that brings back the lightspot when it goes out of the edges
        x = 750;
      }
      if (x < 0) {
        x = 50;
      }
      if (y > height) {
        y = 280;
      }
      if (y < 0) {
        y = 20;
      }

    } // end of framecount

  } // end of mode 1

  // mode 2: a white mouse that moves with a constant speed and bounces when touching the edges
  if (mode == 2) {
    //var vx = 5;
    //var vy = 5;

    strokeWeight(0.5);
    fill(255, 213, 164);
    textFont(font1, fontSize);
    text('CATCH ME!', 50, 275);

    fontSize += rateOfChange;

    if ((fontSize > 60) || (fontSize < 30)) {
      rateOfChange = rateOfChange * (-1)
    }


    imageMode(CENTER);
    image(pic, x, y, 50, 50);
    x += vx;
    y += vy; // moves the mouse with a constant speed vx and vy

    if ((x > 775) || (x < 20)) { // changing direction so the mouse bounces from the edges
      vx = vx * (-1);
    }
    if ((y > 280) || (y < 20)) {
      vy = vy * (-1)
    }

  } // end of mode 2


  // mode 3: a brown mouse that jumps around the screen
  if (mode == 3) { 
    var forcey = createVector(0, 0.8);
    var forcex = createVector(0.05, 0);
    jumper.applyForce(forcey);
    jumper.applyForce(forcex);
    jumper.update();
    jumper.display(pic);
    jumper.limiter();
  
    strokeWeight(0.5);
    fill(173, 100, 44);
    textFont(font1, 45);
    text('CATCH ME!', textx, texty);
    
    textx += rateOfChange2;

    if ((textx > 520) || (textx < 100)) {
      rateOfChange2 = rateOfChange2 * (-1)
    }
    
  } // end of mode 3

} // end of draw