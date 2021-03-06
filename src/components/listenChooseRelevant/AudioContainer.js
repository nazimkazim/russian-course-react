import React, { Component } from 'react';
import Card from './Card';
import Button from './Button';
import correct from '../../data/media/correct.wav';
import denied from '../../data/media/denied.mp3';
import Notification from '../Notification';
import ProgressBar from '../ProgressBar';
var _ = require('lodash');



let audio = new Audio();

class AudioContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            images: [],
            index: 0,
            checkedItems: new Map(),
            correct: false,
            isPlaying: false,
            error: false,
            activityIsFinished: false,
            isSuccessNotifictionShown:false
        };

    }

    componentDidMount() {

        const arrImages = this.props.data.map((item) => {
            let arr = [];
            arr.push(item.picture);
            return arr;
        });

        //console.log(arrImages)
        this.setState({
            images: _.shuffle(arrImages.flat(Infinity))
        });

    }

    showImages = () => {
        this.state.images && this.state.images.map((image) => (
            <div>
                <figure class="image is-128x128">
                    <img src={ image.src } alt="" />
                </figure>
                <span>{ image.name }</span>
            </div>
        ));
    };

    handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    };

    onCheckHandler = () => {
        /* function checkTrue(item) {
            return item.value === true;
        }
        const filteredItems = this.state.checkedItems.filter(checkTrue) */
        //console.log(this.state.checkedItems.value())
        let arr = [];
        // eslint-disable-next-line no-unused-vars
        for (let [key, value] of this.state.checkedItems) {
            let obj = {
                value: key,
                bool: value
            };
            arr.push(obj);
        }

        //console.log(arr);
        let filteredArr = arr.filter((el) => {
            return el.bool === true;
        });
        //console.log(filteredArr);
        let arrWithAnswers = [];
        filteredArr.map((el) => {
            return arrWithAnswers.push(el.value);
        });
        //console.log(arrWithAnswers);
        //console.log(this.props.data[this.state.index].answers.sort());
        if (_.isEqual(arrWithAnswers.sort(), this.props.data[this.state.index].answers.sort())) {
            let sound = new Audio(correct);
            sound.play();
            this.update();
            this.setState({
                index: this.state.index + 1, checkedItems: new Map(), isPlaying: false
            }, () => {
                if (this.state.index === this.props.data.length) {
                    this.setState({
                        activityIsFinished: true, isSuccessNotifictionShown:true
                    });
                }

                setTimeout(() => {
                    this.setState({
                        isSuccessNotifictionShown: false
                    });
                }, 2000);

            });


            audio.src = this.props.data[this.state.index].audio;
            audio.pause();
            //console.log("true");
        } else {
            let sound = new Audio(denied);
            sound.play();
            this.setState({
                error: true
            });

            setTimeout(() => {
                this.setState({
                    error: false
                });
            }, 2000);
        }
    };

    update() {
        const arrImages = this.props.data.map((item) => {
            let arr = [];
            arr.push(item.picture);
            return arr;
        });

        //console.log(arrImages)
        this.setState({
            images: _.shuffle(arrImages.flat(Infinity))
        });
    }

    onPlayHandler = () => {
        audio.src = this.props.data[this.state.index].audio;
        audio.play();
        this.setState({
            isPlaying: true
        });

        audio.addEventListener("ended", () => {
            audio.currentTime = 0;
            this.setState({
                isPlaying: false
            });
        });
    };

    onPauseHandler = () => {
        audio.src = this.props.data[this.state.index].audio;
        //let aud = new Audio(this.props.data[this.state.index].audio);
        audio.currentTime = 0;
        audio.pause();
        //aud.setAttribute("ref", `${this.myRef}`);
        this.setState({
            isPlaying: false
        });
        //this.refs.audio.pause(); 
        //x.pause(); 
        //console.log(aud)
    };

    onStartAgainHandler = () => {
        this.update();
        this.setState({
            index: 0,
            checkedItems: new Map(),
            correct: false,
            isPlaying: false,
            error: false,
            activityIsFinished: false,
            isSuccessNotifictionShown: false
        });
    };

    render() {
        //console.log(this.props.data)
        //console.log(this.state.images)
        //console.log(this.state.checkedItems.size);
        //console.log(this.props.data.length, this.state.index);
        return (
            <div>
                { this.state.activityIsFinished ? '' : (<Button playAudio={ this.state.isPlaying ? this.onPauseHandler : this.onPlayHandler } isPlaying={ this.state.isPlaying } />
                ) }
                <div className="columns is-vcentered is-multiline">
                    { this.state.images && this.state.images.map((image, index) => (
                        <div className="column is-3" key={ image.name + ' ' + index }>
                            <Card image={ image.src } clickHandler={ this.handleChange } name={ image.name } />
                        </div>
                    )) }
                </div>
                { this.state.error && (<Notification message="Try again" type="error" />
                ) }
                { this.state.isSuccessNotifictionShown && (<Notification message="Greate job!" type="success" />
                ) }
                <hr />
                { this.state.activityIsFinished ? (<button className="button is-success" onClick={ this.onStartAgainHandler }>Start again</button>) : (<button className="button is-info" disabled={ this.state.checkedItems.size <= 0 } onClick={ this.onCheckHandler }>Check</button>) }
                <hr />
                <ProgressBar max={ this.props.data.length } value={ this.state.index } />
            </div>
        );
    }
}

export default AudioContainer;
