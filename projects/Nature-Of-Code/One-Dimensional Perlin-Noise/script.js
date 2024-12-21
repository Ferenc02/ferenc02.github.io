/* Visual representation of one-dimensional Perlin noise */

let canvasWidth = 600;
let canvasHeight = 600;

let incrementValue = 0.01;
let start = 0;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");
}

function draw() {
  background(50);
  fill(255);

  stroke(255);
  noFill();
  beginShape();

  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);

    let y = noise(xoff) * height;

    vertex(x, y);
    xoff += incrementValue;
  }

  endShape();

  start += incrementValue;
}

let sliderElement = document.querySelector("#slider");
let sliderText = document.querySelector("#slider-value");

sliderElement.addEventListener("input", () => {
  incrementValue = parseFloat(sliderElement.value);
  sliderText.textContent = incrementValue;
});
