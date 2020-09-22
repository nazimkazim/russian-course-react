import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '../Chip';
import EndGamePic from '../../images/GWFP/Lesson2.1/end-game-pic.gif';

var _ = require('lodash');

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: '0 auto'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function GuessWordFromPicture(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [disabledCheckButton, setDisabledCheckButton] = React.useState(true);
  const [disabledNextButton, setDisabledNextButton] = React.useState(true);
  const [data, setData] = useState(props.data);
  const [mixedEngPhrases, setMixedEngPhrases] = useState([]);
  const [selectedWord, setSelectedWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const [nextIsLoading, setNextIsLoading] = useState(false);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [itIsFirst, setItIsFirst] = useState(true);

  useEffect(() => {
    let newData = [];
    props.data.map((item) => {
      newData.push({
        id: item.id,
        pic: item.pic,
        phrase: item.phrase,
        eng: item.eng,
        active: false
      });
    });
    //console.log(newData);
    setData(newData);
  }, []);

  useEffect(() => {
    if (currentIndex < 10) {
      setCurrentWord(data[currentIndex].eng);
    } else {
      setGameIsFinished(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (selectedWord !== '') {
      setDisabledCheckButton(false);
    } else {
      setDisabledCheckButton(true);
    }
  }, [selectedWord]);

  useEffect(() => {
    let mixedEngPhrases = [];
    props.data && props.data.map((item) => {
      return mixedEngPhrases.push({ word: item.eng, active: false });
    });
    setMixedEngPhrases(_.shuffle(mixedEngPhrases));
  }, []);

  useEffect(() => {
    if (correctAnswer) {
      setDisabledNextButton(false);
    }
  }, [correctAnswer]);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const checkAnswer = () => {
    if (currentWord === selectedWord) {
      setItIsFirst(false);
      setCorrectAnswer(true);
      setIncorrectAnswer(false);
    } else {
      setCorrectAnswer(false);
      setIncorrectAnswer(true);
    }
  };

  const nextQuestion = () => {
    setNextIsLoading(true);
    setDisabledNextButton(true);
    setDisabledCheckButton(true);
    setSelectedWord('');
    setIncorrectAnswer(false);
    setTimeout(() => {
      setNextIsLoading(false);
      setCorrectAnswer(true);
    }, 1500);
  };

  useEffect(() => {/* 
    if (currentIndex >= data.length) {
      setCurrentIndex(0);
      console.log(currentIndex);
      setGameIsFinished(true);
    } */
    if (!nextIsLoading && !itIsFirst) {
      setCurrentIndex(currentIndex + 1);
      setCorrectAnswer(false);
    }
  }, [nextIsLoading]);

  const startAgain = () => {
    let newData = [];
    props.data.map((item) => {
      newData.push({
        id: item.id,
        pic: item.pic,
        phrase: item.phrase,
        eng: item.eng,
        active: false
      });
    });
    setData(newData);

    let mixedEngPhrases = [];
    props.data && props.data.map((item) => {
      return mixedEngPhrases.push({ word: item.eng, active: false });
    });
    setMixedEngPhrases(_.shuffle(mixedEngPhrases));
    setDisabledCheckButton(true);
    setDisabledNextButton(true);
    setSelectedWord('');
    setCurrentIndex(0);
    setCurrentWord('');
    setCorrectAnswer(false);
    setIncorrectAnswer(false);
    setNextIsLoading(false);
    setGameIsFinished(false);
    setItIsFirst(true);
  };


  return (
    <Card className={ classes.root }>
      {currentIndex >= data.length ? <span className="gwfp-end-game-title">Well done</span> : <CardHeader
        title=
        {
          <>
            <span className="strong-verb">
              { data[currentIndex].phrase && data[currentIndex].phrase.split(" ")[0] }
            </span>
            { " " }
            {data[currentIndex].phrase.split(" ")[1] }
            { " " }
            {data[currentIndex].phrase.split(" ")[2] && data[currentIndex].phrase.split(" ")[2] }
          </>
        }
      /> }
      <CardMedia
        className={ classes.media }
        image={ currentIndex < 10 ? data[currentIndex].pic : EndGamePic }
      />
      <CardContent>
        { mixedEngPhrases && mixedEngPhrases.map((phrase) => (
          <Chip label={ phrase.word } key={ phrase.word } active={ phrase.active } setSelectedWord={ setSelectedWord } setMixedEngPhrases={ setMixedEngPhrases } selectedWord={ selectedWord } currentWord={ currentWord } engPhrases={ mixedEngPhrases } selectedWord={ selectedWord } correctAnswer={ correctAnswer } gameIsFinished={ gameIsFinished } />
        )) }
      </CardContent>
      <CardActions disableSpacing>
        { !gameIsFinished ? (<><button onClick={ checkAnswer } className={ `button is-info is-rounded ${classes.margin}` } disabled={ disabledCheckButton }>Check</button>
          <button onClick={ nextQuestion } className={ `button is-success is-rounded ${nextIsLoading && 'is-loading'}` } disabled={ disabledNextButton }>Next</button></>) : <button onClick={ startAgain } className={ `button is-info is-rounded` }>Start again</button> }
        { correctAnswer && <span className="emoji">&#128170;</span> } { incorrectAnswer && <span className="emoji">&#128532;</span> }
        <IconButton
          className={ clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          }) }
          onClick={ handleExpandClick }
          aria-expanded={ expanded }
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={ expanded } timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}