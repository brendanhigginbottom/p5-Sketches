let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker;
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() { 
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    stroke(0);
    circle(this.x, this.y, floor(random(20)));
  }
  step() {
    // const choice = floor(random(4));
    // switch(choice) {
    //   case 0:
    //     this.x+=1;
    //     break;
    //   case 1:
    //     this.x-=1;
    //     break;
    //   case 2:
    //     this.y+=1;
    //     break;
    //   case 3:
    //     this.y-=1;
    //  }

    let xstep = random(-1, 1);
    let ystep = random(-1, 1);

    this.x += xstep;
    this.y += ystep;
  }
}


