function setup() {
    createCanvas(640, 320);
    background(255);
}

function draw() {
    let x = randomGaussian(320, 90);
    let y = randomGaussian(160, 50);
    noStroke();
    fill(x, y, x - y);
    circle(x, y, 18);
}