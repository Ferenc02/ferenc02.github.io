/* Visual representation of one-dimensional Perlin noise */

let canvasWidth = 600;
let canvasHeight = 600;

let incrementValue = 0.01;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");

  pixelDensity(1);
}

function draw() {
  let yoff = 0;

  loadPixels();

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      let randomBrightness = noise(xoff, yoff) * 255;

      pixels[index + 0] = randomBrightness;
      pixels[index + 1] = randomBrightness;
      pixels[index + 2] = randomBrightness;
      pixels[index + 3] = 255;

      xoff += incrementValue;
    }
    yoff += incrementValue;
  }

  updatePixels();
}

let sliderElement = document.querySelector("#slider");
let sliderText = document.querySelector("#slider-value");

sliderElement.addEventListener("input", () => {
  incrementValue = parseFloat(sliderElement.value);
  sliderText.textContent = incrementValue;
});
