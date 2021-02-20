var ross ,rossImage 
var matt, mattImage
var robot, robotImage 
var alex, alexImage
var alan, alanImage
var lexi, lexiImage
var katie, katieImage
var febe, febeImage
var max, maxImage
var elle, elleImage
var array = []

var edges
function preload(){
rossImage = loadImage("images/ross.png")
mattImage = loadImage("images/matt.png")
robotImage = loadImage("images/robot.png")
alexImage = loadImage("images/alex.png")
alanImage = loadImage("images/alan.png")
lexiImage = loadImage("images/lexi.png")
katieImage = loadImage("images/katie.png")
febeImage = loadImage("images/febe.png")
maxImage = loadImage("images/max.png")
elleImage = loadImage("images/elle.png")
}

function setup() {
  createCanvas(1200,650);
  ross = createSprite(700, 200, 20, 20)
  ross.addImage(rossImage)
  edges=createEdgeSprites();
  ross.debug = true
  ross.scale = 0.5
  ross.setCollider("rectangle",0,-50,50,190);
  
  matt = createSprite(400, 50, 20, 20)
  matt.addImage(mattImage)
  matt.debug = true
  matt.scale = 0.4
  matt.setCollider("rectangle",-100,9,100,300);
  
  robot = createSprite(100, 100, 10, 10)
  robot.addImage(robotImage)
  robot.debug = true
  robot.scale = 1
  robot.setCollider("rectangle",3,20,50,90);
  
  alex = createSprite(900, 200, 20, 20)
  alex.addImage(alexImage)
  alex.debug = true
  alex.scale = 0.2
  alex.setCollider("rectangle",0,0,500,500);
  
  alan = createSprite(300, 300, 20, 20)
  alan.addImage(alanImage)
  alan.debug = true
  alan.scale = 0.5
  alan.setCollider("rectangle",0,0,200,200);
  
  lexi = createSprite(1000, 300, 20, 20)
  lexi.addImage(lexiImage)
  lexi.debug = true
  lexi.scale = 0.3
  lexi.setCollider("rectangle",20,20,250,250);
  
  katie = createSprite(50, 500, 20, 20)
  katie.addImage(katieImage)
  katie.debug = true
  katie.scale = 0.2
  katie.setCollider("rectangle",0,-50,50,190);
  
  febe = createSprite(500, 300, 20, 20)
  febe.addImage(febeImage)
  febe.debug = true
  febe.scale = 0.5
  febe.setCollider("rectangle",0,-50,50,190);
  
  max = createSprite(80, 300, 20, 20)
  max.addImage(maxImage)
  max.debug = true
  max.scale = 0.4
  max.setCollider("rectangle",0,-50,50,190);
  
  elle = createSprite(400, 250, 20, 20)
  elle.addImage(elleImage)
  elle.debug = true
  elle.scale = 0.4
  elle.setCollider("rectangle",0,-50,50,190);

  score = 0;
}

function draw() {
  background ("black");  
  drawSprites();
  if (keyDown(RIGHT_ARROW)) {
    ross.velocityX = 2;
    ross.velocityY = 0;
    }
    if (keyDown(LEFT_ARROW)) {
    ross.velocityX = -2;
    ross.velocityY = 0;
    }
    if (keyDown(UP_ARROW)) {
    ross.velocityX = 0;
    ross.velocityY = -2;
      }
      if (keyDown(DOWN_ARROW)) {
    ross.velocityX = 0;
    ross.velocityY = 2;
        }
  ross.bounceOff(edges[0]);  
  ross.bounceOff(edges[1]); 
  ross.bounceOff(edges[2]); 
  ross.bounceOff(edges[3]); 
  
  if (ross.isTouching(alan)){
  if(array.indexOf("alan") === -1) { array.push(alan);
  alan.x=ross.x+10
  alan.y=ross.y+10
  }
  }
  //{array.push("alan")}
  if (ross.isTouching(alex)){
  if(array.indexOf("alex") === -1) { array.push(alex);
  alex.x=ross.x+10
  alex.y=ross.y+10
  }
  }
  //{array.push("alex")}
  if (ross.isTouching(elle)){
  if(array.indexOf("elle") === -1) { array.push(elle); 
  elle.x=ross.x+10
  elle.y=ross.y+10
  }
  }
  //{array.push("elle")}
  if (ross.isTouching(febe)){
  if(array.indexOf("febe") === -1) { array.push(febe); 
  febe.x=ross.x+10
  febe.y=ross.y+10
  }
  }
  //{array.push("febe")}
  if (ross.isTouching(katie)){
  if(array.indexOf("katie") === -1) { array.push(katie); 
  katie.x=ross.x+10
  katie.y=ross.y+10  
  }
  }
  //{array.push("katie")}
  if (ross.isTouching(lexi)){
  if(array.indexOf("lexi") === -1) { array.push(lexi); 
  lexi.x=ross.x+10
  lexi.x=ross.x+10
  console.log(array); }
  }
  //{array.push("lexi")}
  if (ross.isTouching(matt)){
  if(array.indexOf("matt") === -1) { array.push(matt); 
  matt.x=ross.x+10
  matt.y=ross.y+10
  }
  }
  //{array.push("matt")}
  if (ross.isTouching(max)){
  if(array.indexOf("max") === -1) { array.push(max); 
  max.x=ross.x+10  
  max.y=ross.y+10 
  }
  }
  //{array.push("max")}
  if (ross.isTouching(robot)){
  if(array.indexOf("robot") === -1) { array.push(robot); 
  robot.x=ross.x+10 
  robot.y=ross.y+10
  }
  }

  
  score = score + Math.round(getFrameRate()/60);
  console.log(score)


  for(var i = 0; i< array.length;i++) {
  }
}

