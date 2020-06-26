import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={ classes.root }>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={ props.image }
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { props.instruction }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <div className="tags">
                            { props.numbers && props.numbers.map((number, index) => (
                                <button key={index} className="tag is-medium" disabled={ props.correct } value={ number } onClick={ props.onClickHandler }>{ number }</button>
                            )) }
                        </div>

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" onClick={ props.onCheckHandler } disabled={ props.answer === "" } color="primary">
                    Check
                </Button> */}
                <button className={ `button is-primary ${props.isLoading && 'is-loading'}` } onClick={ props.onCheckHandler } disabled={ props.answer === "" }>
                    { props.correct && <span className="icon is-small">
                        <i className="fas fa-check"></i>
                    </span> }
                    <span>Check</span>
                </button>
                { props.gameIsFinished ? <Button size="small" color="primary" onClick={props.startAgainHandler}>
                    Start again
                </Button> : <Button size="small" disabled={ !props.correct } onClick={ props.onNextHandler } color="primary">
                        Next
                </Button> }
                {props.gameIsFinished && props.notification}
            </CardActions>
        </Card>
    );
}