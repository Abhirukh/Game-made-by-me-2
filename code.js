var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b202cf72-711c-417c-8ee5-93961cabb67b"],"propsByKey":{"b202cf72-711c-417c-8ee5-93961cabb67b":{"name":"brown_sweater_hand_in_pocket_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png","frameSize":{"x":126,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var baloon1;
 var baloon;
 var baloon2;
 var baloon3;
 var baloon4;
 var baloon0;
 var baloon5;
 var baloon6;
 var baloon7;
 var baloon8;
 var baloon9;
 var baloon10;
 var baloon11;
 var baloon12;
 var baloon13;
 var baloon14;
 var baloon15;
 var baloon16;
 var baloon17;
 var baloon18;
 var baloon19;
 var score="0";
 var score=0;
 


var bow1;

var arrow1;

arrow1=createSprite(370,200,10,10);

bow1=createSprite(390,200,10,10);
bow1.setAnimation("brown_sweater_hand_in_pocket_1");

bow1.scale= 0.2;
 baloon = createSprite(30,200,20,20);
 baloon0 = createSprite(30,200,20,20);
  
 
  
  baloon1 = createSprite(30,130,20,20);
 
  
   baloon2 = createSprite(30,60,20,20);
 

  
  baloon3 = createSprite(30,270,20,20);
 
 
  
  baloon4 = createSprite(30,340,20,20);
 
 
  
  baloon5 = createSprite(30,410,20,20);
 
  
  
  baloon6 = createSprite(30,480,20,20);
 
  
  
  baloon7= createSprite(30,550,20,20);
  
  
  
  
  baloon8 = createSprite(70,200,20,20);
 
 
  
  baloon9 = createSprite(70,130,20,20);

  
  
  baloon10 = createSprite(70,270,20,20);
 
  
  baloon11 = createSprite(70,340,20,20);
 
 
  
  baloon12 = createSprite(70,410,20,20);
 
 
  
  baloon13 = createSprite(70,480,20,20);
 
  
  
  baloon14 = createSprite(110,200,20,20);
 
  
  
  baloon15 = createSprite(110,270,20,20);

  
  
   baloon16 = createSprite(110,340,20,20);

  
  
  baloon17 = createSprite(110,410,20,20);
 
 
  
  baloon18 = createSprite(150,270,20,20);
  
 
  
  baloon19 = createSprite(150,340,20,20);
  
 
  
  
  
  
 
  



function draw() {
  
   background("white");
   arrow1.y = bow1.y;
   bow1.y = World.mouseY;
  
  if(keyDown ("space")){
    arrow1.velocityX = -8;
  }
  
 
  if(arrow1.x<0) {
    resetarrow(); 
  }
  
  textSize(25);
    fill("maroon");
    text("Press space to strike",90,180);

  
  fill("black");
        textSize(30);
       textSize(30);
       text("score=" +score,254,30);

  if(arrow1.isTouching(baloon)){
    baloon.destroy();
 score= score+1 }
   
  
     if(arrow1.isTouching(baloon1)){
    baloon1.destroy();
 score= score+1 }
  
  if(arrow1.isTouching(baloon2)){
    baloon2.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon3)){
    baloon3.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon4)){
    baloon4.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon5)){
    baloon5.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon6)){
    baloon6.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon7)){
    baloon7.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon8)){
    baloon8.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon9)){
    baloon9.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon10)){
    baloon10.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon11)){
    baloon11.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon12)){
    baloon12.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon13)){
    baloon13.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon14)){
    baloon14.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon15)){
    baloon15.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon16)){
    baloon16.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon17)){
    baloon17.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon18)){
    baloon18.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon19)){
    baloon19.destroy();
 score= score+1 }
 
 if(arrow1.isTouching(baloon0)){
    baloon0.destroy();
 score= score+1 }
  
  
  
  
  drawSprites();
  
}

function resetarrow() {
  arrow1.y = 200;
  arrow1.x = 370;
  arrow1.velocityX = 0;
  
}





  
     

  
 

function resetarrow() {
  arrow1.y = 200;
  arrow1.x = 370;
  arrow1.velocityX = 0;
  

}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
