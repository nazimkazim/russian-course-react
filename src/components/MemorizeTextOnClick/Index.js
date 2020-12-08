import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { speakStr } from '../Pronunciation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    padding: '5px',
    maxWidth: '375px',
    minHeight: '100px',
    "& > *": {
      whiteSpace: 'normal',
      fontSize: '18px'
    }
  }
}));

export default function Index({ data, randomMode, randSent }) {
  const classes = useStyles();
  const [items, setSwitch] = useState(data);
  const [randomItem, setRandomItemSwitch] = useState([]);

  useEffect(() => {
    setRandomItemSwitch(randSent);
  }, [randSent]);

  const handleClick = (e) => {
    const id = e.target.id;
    //console.log(e.target.id)
    const newitems = [...items].map(el => (el.id === id ? Object.assign({}, el, { turned: !el.turned }) : el));
    setSwitch(newitems);
  };

  const handleClickRandom = (e) => {
    const id = e.target.id;
    //console.log(id);
    const newObj = id === randSent.id && Object.assign({}, randSent, { turned: !randSent.turned });
    setRandomItemSwitch(newObj);
  };

  console.log(randomItem);

  return (
    <div className={ classes.root }>
      {!randomMode && items && items.map((item, index) => (
        <Chip
          key={ index }
          className={ classes.chip }
          size="medium"
          variant={ !item.turned ? 'default' : 'outlined' }
          avatar={ <Avatar onClick={ !item.turned ? speakStr(item.rus, 'ru-Ru') : undefined }>{ item.turned ? "eng" : "ru" }</Avatar> }
          onClick={ handleClick }
          id={ item.id }
          label={ item.turned ? item.eng : item.rus }
          clickable
          color="primary"
        />
      )) }

      {randomMode && (
        <Chip
          key={ randomItem.id }
          className={ classes.chip }
          size="medium"
          variant={ !randomItem.turned ? 'default' : 'outlined' }
          avatar={ <Avatar onClick={ !randomItem.turned ? speakStr(randomItem.rus, 'ru-Ru') : undefined }>{ randomItem.turned ? "eng" : "ru" }</Avatar> }
          onClick={ handleClickRandom }
          id={ randomItem.id }
          label={ randomItem.turned ? randomItem.eng : randomItem.rus }
          clickable
          color="primary"
        />
      ) }
    </div>
  );
}


