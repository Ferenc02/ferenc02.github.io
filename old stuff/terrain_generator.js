let fps = 60;

let cols, rows;

let canvas_width = 600;
let canvas_height = 800;

//scale of each cell
let scl = 25;

let w = 1500;
let h = 2000;

let terrain = [[]];

let flying = 0;
let target_flying = 0;
const fly_step = -0.01; // distance to move forward
const easing = 1; // controls the smoothness of the transition

let debug_element = document.querySelector("p");

// Event listener for hover on navbar items
/*
document.querySelectorAll(".navbar-item").forEach((item) => {
  item.addEventListener("mouseenter", () => fly_forward());
});*/

let lastKnownScrollPosition = 0;
let ticking = false;

/*
document.addEventListener("wheel", (event) => {
  lastKnownScrollPosition = window.scrollY;

  // Determine scroll direction using deltaY
  let scroll_delta = event.deltaY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (scroll_delta > 0) {
        // Scroll down, move backward
        fly_backward();
      } else if (scroll_delta < 0) {
        // Scroll up, move forward
        fly_forward();
      }
      ticking = false;
    });

    ticking = true;
  }
});
*/

function setup() {
  let canvas = createCanvas(canvas_width, canvas_height, WEBGL);
  canvas.parent("#terrain-canvas");
  frameRate(fps);

  cols = floor(w / scl);
  rows = floor(h / scl);

  terrain = [...Array(cols)].map(() => Array(rows).fill(0));
}

function fly_forward() {
  //Fly smoothly some meters forward
  target_flying += fly_step;

  //flying -= 0.1;
}
function fly_backward() {
  //Fly smoothly some meters backward
  target_flying -= fly_step;
}

function draw() {
  //flying -= 0.1;

  // Update animation progress
  // Update animation progress
  flying = lerp(flying, target_flying, easing);

  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      // Use perlin noise in p5js to generate random values from -100 to 100
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background("#fff5f5");

  stroke("#38353f");
  // strokeWeight(1);
  strokeWeight(1);
  noFill();

  // Rotate the grid
  rotateX(PI / 3);

  translate(-w / 2, -h / 2);

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);

    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }

    endShape();
  }

  fly_forward();
}

// **Debounce function to limit scroll events**
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
