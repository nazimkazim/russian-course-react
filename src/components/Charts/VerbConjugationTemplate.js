import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" { ...props } />;
}

export default function SimpleList({ set }) {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <List component="nav" aria-label="main mailbox folders">
        { set.set.map(s => (
          <ListItem button>
            <ListItemIcon>
              <BubbleChartIcon />
            </ListItemIcon>
            <ListItemText primary={s} />
          </ListItem>
        )) }

      </List>
      <Divider />
    </div>
  );
}