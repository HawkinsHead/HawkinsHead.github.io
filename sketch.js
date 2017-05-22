var timeTyped;

var imageSelected = 0;

var soundPlayed = false;

function setup(){
  createCanvas(500, 500);
  background(250);
}
var images = [];
var sounds = [];
var currentEasterEgg;
var showEasterEgg;
var cooldownTime;

function easterEgg(text) {
  this.text = text;
}

function preload() {
  images[0] = loadImage("pictures/FIJI_330mL_small_1460403698701.png");
  images[1] = loadImage("pictures/6c2da6e9da3a91720ab1392dfea88bad_the-trap-the-ugly-corner-lean-drink-clipart_229-400.png");
  images[2] = loadImage("pictures/sticker,375x360.u1.png");
  images[3] = loadImage("pictures/Ef5Tid5.png");
  images[4] = loadGif("pictures/bustmac.gif");
  images[5] = loadImage("pictures/tumblr_o5445weMRZ1uf5j8co1_500.png");
  images[6] = loadImage("pictures/dolphin.png");
  images[7] = loadImage("pictures/url.png");
  images[8] = loadImage("pictures/19cJLVN.png");
  images[9] = loadGif("pictures/bd6c59a1bebe561cfe58f3cabbe80ced.gif");
  images[10] = loadImage("pictures/Damn daniel.png");
  images[11] = loadImage("pictures/tumblr_mwsrctUdGw1qcayvko1_500.png");
  images[12] = loadGif("pictures/Childish gambino.Gif");
  images[13] = loadImage("pictures/Gnomestar.png");
  images[14] = loadImage("pictures/Biggie train.png");
  images[15] = loadImage("pictures/kazoo stomady.png");
  images[16] = loadImage("pictures/Vape Nation 1.png");
  images[17] = loadImage("pictures/tumblr_ncftndhm1z1tj1m9uo1_1280.png");
  images[18] = loadImage("pictures/Roadhog.png");
  images[19] = loadGif("pictures/Travolta boi.Gif");
  images[20] = loadImage("pictures/Salamander_Man.png");
  images[21] = loadImage("pictures/All Star.png");
  images[22] = loadImage("pictures/PaulaDeen.png");
  images[23] = loadImage("pictures/herobrine hey.png");
  images[24] = loadImage("pictures/JoeExotic.png");
  images[25] = loadImage("pictures/Dikembe.png");

  sounds[0] = loadSound("sounds/Mountain-stream.mp3");
  sounds[1] = loadSound("sounds/Cool drums.wav");
  sounds[2] = loadSound("sounds/Bass.wav");
  sounds[3] = loadSound("sounds/Guitar.wav");
  sounds[4] = loadSound("sounds/Vapelewave 1.wav");
  sounds[5] = loadSound("sounds/Punchy drums.wav");
  sounds[6] = loadSound("sounds/Kick Clap Beat.wav");
  sounds[7] = loadSound("sounds/windows.mp3");
  sounds[8] = loadSound("sounds/Celt Islam.wav");
  sounds[9] = loadSound("sounds/Broblin Bass.wav");
  sounds[10]= loadSound("sounds/shout damndaniel.mp3");
  sounds[11] = loadSound("sounds/Dayman.wav");
  sounds[12] = loadSound("sounds/Me and Your mama.wav")
  sounds[13] = loadSound("sounds/Dub 65.wav");
  sounds[14] = loadSound("sounds/Electro.wav");
  sounds[15] = loadSound("sounds/Flute solo.wav");
  sounds[16] = loadSound("sounds/Reggae.wav");
  sounds[17] = loadSound("sounds/Flavortown yes.wav");
  sounds[18] = loadSound("sounds/Big Dog.wav");
  sounds[19] = loadSound("sounds/Future bass loop.wav");
  sounds[20] = loadSound("sounds/Future - Mask Off (Instrumental).wav");
  sounds[21] = loadSound("sounds/Allstar.wav");
  sounds[22] = loadSound("sounds/Heavy drums.wav");
  sounds[23] = loadSound("sounds/Le papiallon.wav");
  sounds[24] = loadSound("sounds/Hip Hop Bass.wav");
  sounds[25] = loadSound("sounds/Hey, its mr.Jones.wav");

}



