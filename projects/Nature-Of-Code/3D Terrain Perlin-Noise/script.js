let canvasWidth = 600;
let canvasHeight = 600;

let fps = 60; // Frame rate for canvas

let cols, rows; // Number of columns and rows for the terrain grid

//scale of each cell
let scl = 25; // Scale of each cell in the grid (size of each square)

let w = 1500; // Total width of the terrain
let h = 1600; // Total height of the terrain

let terrain = [[]]; // 2D array to store the height of each cell in the grid

let flying = 0; // Offset for the Perlin noise (used for the "flying" effect)
let target_flying = 0; // (Unused, possibly for future expansion)
const fly_step = -0.03; // Step size for the flying effect (forward movement)

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
  canvas.parent("canvas");

  frameRate(fps);

  // Calculate the number of columns and rows based on terrain dimensions and cell scale
  cols = floor(w / scl);
  rows = floor(h / scl);

  // Initialize the terrain array with zero values
  terrain = [...Array(cols)].map(() => Array(rows).fill(0));
}

function draw() {
  let yoff = flying;

  // Generate terrain heights using Perlin noise
  for (let y = 0; y < rows; y++) {
    let xoff = 0; // Starting offset for Perlin noise along the x-axis
    for (let x = 0; x < cols; x++) {
      // Use perlin noise in p5js to generate random values from -100 to 100
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(50);

  stroke(255);
  // strokeWeight(1);
  strokeWeight(0.5);
  noFill();

  // Rotate the grid
  rotateX(PI / 3);

  // Center the terrain grid in the canvas
  translate(-w / 2, -h / 2);

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);

    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }

    endShape();
  }

  flying += fly_step;
}
