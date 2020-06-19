import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

let audio = new Audio();

export default function IconLabelButtons(props) {
    const classes = useStyles();
    const [isPlaying, playToggle] = useState(false)

    const onPlayHandler = () => {
        audio.src = props.audio;
        audio.play();
        playToggle(true)

        audio.addEventListener("ended", () => {
            audio.currentTime = 0;
            playToggle(false)
        });
    };

    const onPauseHandler = () => {
        audio.src = props.audio;
        audio.currentTime = 0;
        audio.pause();
        playToggle(false)
        
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={ classes.button }
                startIcon={ isPlaying ? <StopIcon /> : <PlayArrowIcon /> }
                onClick={ isPlaying ? onPauseHandler : onPlayHandler }
            >
                { props.isPlaying ? 'Stop' : 'Play' }
            </Button>
        </>
    );
}