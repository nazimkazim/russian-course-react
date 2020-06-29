import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import pickup from '../../data/media/bonus-points.wav';
import intro from '../../data/media/intro.wav';
import crash from '../../data/media/crash.wav';
import hornFail from '../../data/media/horn-fail.wav';
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
  const [incr, setIncr] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [joinedStr, setJoinedStr] = useState("");
  const [points, setPoints] = useState(0);
  const [showCorrectWord, setShowCorrectWord] = useState(false);


  useEffect(() => {
    const letters = data[incr].rusWord.split("").map((apple) => (
      [
        Math.floor(Math.random() * 20), Math.floor(Math.random() * 20),
        apple
      ]
    ));
    setLetters(letters);
  }, [data, incr]);

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
    ) {
      let crashSound = new Audio(crash);
      crashSound.play();
      let hornFailSound = new Audio(hornFail);
      setShowCorrectWord(true)
      setTimeout(() => {
        hornFailSound.play();
      }, 2000);
      return true;
    }

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
        console.log(eatenLetter);
        setJoinedStr(joinedStr + eatenLetter[0][2]);
        //console.log(newEatenLetters)
        const newEatenLetters = [...eatenLetters];
        newEatenLetters.push(eatenLetter);
        //console.log(newEatenLetters)
        setEatenLetters(newEatenLetters);
        verifyWords(newEatenLetters);
        setLetters(newLetters);
      }
    });
    return false;
  };

  if (data[incr].rusWord.split("").length === eatenLetters.length) {
    setIncr(incr + 1);
    let sound = new Audio(intro);
    sound.play();
    setEatenLetters([]);
    setJoinedStr("");
  }

  const verifyWords = (letters) => {
    letters.forEach((letter, index) => {
      //console.log(letter)
      if (data[incr].rusWord[index] === letter[0][2]) {
        //setPoints(points + 1)
        let sound = new Audio(pickup);
        sound.play();
        return true;
      } else {
        endGame();
        let crashSound = new Audio(crash);
        crashSound.play();
        let hornFailSound = new Audio(hornFail);
        setTimeout(() => {
          hornFailSound.play();
        }, 2000);
        setShowCorrectWord(true)
      }

    });
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    //console.log(snakeCopy)
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
      context.fillText(apple[2], apple[0] + 0.49, apple[1] + .8);
      context.fillStyle = "lightblue";
    });
  }, [snake, letters, gameOver]);

  return (
    <>
      <div className="memory-game-info-container">
        <div className="memory-game-info">
  <div className="tag is-large is-primary">{ data[incr].engWord } - {showCorrectWord ? <span className="has-text-info">{data[incr].rusWord}</span> : joinedStr }</div>
        </div>
        <div className="memory-game-info">
          <div className="tag is-primary is-large">Points { points }</div>
        </div>
        <div className="memory-game-info">
          <button className="button is-primary" onClick={ startGame }>Start Game</button>
        </div>
      </div>
      <div className="snake-container" role="button" tabIndex="0" onKeyDown={ e => moveSnake(e) }>
        <canvas
          style={ { border: "2px solid black" } }
          ref={ canvasRef }
          width={ `${CANVAS_SIZE[0]}px` }
          height={ `${CANVAS_SIZE[1]}px` }
        />
        { gameOver && <div>GAME OVER!</div> }
      </div>
    </>
  );
};

export default App;