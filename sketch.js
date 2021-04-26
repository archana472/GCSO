//Create variables - car, wall, speedand weight
var car,wall;
var  speed,weight;

function setup() {
  createCanvas(1600,400);
  //create a rectangle sprite which represents a car
  car = createSprite(200,250,50,50);
  //Create a Wall which is half the height of the canvas and whose width is 60 pixels.
  wall = createSprite(1200,200,30,height/2);
 //Set the speed and weight to random values 
 speed=random(55,90);
 weight=random(400,1500);
 car.velocityX = speed;

}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed/22509
  if(deformation>180)
  {
    car.shapeColor = color("yellow");
  }

  if(deformation<180 && deformation>100)
  {
    car.shapeColor = color("green");
  }

  if(deformation<100)
  {
    car.shapeColor = color("red");
  }
}
  drawSprites();
}