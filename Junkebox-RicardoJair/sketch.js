var cancion1;
var cancion2;
var cancion3;
var cancion4;
var cancion5;
var cancion6;
var cancion7;
var cancion8;
var cancion9;
var cancion10;

var vinil1;
var vinil2;
var vinil3;
var vinil4;
var vinil5;
var vinil6;
var vinil7;
var vinil8;
var vinil9;
var vinil10;

var pause;

var BG;
var analyzer;
var vsz;

var steps;
var steps0;
var x = [];
var y = [];

var botonGral = 0;



function preload() {
cancion1 = loadSound("cancion1.mp3");
cancion2 = loadSound("cancion2.mp3");
cancion3 = loadSound("cancion3.mp3");
cancion4 = loadSound("cancion4.mp3");
cancion5 = loadSound("cancion5.mp3");
cancion6 = loadSound("cancion6.mp3");
cancion7 = loadSound("cancion7.mp3");
cancion8 = loadSound("cancion8.mp3");
cancion9 = loadSound("cancion9.mp3");
cancion10 = loadSound("cancion10.mp3");
}



function setup() {
createCanvas(1200, 600);
BG = loadImage("BG.png");

 vinil1 = loadImage("cancion1.jpg");
vinil2 = loadImage("cancion2.jpg");
vinil3 = loadImage("cancion3.jpg");
vinil4 = loadImage("cancion4.jpg");
vinil5 = loadImage("cancion5.jpg");
vinil6 = loadImage("cancion6.jpg");
vinil7 = loadImage("cancion7.jpg");
vinil8 = loadImage("cancion8.jpg");
vinil9 = loadImage("cancion9.jpg");
vinil10 = loadImage("cancion10.jpg");

 dvinil1 = loadImage("cancion1.png");
dvinil2 = loadImage("cancion2.png");
dvinil3 = loadImage("cancion3.png");
dvinil4 = loadImage("cancion4.png");
dvinil5 = loadImage("cancion5.png");
dvinil6 = loadImage("cancion6.png");
dvinil7 = loadImage("cancion7.png");
dvinil8 = loadImage("cancion8.png");
dvinil9 = loadImage("cancion9.png");
dvinil10 = loadImage("cancion10.png");
  
pause = loadImage("pause.jpg");

 vsz = 120;
analisis = new p5.Amplitude();
analisis.setInput(cancion1);
analisis.setInput(cancion2);
analisis.setInput(cancion3);
analisis.setInput(cancion4);
analisis.setInput(cancion5);
analisis.setInput(cancion6);
analisis.setInput(cancion7);
analisis.setInput(cancion8);
analisis.setInput(cancion9);
analisis.setInput(cancion10);
  


 steps = 200;
steps0 = 200;
for (var i = steps; i < width; i += steps) {
for (var j = steps0; j < height; j += steps0) {
x = append(x, i);
y = append(y, j);
}
}
}



