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
        let r = random(1);
        if (r <= .5) {
            this.x += mouseX / this.x;
            this.y += mouseY / this.y;
        } else {
            if (r < 0.4) {
            this.x++;
            } else if (r < 0.6) {
            this.x--;
            } else if (r < 0.8) {
            this.y++;
            } else {
            this.y--;
            }
        }
    }
}