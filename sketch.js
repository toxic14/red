const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;//namespace-->nick name


var earth,universe;
var box1, box2,Ground,pig1,log1,log2,box3,box4,pig2,box5,log3,log4,bird1,back;

function preload() {

  back=loadImage("sprites/bg.png");

}

function setup() {
  createCanvas(1200,400);

  universe = Engine.create();//step 1
  earth = universe.world;//step 2

 box1 = new box(700,320,70,70); 
 box2 = new box(920,320,70,70);
 box3 = new box(700,240,70,70);
 box4 = new box(920,240,70,70);
 box5 = new box(810,160,70,70);
 pig1 = new pig(810,350);
 pig2 = new pig(810,220);
 log1 = new log(810,260,300,PI/2); //PI=180 degree
 log2 = new log(810,180,300,PI/2);
 log3 = new log(760,120,150,PI/7);
 log4 = new log(870,120,150,-PI/7);
 Ground = new ground(600,height,1200,20); 
 bird1 = new bird(100,100); 

}

function draw() {
  background(back); 

  Engine.update(universe);//step 5

  box1.display();
  box2.display();
  Ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird1.display();
}