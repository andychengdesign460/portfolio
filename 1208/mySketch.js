let currentScene = 1;

let canvas;

let img;

function preload() {
  img = loadImage('img/1.png');
  img_2 = loadImage('img/2.png');

}





function setup() {
  createCanvas(windowWidth, windowHeight);
}

let img_pos = 25;
let pos = 25;



function draw() {
  background(220);

  ellipse(width/2, height/2, width/10, width/10);
  


  ellipse(mouseX, mouseY, width/20, width/20);
  

  ellipse(mouseY, mouseX, width/80, width/80);
  


  ellipse((sin(frameCount/20)/2+1)*width/2, mouseY, width/40, width/40);
  

  ellipse((sin(frameCount/20)/2+1)*width/2, (cos(frameCount/20)/2+1)*height/2, width/40, width/40);


  switch (currentScene) {
    case 1:
      fill(255, 0, 0);
     
      break;
    case 2:
      fill(0, 255, 0);
      
      break;
    case 3:
      fill(0, 0, 255);
     
      break;
    case 4:
      fill(255);
      
      break;
    case 5:
      fill(255, 255, 0);
      
      break;
    default:
      break;
  }

  noStroke();



  
  rect(75,pos, 50, 50);
  describe(`black 50-by-50 rect moves up and down with vertical scroll.
    fuchsia background`);


  image(img, img_pos, 0);
  describe('Image of the underside of a white umbrella and a gridded ceiling.');
  img.resize(200, 200);
  image(img, img_pos, 0);


  image(img_2, img_pos, img_pos);
  describe('Image of the underside of a white umbrella and a gridded ceiling.');
  img_2.resize(100, 100);
  image(img_2, img_pos, img_pos);

  

}



function mouseWheel(event) {
    print(event.delta);
    //move the square according to the vertical scroll amount
    pos += event.delta;
    //uncomment to block page scrolling
    //return false;


    img_pos += event.delta;


  }



function mousePressed() {
    // Change the scene when mouse is pressed
    currentScene = (currentScene % 5) + 1;
  }


  /*function changeScene() {
    // Change the scene when button is pressed
    currentScene = (currentScene % 5) + 1;
  }*/






// p can switch to p5

let sketch1 = function (p) {
	// Sketch 1 code
	p.setup = function () {
		p.createCanvas(400, 400);
		
	};
	p.draw = function () {
		
		p.ellipse(p.mouseX, p.mouseY, 100, 100);
    p.noStroke();



        switch (currentScene) {
          case 1:
            p.fill(255, 0, 0);
           
            break;
          case 2:
            p.fill(0, 255, 0);
            
            break;
          case 3:
            p.fill(0, 0, 255);
           
            break;
          case 4:
            p.fill(255);
            
            break;
          case 5:
            p.fill(255, 255, 0);
            
            break;
          default:
            break;
        }    
	};
};

let sketch2 = function (p) {
	// Sketch 2 code
	p.setup = function () {
		p.createCanvas(400, 400);
		
		
	};
	p.draw = function () {
        
		
		    p.ellipse(p.mouseX, p.mouseY, 50, 50);

        
        p.ellipse((sin(p.frameCount)/2+1)*200, (cos(p.frameCount)/2+1)*200, 50, 50);
        p.ellipse((sin(p.frameCount)/4+1)*200, (cos(p.frameCount)/4+1)*200, 50, 50);

        p.blendMode(DIFFERENCE);
        p.fill(0, 255, 255);
        
	};

};


let sketch3 = function (p) {
	// Sketch 3 code
	p.setup = function () {
		p.createCanvas(400, 400);
		
		
	};
	p.draw = function () {
        
    p.fill(0, 255, 0);     
  
    p.blendMode(DIFFERENCE);
		p.ellipse(random(0,200),random(0,200), 50, 50);

	};

};




let currentX = 0;
let currentY = 0;

let currentSize = 20;
let finalSize = 10;
let idleTimer = 0;
const easing = 0.1;

let sketch4 = function (p) {
	// Sketch 4 code
	p.setup = function () {
		let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("sketch4Container"); // Attach the canvas to the sketch-container div
	};


  p.draw = function () {
    p.clear();
    
    if ($("body").hasClass("hover")) {
      
      p.fill("blue");
      p.noStroke();
      finalSize = 50;
      
    } else {
      
      p.fill("white");
      p.noStroke();
      finalSize = 20;
        
    }
    
    if (p.pmouseX === p.mouseX && p.pmouseY === p.mouseY) {
      idleTimer ++
    } else {
      idleTimer = 0
    }
    
    console.log(idleTimer)
    
    if(idleTimer >= 100){
      finalSize = 0
    }


    // Use lerp to calculate a new position
    currentX = p.lerp(currentX, p.mouseX, easing);
    currentY = p.lerp(currentY, p.mouseY, easing);
    currentSize = p.lerp(currentSize, finalSize, easing);
    
    p.circle(currentX, currentY, currentSize);
  };


  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
	

};

// Create instances with IDs
//let myP5 = new p5(sketch, id);
let firstCanvas = new p5(sketch1, "sketch1Container");
let secondCanvas = new p5(sketch2, "sketch2Container");
let thirdCanvas = new p5(sketch3, "sketch3Container");
let fourthCanvas = new p5(sketch4);










function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}









