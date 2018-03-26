function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    frameRate(.75);
}

function draw() { 
    background(105,15,129);
    //line following mouse
    for (i = -10; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(40,70)) {
  //custom shape 
        stroke(137,7,132);
        strokeWeight(.5);
            line(i,j+15,i+random(15,25),j-5);
        }
    }
       for (i = -10; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(10,50)) {
  //custom shape 
        stroke(165,45,45);
        strokeWeight(.5);
            line(i,j+20,i+random(10,20),j-10);
        }
    }
    
    for (i = -10; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(30,70)) {
  //custom shape 
        stroke(200,70,70);
        strokeWeight(.5);
            line(i,j+25,i+random(10,20),j-15);
        }
    }
    for (i = -15; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(40,50)) {
  //custom shape 
            stroke(210,80,80);
            strokeWeight(.5);
            line(i,j+20,i+random(8),j-10);
        }
    }
    for (i = -10; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(30,60)) {
  //custom shape 
            stroke(220,100,100);
            strokeWeight(.5);
            line(i,j+15,i+random(-5,7),j-15);
        }
    }
    for (i = -15; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(40,50)) {
            stroke(235,120,120);
            strokeWeight(.5);
            line(i,j+10,i+random(-10),j-20);
        }
    }
    for (i = -10; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(20,70)) {
      //custom shape 
            stroke(240,140,140);
            strokeWeight(.5);
            line(i,j+15,i+random(-15,-5),j-15);
        }
    }
    for (i = -15; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(40,50)) {
            stroke(245,150,155);
            strokeWeight(.5);
            line(i,j+10,i+random(-20,-10),j-20);
        }
    }
    for (i = -15; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(20,40)) {
            stroke(255,200,205);
            strokeWeight(.5);
            line(i,j+10,i+random(-30,-20),j-20);
        }
    }
}