let canvasWidth = 600;
let canvasHeight = 600;

let cells = [];
let widthOfCells = 3;
let totalCells = 0;

let y = 0;

let ruleToApply = 126;

let linesPerFrame = 5;

// Some basic calculations
//   91 % 128 = 0
//   91 % 64 = 1
//   91 - 64 = 27 % 32 = 0
//   27 % 16 = 1
//   27 - 16 = 11 % 8 = 1
//   3 % 4 = 0
//   3 % 2 = 1
//   1 % 1 = 1
//
//   0 1 0 1 1 0 1 1
//
//
//

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");
  frameRate(60);

  totalCells = width / widthOfCells;

  clearCells(); // Used for instantiating the cells

  applyRule(); // Used for applying the rule to the cells
}

function draw() {
  if (y < height) {
    fill(255);
    for (let n = 0; n < linesPerFrame; n++) {
      // Draw multiple lines in one frame

      for (let i = 0; i < cells.length; i++) {
        let x = i * widthOfCells;
        noStroke();
        fill(cells[i] === 1 ? 0 : 255);
        square(x, y, widthOfCells);
      }

      y += widthOfCells;

      let nextCells = [];

      // Calculate the next generation of cells
      for (let i = 0; i < cells.length; i++) {
        let left = cells[(i - 1 + cells.length) % cells.length];
        let right = cells[(i + 1 + cells.length) % cells.length];
        let state = cells[i];
        applyRule();
        let newState = calculateState(left, state, right);
        nextCells[i] = newState;
      }
      cells = nextCells;
    }
  }
}

// Hashmap to store the rules for the cellular automata
let rules = new Map([
  ["111", 0],
  ["110", 0],
  ["101", 0],
  ["100", 0],
  ["011", 0],
  ["010", 0],
  ["001", 0],
  ["000", 0],
]);

// Convert decimal to binary and pad with 0 to get 8 bits
function decimalToBinary(decimal) {
  return decimal.toString(2).padStart(8, "0"); // To get 8 bits of binary
}

// function to clear the cells and set the middle cell to 1
function clearCells() {
  for (let i = 0; i < totalCells; i++) {
    cells[i] = 0;
  }
  cells[floor(totalCells / 2)] = 1;
  y = 0;
}

// function to apply the rule to the cells
function applyRule() {
  let binary = decimalToBinary(ruleToApply);
  let count = 0;
  rules.forEach((value, key, index) => {
    rules.set(key, parseInt(binary[count]));
    count++;
  });
}

// function to calculate the state of the cell based on the left, middle and right cell
function calculateState(left, middle, right) {
  let key = `${left}${middle}${right}`;
  return rules.get(key);
}

// Slider to change the rule
let sliderElement = document.querySelector("#slider");
let sliderText = document.querySelector("#slider-value");

sliderElement.addEventListener("input", (e) => {
  ruleToApply = parseInt(e.target.value);
  sliderText.innerText = ruleToApply;

  applyRule();
  clearCells();
  background(255);
  //generatePattern();
});

let sliderElement2 = document.querySelector("#slider2");
let sliderText2 = document.querySelector("#slider-value2");

sliderElement2.addEventListener("input", (e) => {
  widthOfCells = parseInt(e.target.value);
  sliderText2.innerText = widthOfCells;

  totalCells = width / widthOfCells;
  applyRule();
  clearCells();
  background(255);
});
