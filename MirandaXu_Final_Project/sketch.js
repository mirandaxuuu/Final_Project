var A4;
var Ab4;
var B4;
var Bb4;
var C4;
var C5;
var D4;
var D5;
var Db4;
var Db5;
var E4;
var E5;
var Eb4;
var Eb5;
var F4;
var F5;
var G4;
var Gb4;
var Gb5;
var x = 150;
var y = 400;
var paw;
var points = [];

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
  Gb5 = loadSound('data/Piano.mf.Gb5.mp3');
  paw = loadImage('data/catpaw.png');
}


function setup() {
  createCanvas(800, 300);
  frameRate(50);
} // end of setup

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);

  for (var i = 0; i < 10; i++) { // draw white piano tiles
    fill(255);
    rect(80 * i, 0, 80, height);
  } // end of "for i"

  for (var j = 0; j < 9; j++) { // draw black piano tiles
    fill(12, 43, 115);
    rect(60 + 80 * j, 0, 40, (2 / 3) * height);
  } // end of "for j"


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
                        // a cat paw is shown, with shadows behind it
    imageMode(CENTER);
    image(paw, mouseX, mouseY, 40, 40);
    for (var k = 0; k < points.length; k++) {
      noStroke();
      fill(255, 0, 0, 255 - k * 5);
      image(paw, points[k].x, points[k].y, 20, 20);
    }

  } // end of mouseIsPressed


  fill(255, 0, 0); // generates a lightspot that moves randomly
                  // so it invites the cat to interact with it
  noStroke();
  ellipse(x, y, 20, 20);
  x += random(-25, 25);
  y += random(-25, 25);

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

} // end of draw


function mousePressed() { // when the cat touches different parts of the screen
                          // the program plays different sounds that corresponds with the positions of piano tiles

  if ((mouseX < 60) && (mouseY < 200)) {
    C4.play();
    //play 1st note
  } else if ((mouseX < 80) && (mouseY > 200) && (mouseY > 200) && (mouseY < 300)) {
    //play 1st note
    C4.play();
  } else if ((mouseX > 60) && (mouseX < 100) && (mouseY < 200)) {
    Db4.play();
    // play 2nd note
  } else if ((mouseX > 100) && (mouseX < 140) && (mouseY < 200)) {
    D4.play();
    // play 3rd note
  } else if ((mouseX > 80) && (mouseX < 160) && (mouseY > 200) && (mouseY < 300)) {
    D4.play();
    // play 3rd note
  } else if ((mouseX > 140) && (mouseX < 180) && (mouseY < 200)) {
    Eb4.play();
    // play 4th note
  } else if ((mouseX > 180) && (mouseX < 220) && (mouseY < 200)) {
    E4.play();
    // play 5th note
  } else if ((mouseX > 160) && (mouseX < 240) && (mouseY > 200) && (mouseY < 300)) {
    E4.play();
    // play 5th note
  } else if ((mouseX > 220) && (mouseX < 260) && (mouseY < 200)) {
    F4.play();
    // play 6th note
  } else if ((mouseX > 260) && (mouseX < 300) && (mouseY < 200)) {
    Gb4.play();
    // play 7th note
  } else if ((mouseX > 240) && (mouseX < 320) && (mouseY > 200) & (mouseY < 300)) {
    Gb4.play();
    // play 7th note
  } else if ((mouseX > 300) && (mouseX < 340) && (mouseY < 200)) {
    G4.play();
    // play 8th note
  } else if ((mouseX > 340) && (mouseX < 380) && (mouseY < 200)) {
    Ab4.play();
    // play 9th note
  } else if ((mouseX > 320) && (mouseX < 400) && (mouseY > 200) && (mouseY < 300)) {
    Ab4.play();
    // play 9th note
  } else if ((mouseX > 380) && (mouseX < 420) && (mouseY < 200)) {
    A4.play();
    // play 10th note
  } else if ((mouseX > 420) && (mouseX < 460) && (mouseY < 200)) {
    Bb4.play();
    //play 11th note
  } else if ((mouseX > 400) && (mouseX < 480) && (mouseY > 200) && (mouseY < 300)) {
    Bb4.play();
    // play 11th note
  } else if ((mouseX > 460) && (mouseX < 500) && (mouseY < 200)) {
    B4.play();
    // play 12th note
  } else if ((mouseX > 500) && (mouseX < 540) && (mouseY < 200)) {
    C5.play();
    // play 13th note
  } else if ((mouseX > 480) && (mouseX < 560) && (mouseY > 200) && (mouseY < 300)) {
    C5.play();
    // play 13th note
  } else if ((mouseX > 540) && (mouseX < 580) && (mouseY < 200)) {
    Db5.play();
    // play 14th note
  } else if ((mouseX > 580) && (mouseX < 620) && (mouseY < 200)) {
    D5.play();
    // play 15th note
  } else if ((mouseX > 560) && (mouseX < 640) && (mouseY > 200) && (mouseY < 300)) {
    D5.play();
    // play 15th note
  } else if ((mouseX > 620) && (mouseX < 660) && (mouseY < 200)) {
    Eb5.play();
    // play 16th note
  } else if ((mouseX > 660) && (mouseX < 700) && (mouseY < 200)) {
    E5.play();
    // play 17th note
  } else if ((mouseX > 640) && (mouseX < 720) && (mouseY > 200) && (mouseY < 300)) {
    E5.play();
    // play 17th note
  } else if ((mouseX > 700) && (mouseX < 740) && (mouseY < 200)) {
    F5.play();
    // play 18th note
  } else if ((mouseX > 740) && (mouseX < width) && (mouseY < 200)) {
    Gb5.play();
    // play 19th note
  } else if ((mouseX > 720) && (mouseX < width) && (mouseY > 200) && (mouseY < 300)) {
    Gb5.play();
    // play 19th note
  }

} // end of mousePressed