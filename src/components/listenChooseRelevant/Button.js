import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StopIcon from '@material-ui/icons/Stop';import 
PlayArrowIcon from '@material-ui/icons/PlayArrow';
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons(props) {
    const classes = useStyles();

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={ classes.button }
                startIcon={ props.isPlaying ? <StopIcon /> : <PlayArrowIcon /> }
                onClick={ props.playAudio }
            >
                { props.isPlaying ? 'Stop' : 'Play' }
            </Button>
        </>
    );
}