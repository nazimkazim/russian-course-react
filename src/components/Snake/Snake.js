import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import pickup from '../../data/media/bonus-points.wav';
import crawl from '../../data/media/crawl.wav';
import intro from '../../data/media/intro.wav';
import crash from '../../data/media/crash.wav';
import hornFail from '../../data/media/horn-fail.wav';
import { FaHotjar } from 'react-icons/fa';

import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from "./constants";

//let img = require('../../images/ListenChooseRelevant/Lesson1.3/Images/angela_merkel.jpg');

const App = ({ data }) => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [letters, setLetters] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [eatenLetters, setEatenLetters] = useState([]);
  const [speed, setSpeed] = useState(null);
  const [incr, setIncr] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [joinedStr, setJoinedStr] = useState("");
  const [points, setPoints] = useState(0);
  const [snakeGameSet, setSet] = useState(0);
  const [startGameBtnDisabled, setStartGameBtnDisabled] = useState(false);
  //const [showCorrectWord, setShowCorrectWord] = useState(false);
  const [eatenWords, setEatenWords] = useState([]);
  //const [isModalActive, setModalActive] = useState(false);


  useEffect(() => {
    const letters = data[snakeGameSet].set[incr].rusWord.split("").map((apple) => (
      [
        Math.floor(Math.random() * 15), Math.floor(Math.random() * 15),
        apple
      ]
    ));
    setLetters(letters);
  }, [data, incr, snakeGameSet]);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };



  const moveSnake = ({ keyCode }) => setDir(DIRECTIONS[keyCode]);

  const checkCollision = (piece, snk = snake) => {
    //console.log(piece);
    if (
      piece.x * SCALE >= CANVAS_SIZE[0] ||
      piece.x < 0 ||
      piece.y * SCALE >= CANVAS_SIZE[1] ||
      piece.y < 0
    ) {
      let crashSound = new Audio(crash);
      crashSound.play();
      let hornFailSound = new Audio(hornFail);
      //setShowCorrectWord(true);
      setTimeout(() => {
        hornFailSound.play();
      }, 2000);
      return true;
    }

    // eslint-disable-next-line no-unused-vars
    for (let segment of snk) {
      if (piece[0] === segment.x && piece[1] === segment.y) return true;
    }
    return false;
  };

  const checkLetterCollision = newSnake => {
    letters.forEach((letter, index) => {
      if (newSnake[0].x === letter[0] && newSnake[0].y === letter[1]) {
        const newLetters = [...letters];
        const eatenLetter = newLetters.splice(index, 1);
        //console.log(eatenLetter);
        setJoinedStr(joinedStr + eatenLetter[0][2]);
        //console.log(newEatenLetters)
        const newEatenLetters = [...eatenLetters];
        newEatenLetters.push(eatenLetter);
        newSnake.push([dir]);
        setSnake(newSnake);
        //console.log(newEatenLetters)
        setEatenLetters(newEatenLetters);
        verifyWords(newEatenLetters);
        setLetters(newLetters);
      }
    });
    return false;
  };


  if (incr === data[snakeGameSet].set.length) {
    setIncr(0);
    setSpeed(null);
    setGameWon(true);
    setStartGameBtnDisabled(true);
  } else {
    if (data[snakeGameSet].set[incr].rusWord.split("").length === eatenLetters.length) {
      let newEatenWords = [...eatenWords];
      newEatenWords.push(data[snakeGameSet].set[incr].rusWord);
      data[snakeGameSet].correct = true;
      setEatenWords(newEatenWords);
      setIncr(incr + 1);
      setEatenLetters([]);
      setJoinedStr("");
      let sound = new Audio(intro);
      sound.play();
    }
  }


  //console.log(incr, data.length);



  const verifyWords = (letters) => {
    letters.forEach((letter, index) => {
      //console.log(letter)
      if (data[snakeGameSet].set[incr].rusWord[index] === letter[0][2]) {
        setTimeout(() => {
          setPoints(points + 1);
        }, 0.1);
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
        //setShowCorrectWord(true);
      }

    });
  };

  const gameLoop = () => {
    let sound = new Audio(crawl);
    sound.play();
    const letter = data[snakeGameSet].set[incr].rusWord[0];
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = { x: snakeCopy[0].x + dir[0], y: snakeCopy[0].y + dir[1], letter };
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = "red";
    context.fillText(letter, newSnakeHead.x + 0.49, newSnakeHead.y + .8);
    context.font = "1px Arial";
    context.textAlign = "center";
    context.fillStyle = "red";
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
    setPoints(0);
    setIncr(0);
    setJoinedStr("");
    setEatenLetters([]);
    //setShowCorrectWord(false);
    setEatenWords([]);
    data[snakeGameSet].set.map((word) => {
      return word.correct = false;
    });
  };

  const playAgain = () => {
    setSnake(SNAKE_START);
    setLetters(letters);
    setDir([0, -1]);
    setGameOver(false);
    setPoints(0);
    setIncr(0);
    setJoinedStr("");
    setEatenLetters([]);
    //setShowCorrectWord(false);
    setSet(snakeGameSet);
    setEatenWords([]);
    setStartGameBtnDisabled(false);
    setGameOver(false);
    setGameWon(false);
    data[snakeGameSet].set.map((word) => {
      return word.correct = false;
    });
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    snake.forEach(({ x, y, letter }) => {
      context.fillStyle = "pink";
      context.fillRect(x, y, 1, 1);
      context.fillStyle = "blue";
      context.fillText(letter, x + 0.49, y + .8);
    });
    context.fillStyle = "lightblue";
    letters.forEach((letter) => {
      context.fillRect(letter[0], letter[1], 1, 1);
      context.font = "1px Arial";
      context.textAlign = "center";
      context.fillStyle = "red";
      //context.drawImage(img, 10, 10);
      context.fillText(letter[2], letter[0] + 0.49, letter[1] + .8);
      context.fillStyle = "lightblue";
    });
  }, [snake, letters, gameOver]);

  return (
    <>
      <div className="memory-game-info-container">
        <div className="memory-game-info">
          <div className="tag is-primary is-large">Points { points }</div>
        </div>
        <div className="memory-game-info">
          <div className="field">
            <div className="control">
              <div className="select is-primary">
                <select onChange={ (e) => {
                  setSet(e.target.value);
                  setEatenLetters([]);
                  setGameOver(false);
                  setGameWon(false);
                  setStartGameBtnDisabled(false);
                  setJoinedStr("");
                  setIncr(0);
                  setPoints(0)
                  setLetters(APPLE_START);
                  data[snakeGameSet].set.map((word) => {
                    return word.correct = false;
                  });
                } }>
                  { data.map((option, index) => (
                    <option key={ index } value={ index }>{ option.name }</option>
                  )) }
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="memory-game-info">
          <div className="tag is-primary is-large">Show words</div>
        </div> */}
        <div className="memory-game-info">
          <button className="button is-success" onClick={ playAgain }>
            <span className="icon is-small">
              <i className="fas fa-redo"></i>
            </span>
            <span>Start again</span>
          </button>
        </div>
        <div className="memory-game-info">
          <button className="button is-primary" disabled={ startGameBtnDisabled } onClick={ startGame }>Start Game</button>
        </div>
      </div>
      <div className="snake-container" role="button" tabIndex="0" onKeyDown={ e => moveSnake(e) }>
        <aside className=" menu snake-game-list-of-words">
          {/* <li>{ incr === data.length ? setIncr(0) : data[incr].engWord } - { showCorrectWord ? <span className="has-text-info">{ incr === data.length ? setIncr(0) : data[incr].rusWord }</span> : joinedStr }</li> */ }
          <p className="menu-label">
            Guess these words
          </p>
          <ul className="menu-list">
            { data[snakeGameSet].set.map((word, index) => (
              <li><a>{ word.engWord } - { index === incr ? joinedStr : eatenWords[index] } { word.correct && <FaHotjar /> }</a></li>
            )) }
          </ul>
        </aside >
        <canvas
          style={ { border: "1px solid black" } }
          ref={ canvasRef }
          width={ `${CANVAS_SIZE[0]}px` }
          height={ `${CANVAS_SIZE[1]}px` }
        />
        { gameOver && <div className="snake-game-over">GAME OVER!</div> }
        { gameWon && <div className="snake-game-over snake-game-won">GREAT JOB!</div> }
      </div>
    </>
  );
};

export default App;