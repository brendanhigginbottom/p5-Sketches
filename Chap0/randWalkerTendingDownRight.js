let walker;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    walker = new Walker;
}

function draw() {
    walker.step();
    walker.show();
}

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = width / 2;
    }

    show() {
        stroke(0);
        circle(this.x, this.y, floor(random(1, 30)));
    }

    step() {
        let xstep = random(-1, 1.5);
        let ystep = random(-1, 1.5);

        this.x += xstep;
        this.y += ystep;
    }
}