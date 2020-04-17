import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
  root: {
    width: 400,
  },
  media: {
    height: 400,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  let checkBoxInput = useRef(null);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
      </CardActionArea>
      <CardActions>
        <Checkbox
        onClick={props.clickHandler}
        ref={checkBoxInput} 
        name={props.name}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </CardActions>
    </Card>
  );
}