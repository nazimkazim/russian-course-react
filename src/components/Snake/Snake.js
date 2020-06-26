import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from "./constants";

const App = ({ data }) => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [letters, setLetters] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [eatenLetters, setEatenLetters] = useState([]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    const letters = data[0].rusWord.split("").map((apple) => (
      [
        Math.floor(Math.random() * 20), Math.floor(Math.random() * 20),
        apple
      ]
    ));
    setLetters(letters);
  }, [data]);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };



  const moveSnake = ({ keyCode }) => setDir(DIRECTIONS[keyCode]);

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    // eslint-disable-next-line no-unused-vars
    for (let segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkLetterCollision = newSnake => {
    letters.forEach((letter, index) => {
      if (newSnake[0][0] === letter[0] && newSnake[0][1] === letter[1]) {
        const newLetters = [...letters];
        const eatenLetter = newLetters.splice(index, 1);
        //console.log(newEatenLetters)
        const newEatenLetters = [...eatenLetters];
        newEatenLetters.push(eatenLetter);
        //console.log(newEatenLetters)
        setEatenLetters(newEatenLetters);
        verifyWords(newEatenLetters);
        setLetters(newLetters);
        return true;
      }
    });
    return false;
  };

  const verifyWords = (letters) => {
    letters.forEach((letter,index) => {
      console.log(letter)
      if (data[0].rusWord[index] === letter[0][2]) {
        console.log("true");
      } else {
        //console.log(data[0].rusWord, letter);
        console.log('false');
        endGame();
      }
    });
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkLetterCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";
    letters.forEach((apple) => {
      context.fillRect(apple[0], apple[1], 1, 1);
      context.font = "1px Arial";
      context.textAlign = "center";
      context.fillStyle = "red";
      context.fillText(apple[2], apple[0] + 0.5, apple[1] + .3);
      context.fillStyle = "lightblue";
    });
  }, [snake, letters, gameOver]);

  return (
    <>
      <div>{ data[0].engWord }</div>
      <div className="snake-container" role="button" tabIndex="0" onKeyDown={ e => moveSnake(e) }>
        <canvas
          style={ { border: "1px solid black" } }
          ref={ canvasRef }
          width={ `${CANVAS_SIZE[0]}px` }
          height={ `${CANVAS_SIZE[1]}px` }
        />
        { gameOver && <div>GAME OVER!</div> }
      </div>
      <button onClick={ startGame }>Start Game</button>
    </>
  );
};

export default App;