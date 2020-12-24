

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base;
var div1,div2,div3,div4,div5;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;

var divisions =[]
var plinkos=[]

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  

  engine = Engine.create();
  world = engine.world;


base = new Ground (200,800,800,40);

for (var k =0; k <=width;k=k+80){
  divisions.push(new Divisions (k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40;j<width;j=j+50){

  plinkos.push(new Plinko(j,75) );


}
for (var j = 15;j<width-10;j=j+50){

  plinkos.push(new Plinko(j,175) )


}



}
function draw() {
  background(0);  
  Engine.update(engine);

base.display();

for(var k =0; k <divisions.length;k++ ){
  divisions[k].display();
}

for(var j =0; j <plinkos.length;j++ ){
  plinkos[j].display();
}

}