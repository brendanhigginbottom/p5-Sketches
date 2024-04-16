let randomCounts = [];

let total = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < total; i+=1) {
        randomCounts[i] = 0;
    }
};

function draw() {
    background(255);

    let index = floor(random(randomCounts.length));
    randomCounts[index]+=1;
    
    stroke(0);
    fill(127);

    let w = width / randomCounts.length;
    for (let j = 0; j < randomCounts.length; j+=1) {
        rect(j * w, height - randomCounts[j], w-1, randomCounts[j]);
    }
}