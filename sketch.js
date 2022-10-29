var player,playerimage
var arrow,arrowimage
var axe,axeimage
var zombie,zombieimage
var playerarcher,playerarcherimage
var ground,groundimage
var untitled,untitledimage

function preload() {
  playerimage = loadImage("player.png")
  arrowimage = loadImage("arrow.png")
  axeimage = loadImage("axe.png")
  zombieimage = loadImage("zombie1.png")
  playerarcherimage = loadImage("playerArcher.png")
  groundimage = loadImage("images.jpeg")
  untitledimage = loadImage("untitled.png")
}

function setup() {
  createCanvas(900,900)
  ground = createSprite(200,650)
  ground.addImage(groundimage)
  ground.scale = 10

  zombie = createSprite(700,450)
  
  arrow = createSprite(200,440)
  arrow.addImage(arrowimage)
  arrow.scale = 0.1
  untitled = createSprite(200,450)
  untitled.addImage(untitledimage)
  untitled.scale = 0.25

  
  zombie.addImage(zombieimage)
  zombie.scale = 0.05
  
  
  
}

function draw() {
background("white")
zombie.velocityY = -1
if(zombie.positionY = -100){
  zombie.velocityY = 0.0075
}
if(keyIsDown(UP_ARROW)){
  arrow.velocityX = 0.1
}
if(arrow.isTouching(zombie)){
  zombie.y = 10000
  arrow.y = 11000
}
  drawSprites()
}