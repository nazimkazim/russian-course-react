import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Index(props) {
  const classes = useStyles();
  const [items, setSwitch] = useState(props.data);

  const handleClick = (e) => {
    const id = e.target.id
    //console.log(e.target.id)
    const newitems = [...items].map(el => (el.id === id ? Object.assign({}, el, { turned:!el.turned }) : el))
    setSwitch(newitems)
  };
  //console.log(items);
  return (
    <div className={classes.root}>
      {items.map((item, index) => (
        <Chip
          key={index}
          avatar={<Avatar>{item.turned ? "eng" : "ru"}</Avatar>}
          onClick={handleClick}
          id={item.id}
          value={item.id}
          label={item.turned ? item.eng : item.rus}
          clickable
          color="primary"
        />
      ))}
    </div>
  );
}
