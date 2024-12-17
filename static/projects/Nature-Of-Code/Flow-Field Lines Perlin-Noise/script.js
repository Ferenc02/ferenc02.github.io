/* Visual representation of one-dimensional Perlin noise */

let canvasWidth = 600;
let canvasHeight = 600;

let incrementValue = 0.05;

let scale = 20;
let cols, rows;

let zoff = 0;

let numberOfParticles = 5000;
let particles = [];

let flowField = [];

let magnitude = 1;

let showFlowField = false;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");

  frameRate(60);

  cols = floor(width / scale);
  rows = floor(height / scale);

  flowField = new Array(cols * rows);

  for (let i = 0; i < numberOfParticles; i++) {
    particles[i] = new Particle();
  }

  background(255);
}

function draw() {
  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;

      let randomAngle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let vector = p5.Vector.fromAngle(randomAngle);

      vector.setMag(magnitude);

      flowField[index] = vector;
      xoff += incrementValue;

      fill(randomAngle);
      //rect(x * scale, y * scale, scale, scale);
      stroke(0, 50);
      if (showFlowField) {
        push();
        translate(x * scale, y * scale);
        rotate(vector.heading());
        strokeWeight(1);
        line(0, 0, scale, 0);
        pop();
      }
    }
    yoff += incrementValue;

    zoff += 0.0003;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

function updateArray() {
  background(255);
  particles = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particles[i] = new Particle();
  }
}

let sliderElement = document.querySelector("#slider");
let sliderText = document.querySelector("#slider-value");

sliderElement.value = numberOfParticles;
sliderText.textContent = numberOfParticles;

sliderElement.addEventListener("input", () => {
  numberOfParticles = parseFloat(sliderElement.value);
  sliderText.textContent = numberOfParticles;

  updateArray();
});

let magnitudeSliderElement = document.querySelector("#slider2");
let magnitudeSliderText = document.querySelector("#slider-value2");

magnitudeSliderElement.addEventListener("input", () => {
  background(255);
  magnitude = parseFloat(magnitudeSliderElement.value);
  magnitudeSliderText.textContent = magnitude;
});