function draw() {
  background(updateBackground(imageSelected));
  imageMode(CENTER);
  //Selects images that are not repeated in the for loop.
  if (imageSelected == 0 || imageSelected == 1 || imageSelected == 21 || imageSelected == 18 || imageSelected == 17 || imageSelected == 15 || imageSelected == 4 || imageSelected
  == 3 || imageSelected == 4 || imageSelected == 5 || imageSelected == 7 || imageSelected == 11 || imageSelected == 12 || imageSelected == 16 || imageSelected == 24  || imageSelected == 2 || imageSelected == 9) {
    image(images[imageSelected], 250, 250);
  }
  //for loop that repeats the image in a diagnal line.
  else {
    for (var i = 0; i < 10; i++) {
      image(images[imageSelected], 100 * i, 100 * i);
    }
  }

  if (showEasterEgg === true) {
    text(currentEasterEgg.text, 0, 0, 500, 500);
    if (millis() > cooldownTime) {
      showEasterEgg = false;
    }
  }

  if (soundPlayed === false) {
    soundPlayed = true;
    sounds[imageSelected].play();
  }
}

function updateBackground(index) {
  if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9) {
    return color(0,255, 255);
  }
  return color(255, 255, 255);
}

function keyTyped() {
  //imageMode(CORNERS);
  soundPlayed = false;
  sounds[imageSelected].stop();
  if (key === 'q') {
    imageSelected = 0;
    console.log('q');
  } else if (key === 'w') {
    imageSelected = 1;
    console.log('w');
  }
  else if (key === 'e') {
    imageSelected = 2;
    console.log('e');
  }
  else if (key === 'r') {
    imageSelected = 3;
    console.log('r');
  }
  else if (key === 't') {
    imageSelected = 4;
    console.log('t');
  }
  else if (key === 'y') {
    imageSelected = 5;
    console.log('y');
  }
  else if (key === 'u') {
    imageSelected = 6;
    console.log('u');
  }
  else if (key === 'i') {
    imageSelected = 7;
    console.log('i');
  }
  else if (key === 'o') {
    imageSelected = 8;
    console.log('o');
  }
  else if (key === 'p') {
    imageSelected = 9;
    console.log('p');
  }
  else if (key === 'a') {
    imageSelected = 10;
    console.log('a');
  }
  else if (key === 's') {
    imageSelected = 11;
    console.log('s');
  }
  else if (key === 'd') {
    imageSelected = 12;
    console.log('d');
  }
  else if (key === 'f') {
    imageSelected = 13;
    console.log('f');
  }
  else if (key === 'g') {
    imageSelected = 14;
    console.log('g');
  }
  else if (key === 'h') {
    imageSelected = 15;
    console.log('h');
  }
  else if (key === 'j') {
    imageSelected = 16;
    console.log('j');
  }
  else if (key === 'k') {
    imageSelected = 17;
    console.log('k');
  }
  else if (key === 'l') {
    imageMode(CENTER);
    imageSelected = 18;
    console.log('l');
  }
  else if (key === 'z') {
    imageSelected = 19;
    console.log('z');
  }
  else if (key === 'x') {
    imageSelected = 20;
    console.log('x');
  }
  else if (key === 'c') {
    imageSelected = 21;
    console.log('c');
  }
  else if (key === 'v') {
    imageSelected = 22;
    console.log('v');
  }
  else if (key === 'b') {
    imageSelected = 23;
    console.log('b');
  }
  else if (key === 'n') {
    imageSelected = 24;
    console.log('n');
  }
  else if (key === 'm') {
    imageSelected = 25;
    console.log('m');
  }
}

function mouseClicked() {
  currentEasterEgg = undefined;
  cooldownTime = millis() + 5000;
  textSize(50);
  textAlign(CENTER);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  if (imageSelected == 17) {
    currentEasterEgg = new easterEgg("Congratulations, You have entered FLAVORTOWN!");
  }
  if (currentEasterEgg != undefined) {
      showEasterEgg = true;
  }

}
