import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity={props.type}>{props.message}</Alert>
    </div>
  );
}