function draw() {
background(220);
if(botonGral == 0){
imageMode(CORNER);
image(BG, 0, 0, width, height);

 imageMode(CENTER);
image(vinil1, 200, 220, vsz, vsz);
image(vinil2, 400, 220, vsz, vsz);
image(vinil3, 600, 220, vsz, vsz);
image(vinil4, 800, 220, vsz, vsz);
image(vinil5, 1000, 220, vsz, vsz);
image(vinil6, 200, 440, vsz, vsz);
image(vinil7, 400, 440, vsz, vsz);
image(vinil8, 600, 440, vsz, vsz);
image(vinil9, 800, 440, vsz, vsz);
image(vinil10, 1000, 440, vsz, vsz);

 for (var i = 0; i < x.length; i++) {
var d = dist(x[i], y[i] + 140, mouseX, mouseY);
if (d <= steps / 2) {
fill(255, 0, 0);
} else {
fill(250);
}
strokeWeight(1);
ellipse(x[i], y[i] + 140, 50, 50);

 if (d <= steps / 2) {
if (mouseIsPressed) {
if (mouseButton == LEFT){
//1
if (x[i] == x[0] && y[i] == y[0]) {
image(dvinil1,200,220,200,160);
}
//2
if (x[i] == x[1] && y[i] == y[1]) {
image(dvinil6,200,420,200,160);
}
//3
if (x[i] == x[2] && y[i] == y[2]) {
image(dvinil2,400,220,200,160);
}
//4
if (x[i] == x[3] && y[i] == y[3]) {
image(dvinil7,400,420,200,160);
}
//5
if (x[i] == x[4] && y[i] == y[4]) {
image(dvinil3,600,220,200,160);
}
//6
if (x[i] == x[5] && y[i] == y[5]) {
image(dvinil8,600,420,200,160);
}
//7
if (x[i] == x[6] && y[i] == y[6]) {
image(dvinil4,800,220,200,160);
}
//8
if (x[i] == x[7] && y[i] == y[7]) {
image(dvinil9,800,420,200,160);
}
//9
if (x[i] == x[8] && y[i] == y[8]) {
image(dvinil5,1000,220,200,160);
}
//10
if (x[i] == x[9] && y[i] == y[9]) {
image(dvinil10,1000,420,200,160);
}
}//mouse Left
}//mouse is pressed
}//steps/2
}//for var
}//buton = 0

  //stop songs  
if (botonGral == 1){
if (cancion1.isPlaying()) {
cancion1.stop();
}
  
  if (cancion2.isPlaying()) {
cancion2.stop();
}
  
  if (cancion3.isPlaying()) {
cancion3.stop();
}
  
  if (cancion4.isPlaying()) {
cancion4.stop();
}
  
  if (cancion5.isPlaying()) {
cancion5.stop();
}
  
  if (cancion6.isPlaying()) {
cancion6.stop();
}
  
  if (cancion7.isPlaying()) {
cancion7.stop();
}
  
  if (cancion8.isPlaying()) {
cancion8.stop();
}
  
  if (cancion9.isPlaying()) {
cancion9.stop();
}
  
  if (cancion10.isPlaying()) {
cancion10.stop();
}
  image(pause,600,300,1200,600);
}
  
//Cancion 1
if (botonGral == 2){
if (cancion1.isPlaying()) {
} else {
cancion1.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil1,600,300,300,300);
}

//Cancion 2
if (botonGral == 3){
if (cancion2.isPlaying()) {
} else {
cancion2.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil2,600,300,300,300);
}
  
  //Cancion 3
if (botonGral == 4){
if (cancion3.isPlaying()) {
} else {
cancion3.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil3,600,300,300,300);
}
  
  //Cancion 4
if (botonGral == 5){
if (cancion4.isPlaying()) {
} else {
cancion4.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil4,600,300,300,300);
}

  //Cancion 5
if (botonGral == 6){
if (cancion5.isPlaying()) {
} else {
cancion5.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil5,600,300,300,300);
}
  
  //Cancion 6
if (botonGral == 7){
if (cancion6.isPlaying()) {
} else {
cancion6.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil6,600,300,300,300);
}
  
  //Cancion 7
if (botonGral == 8){
if (cancion7.isPlaying()) {
} else {
cancion7.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil7,600,300,300,300);
}
  
  //Cancion 8
if (botonGral == 9){
if (cancion8.isPlaying()) {
} else {
cancion8.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil8,600,300,300,300);
}
  
  //Cancion 9
if (botonGral == 10){
if (cancion9.isPlaying()) {
} else {
cancion9.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil9,600,300,300,300);
}
  
  //Cancion 10
if (botonGral == 11){
if (cancion10.isPlaying()) {
} else {
cancion10.play();
}
background(0);
fill(203,32,32);
rect(400,100,400,400);
ellipse(0,0,300,300);
ellipse(0,600,300,300);
ellipse(1200,0,300,300);
ellipse(1200,600,300,300);
image(vinil10,600,300,300,300);
}
  
  var amplitud = analisis.getLevel();{ 
    strokeWeight(amplitud*100);
  }

  

}//function draw

function keyTyped() {
if(key == 'r'){
botonGral = 0;
}
if(key == 'q'){
botonGral = 1;

 }
if(key == "a"){
botonGral = 2;
}
  
  if(key == "s"){
botonGral = 3;
}
  
  if(key == "d"){
botonGral = 4;
}
  
  if(key == "f"){
botonGral = 5;
}
  
  if(key == "g"){
botonGral = 6;
}
  
  if(key == "z"){
botonGral = 7;
}
  
  if(key == "x"){
botonGral = 8;
}
  
  if(key == "c"){
botonGral = 9;
}
  
  if(key == "v"){
botonGral = 10;
}
  
  if(key == "b"){
botonGral = 11;
}

  
}