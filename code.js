var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ba530c6b-b5b1-489e-8663-2815a4e57145","3813cc62-5c5b-4588-8a48-57bb27727a25","a7c86e95-95e8-4105-9e0e-bac21e67cf8e","7a54b409-ddb0-49db-acb9-15aa07e7ec76","e9454f9f-d063-4bb2-b83d-40888cf5babe"],"propsByKey":{"ba530c6b-b5b1-489e-8663-2815a4e57145":{"name":"playerShip1_red_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":99,"y":75},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:47:24 UTC","pngLastModified":"2021-01-05 19:46:11 UTC","version":"1ZCSN4arCMQLcOqfshLRi_pXvNn2UhYe","sourceUrl":"assets/api/v1/animation-library/gamelab/1ZCSN4arCMQLcOqfshLRi_pXvNn2UhYe/category_vehicles/playerShip1_red.png","sourceSize":{"x":99,"y":75},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ZCSN4arCMQLcOqfshLRi_pXvNn2UhYe/category_vehicles/playerShip1_red.png"},"3813cc62-5c5b-4588-8a48-57bb27727a25":{"name":"bg_landscape21_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:56 UTC","pngLastModified":"2021-01-05 18:39:01 UTC","version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"a7c86e95-95e8-4105-9e0e-bac21e67cf8e":{"name":"alien_09_1","categories":["fantasy"],"frameCount":1,"frameSize":{"x":259,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:07:20 UTC","pngLastModified":"2021-01-05 19:06:54 UTC","version":"I6lmT7QNqceMLAtvM.vAJ.bHxygFLgvC","sourceUrl":"assets/api/v1/animation-library/gamelab/I6lmT7QNqceMLAtvM.vAJ.bHxygFLgvC/category_fantasy/alien_09.png","sourceSize":{"x":259,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/I6lmT7QNqceMLAtvM.vAJ.bHxygFLgvC/category_fantasy/alien_09.png"},"7a54b409-ddb0-49db-acb9-15aa07e7ec76":{"name":"alien_05_1","categories":["fantasy"],"frameCount":1,"frameSize":{"x":331,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:07:31 UTC","pngLastModified":"2021-01-05 19:07:53 UTC","version":"6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL","sourceUrl":"assets/api/v1/animation-library/gamelab/6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL/category_fantasy/alien_05.png","sourceSize":{"x":331,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL/category_fantasy/alien_05.png"},"e9454f9f-d063-4bb2-b83d-40888cf5babe":{"name":"alien_01_1","categories":["fantasy"],"frameCount":1,"frameSize":{"x":365,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:06:26 UTC","pngLastModified":"2021-01-05 19:07:34 UTC","version":"nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl","sourceUrl":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png","sourceSize":{"x":365,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png"}}};
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

var nave = createSprite(200,345,200,345);
nave.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="white";

var goal =0;
var death = 0

nave.setAnimation("playerShip1_red_1");
nave.scale=.5;
enemy1.setAnimation("alien_09_1");
enemy1.scale=.1;
enemy2.setAnimation("alien_05_1");
enemy2.scale=.1;
enemy3.setAnimation("alien_01_1");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
  background("black");

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  nave.y=nave.y-3
}

if(keyDown(DOWN_ARROW)){
  nave.y=nave.y+3
}

if(keyDown(LEFT_ARROW)){
  nave.x=nave.x-3
}

if(keyDown(RIGHT_ARROW)){
  nave.x=nave.x+3
}

if(nave.isTouching(enemy1)|| nave.isTouching(enemy2)|| nave.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  nave.x=200
  nave.y=350
  death = death+1
}
if(nave.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  nave.x=200
  nave.y=345
  goal=goal+1
}
textSize(14);
  fill("blue")
  text("VITORIAS:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
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
