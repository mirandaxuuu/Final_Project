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
var c;
var s;
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
  var blackkey = new Keys();
  var whitekey = new Keys2();

  if (frameCount % 90 < 30) { // color of piano tiles slightly change periodically 
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

  for (var i = 0; i < 10; i++) { // draw white piano tiles
    stroke(0);
    fill(224, 255, 226);
    rect(80 * i, 0, 80, height);
  } // end of "for i"

  for (var j = 0; j < 9; j++) { // draw black piano tiles
    fill(c);
    stroke(s);
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

    strokeWeight(4);
    stroke(random(120, 255), random(120, 255), random(120, 255));

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

    } else if (((mouseX > 740) && (mouseX < width) && (mouseY < 200)) || ((mouseX > 720) && (mouseX < width) && (mouseY > 200) && (mouseY < 300))){
      line(740, 0, 800, 0);
      line(720, 300, 800, 300);
      line(720, 200, 740, 200);
      line(720, 200, 720, 300);
      line(740, 0, 740, 200);
      line(800, 0, 800, 300);
      Gb5.play();
      // play 19th note
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
