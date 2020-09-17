import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ChipComponent(props) {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  console.log(props && props)
  return (
    <div className={classes.root}>
      <Chip
        label={props.label && props.label}
        onClick={handleClick}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}