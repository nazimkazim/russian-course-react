const CANVAS_SIZE = [300, 300];
const SNAKE_START = [
  {
    x:8,
    y:7,
    letter:''
  },{
    x:8,
    y:8,
    letter:''
  }
];
const APPLE_START = [8, 3];
const SCALE = 15;
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
