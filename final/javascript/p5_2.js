let currentX = 0;
let currentY = 0;
let currentSize = 20;
let finalSize = 10;
let idleTimer = 0;
const easing = 0.1;


let sketch1 = function (p) {
	// Sketch code
	p.setup = function () {
		let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("sketchContainer"); // Attach the canvas to the sketch-container div
	};


  p.draw = function () {
    p.clear();
    
    if ($("body").hasClass("hover")) {
      
      p.fill("blue");
      p.noStroke();
      finalSize = 50;
      
    } else {
      
      p.fill("lightgray");
      p.noStroke();
      finalSize = 20;
        
    }

    
    if (p.pmouseX === p.mouseX && p.pmouseY === p.mouseY) {
      idleTimer ++
    } else {
      idleTimer = 0
    }
    
    
    if(idleTimer >= 100){
      finalSize = 0
    }


    // Use lerp to calculate a new position
    currentX = p.lerp(currentX, p.mouseX, easing);
    currentY = p.lerp(currentY, p.mouseY, easing);
    currentSize = p.lerp(currentSize, finalSize, easing);
    
    p.circle(currentX, currentY, currentSize);
  };
}




let waitingcircle=0;


let sketch2 = function (p) {


	// Sketch code
	p.setup = function () {
		let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("sketchContainer2"); // Attach the canvas to the sketch-container div
	};


  p.draw = function () {

      p.fill("blue");
      p.noStroke();
     
    if (p.pmouseX === p.mouseX && p.pmouseY === p.mouseY) {
      idleTimer ++
    } else {
      idleTimer = 0;
      waitingcircle = 0;
      p.clear();
    }
    

    if(idleTimer >= 1200){
      waitingcircle =p.random(40)
   
    }
    
    p.circle(p.random(p.windowWidth),p.random(p.windowHeight), waitingcircle);
  };


  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
	

};


let img;
let img2;
let sticker1;
let sticker2;
let sticker3;
let sticker4;
let sticker5;
let sticker6;
let sticker7;
let sticker8;
let sticker9;
let sticker10;
let sticker11;
let sticker12;
let waitingcircle2=0;

let sketch3 = function (p) {

  p.preload = function(){
    img = p.loadImage('img/emoji_4.png');
    img2 = p.loadImage('img/emoji.png');
    sticker1 = p.loadImage('img/sticker-01.png');
    sticker2 = p.loadImage('img/sticker-02.png');
    sticker3 = p.loadImage('img/sticker-03.png');
    sticker4 = p.loadImage('img/sticker-04.png');
    sticker5 = p.loadImage('img/sticker-05.png');
    sticker6 = p.loadImage('img/sticker-06.png');
    sticker7 = p.loadImage('img/sticker-07.png');
    sticker8 = p.loadImage('img/sticker-08.png');
    sticker9 = p.loadImage('img/sticker-09.png');
    sticker10 = p.loadImage('img/sticker-10.png');
    sticker11 = p.loadImage('img/sticker-11.png');
    sticker12 = p.loadImage('img/sticker-12.png');
  }

	// Sketch code
	p.setup = function () {
		let canvas = p.createCanvas(p.windowWidth*1.1, p.windowHeight*1.1);
    canvas.parent("sketchContainer3"); // Attach the canvas to the sketch-container div
	};


  p.draw = function () {

     p.frameRate(10);

      p.fill("#05D9FF");
      p.noStroke();
     
    if (p.pmouseX === p.mouseX && p.pmouseY === p.mouseY) {
      idleTimer ++
    } else {
      idleTimer = 0;
      waitingcircle2 = 0;
      p.clear();
    }
    

    if(idleTimer >= 1300){
      waitingcircle2 =p.random(10);
      waitingcircle3 =p.random(10,50);
      p.image(img, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle3, waitingcircle3);
      waitingcircle4 =p.random(10,50);
      p.image(img2, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle4, waitingcircle4);

      waitingcircle5 =200;
      p.image(sticker1, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker2, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker3, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker4, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker5, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker6, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker7, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker8, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker9, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker10, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker11, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);
      p.image(sticker12, p.random(p.windowWidth), p.random(p.windowHeight),waitingcircle5, waitingcircle5);

      
      
   
    }
    
    p.circle(p.random(p.windowWidth),p.random(p.windowHeight), waitingcircle2);
  };


  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
	

};





let Canvas = new p5(sketch1);
let Canvas2 = new p5(sketch2);
let Canvas3 = new p5(sketch3);