let canvasWidth = 600;
let canvasHeight = 600;

let originalBranchLength = 0; // Start with a length of 0
let targetBranchLength = 100; // Final branch length to grow towards

let angleOfBranches;

// Constants for the fractal tree
let maximumBranches = 6; // Maximum number of branches
let numberOfTrees = 20; // Number of trees to draw

// Arrays to store random values for the trees
let randomStartingPositions = new Array(numberOfTrees);
let randomBranchLengths = new Array(numberOfTrees);
let randomBranchHeights = new Array(numberOfTrees); // Heights of the trees

// Perlin noise offset
let xoff = 0;

// Random seed value for the trees
let randomSeedValue = 120;

// Flag to check if the user has interacted with the slider
let interactedWithSlider = false;

// Easing variables
let easeProgress = 0;
let easingSpeed = 0.01;

let growthProgress = 0; // Progress for branch growth
let growthSpeed = 0.01;

//  Boolean to check if the growth is halfway so the angle can be animated
let growthHalfway = false;

// Boolean to check if the tree has finished growing
let finishedGrowing = false;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");

  // Set the angle of the branches to 0
  angleOfBranches = radians(0);

  // Generate random starting positions for the trees by using perlin noise for more natural randomness
  for (let i = 0; i < numberOfTrees; i++) {
    randomBranchLengths[i] = (noise(xoff) * height) / 3;
    randomBranchHeights[i] = (noise(xoff + 100) * height) / 3; // Random tree heights
    xoff += 0.5;
  }

  randomSeedValue = random(1000);
}

function draw() {
  if (!finishedGrowing) {
    background(0);
    stroke(255);

    strokeWeight(2);

    randomSeed(randomSeedValue);

    // Draw multiple trees with random starting positions
    for (let i = 0; i < numberOfTrees; i++) {
      stroke(random(255), random(255), random(255));
      drawFractalTree(
        random(width),
        height,
        (originalBranchLength * randomBranchHeights[i]) / targetBranchLength
      );
    }

    // Animate the angle with easing
    if (!interactedWithSlider && growthHalfway) {
      if (easeProgress < 1) {
        easeProgress += easingSpeed; // Increment progress
        angleOfBranches = radians(25) * easeInOut(easeProgress); // Apply easing function
      } else {
        finishedGrowing = true;
      }
    }

    // Animate the first branch length growth with ease-out
    if (originalBranchLength < targetBranchLength) {
      growthProgress += growthSpeed;
      originalBranchLength = targetBranchLength * easeOut(growthProgress); // Smooth growth

      // Check if the growth is halfway so the angle can be animated
      if (growthProgress >= 0.5 && !growthHalfway) {
        growthHalfway = true;
      }
    }
  }
}

// Easing function: cubic ease-in-out
function easeInOut(t) {
  if (t <= 0.5) {
    return 2 * t * t; // Ease-in
  } else {
    return 1 - 2 * (1 - t) * (1 - t); // Ease-out
  }
}
// Easing function: cubic ease-out
function easeOut(t) {
  return 1 - Math.pow(1 - t, 3); // Cubic ease-out
}
// Easing function: cubic ease-in
function easeIn(t) {
  return Math.pow(t, 3); // Cubic ease-in
}

//  Function to draw the fractal tree
function drawFractalTree(startX, startY, branchLength) {
  push(); // Save the current drawing state
  translate(startX, startY); // Move to the starting position for this tree
  branch(branchLength); // Draw the fractal tree
  pop(); // Restore the previous drawing state
}

// Recursive function to draw the branches of the fractal tree
function branch(length) {
  if (length < 2) return; // Stop drawing when the branch is too small

  line(0, 0, 0, -length);

  translate(0, -length);

  if (length > maximumBranches) {
    push();

    rotate(angleOfBranches);
    branch(length * 0.67); // Make the branch shorter
    pop();

    push();
    rotate(-angleOfBranches);
    branch(length * 0.67); // Make the branch shorter
    pop();
  }
}

let sliderElement = document.querySelector("#slider");
let sliderText = document.querySelector("#slider-value");

sliderElement.addEventListener("input", (e) => {
  interactedWithSlider = true;
  finishedGrowing = false;
  let angleInDegrees = parseInt(e.target.value);
  angleOfBranches = radians(angleInDegrees);
  sliderText.textContent = angleInDegrees;
});

// Add mouseup event listener for desktop
sliderElement.addEventListener("mouseup", () => {
  finishedGrowing = true;
});

// Add touchend event listener for mobile
sliderElement.addEventListener("touchend", () => {
  finishedGrowing = true;
});

// Button to reset the tree
let resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
  originalBranchLength = 0;
  growthProgress = 0;
  easeProgress = 0;
  growthHalfway = false;
  finishedGrowing = false;
  interactedWithSlider = false;
  randomSeedValue = random(1000);
  angleOfBranches = radians(0);
});
