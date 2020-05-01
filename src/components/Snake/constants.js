const CANVAS_SIZE = [400, 400];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 20;
const SPEED = 200;
const DIRECTIONS = {
  87: [0, -1], // up
  83: [0, 1], // down
  65: [-1, 0], // left
  68: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};
