import React, { Component } from 'react';
import correct from '../data/media/correct.wav';
import denied from '../data/media/denied.mp3';
import type from '../data/media/type.wav';
import ProgressBar from './ProgressBar';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

var _ = require('lodash');


const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
};


class MatchTranscriptedWordToPicture extends Component {
    constructor (props) {
        super(props);

        this.state = {
            index: 0,
            nameGuessed: [],
            data: '',
            wordIndex: 0,
            disabled: false,
            nameIsCorrect: false,
            activityIsFinished: false
        };


    }

    componentDidMount() {
        let arr = [];
        let dashedName = [];

        this.props.data.map((item) => {
            let obj = {
                picture: item.picture,
                engName: item.engName,
                engCompany: item.companyEng,
                rusCompany: item.companyRus,
                rusName: item.rusName,
                scrambleLetters: this.randomizeLetters(item.companyRus, item.rusName),
                correctAnswer: item.rusName + ", " + item.companyRus,
                dashedWord: this.dashedWord(item.rusName, item.companyRus)
            };

            return (arr.push(obj), dashedName.push(this.dashedWord(item.rusName, item.companyRus)));

        });

        this.setState({
            data: arr, nameGuessed: dashedName[this.state.index]
        });
    }




    dashedWord(str1, str2) {
        let str = str1 + ", " + str2;
        let composed = " ";
        str.split("").map((item) => composed += "_ ");
        return composed.trim();

    }

    letterUnderlines(word) {
        return word;
    }

    handleGuess = (evt) => {
        let ltr = evt.target.value;
        let typing = new Audio(type);
        typing.play();
        console.log(ltr);

        this.setState(prevState => {
            const updatedState = prevState.nameGuessed.substring(0, this.state.wordIndex) + ltr + prevState.nameGuessed.substring(this.state.wordIndex + 2);
            return ({
                nameGuessed: updatedState, wordIndex: this.state.wordIndex + 1
            });
        }, () => {
            if (this.state.wordIndex === this.state.nameGuessed.length) {
                this.setState({
                    disabled: true
                });
            }
        });

    };

    removeLetters = () => {
        //console.log("clicked")
        let typing = new Audio(type);
        typing.play();
        this.setState(prevState => {
            let part1 = prevState.nameGuessed.substring(0, prevState.wordIndex - 1);
            let part2 = prevState.nameGuessed.substring(prevState.wordIndex, prevState.nameGuessed.length);
            let updatedState = part1 + " _" + part2;

            return ({
                nameGuessed: updatedState, wordIndex: this.state.wordIndex - 1
            });
        }, () => {
            if (this.state.wordIndex !== this.state.nameGuessed[this.state.index].length) {
                this.setState({
                    disabled: false
                });
            }
        });




    };

    randomizeLetters(str1, str2) {
        let wordSplitted1 = str1.split('');
        let wordSplitted2 = str2.split('');
        let arr = [wordSplitted1, wordSplitted2, ","].flat();
        let shuffled = _.shuffle(arr);
        return shuffled;
    }

    checkAnswer = () => {
        if (this.state.nameGuessed === this.state.data[this.state.index].correctAnswer.trim()) {
            let audio = new Audio(correct);
            audio.play();
            this.setState({
                nameIsCorrect: true, index: this.state.index + 1
            });
            this.update();
            if (this.state.index === this.state.data.length - 1) {
                this.setState({
                    activityIsFinished: true, index: 0
                });
            }

        } else {

            let audio = new Audio(denied);
            audio.play();

        }


    };

    update() {
        let dashedName = [];
        this.props.data.map((item) => {
            return (dashedName.push(this.dashedWord(item.rusName, item.companyRus)));
        });
        this.setState({
            nameGuessed: dashedName[this.state.index + 1], wordIndex: 0, disabled: false, nameIsCorrect: false
        });
    }

    startAgain = () => {
        console.log("cliked");
        let dashedName = [];
        this.props.data.map((item) => {
            return (dashedName.push(this.dashedWord(item.rusName, item.companyRus)));
        });
        this.setState({
            index: 0, nameGuessed: dashedName[this.state.index], wordIndex: 0, disabled: false, nameIsCorrect: false, activityIsFinished: false
        });
    };

    render() {
        console.log(this.state.index, this.state.data.length);
        return (
            <>
                { this.props.data &&
                        <StyleRoot>
                            <div className="card mtwp-card-container" style={ styles.bounce }>
                                { this.state.activityIsFinished ? (
                                    <div className="card-content">
                                        <div className="mtwp-winner-title">Good Job</div>
                                        <div className="has-text-centered">
                                            <button className="button mtwp-winner-button is-success" onClick={ this.startAgain }>
                                                <span className="icon is-small">
                                                    <i className="fas fa-redo"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>) : (
                                        <>
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img src={ this.props.data[this.state.index].picture } alt="" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">{ this.props.data[this.state.index].engName }</p>
                                                        <p className="subtitle is-6">{ this.props.data[this.state.index].companyEng }</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">{ this.state.nameGuessed && this.state.nameGuessed }
                                                            <button className="button is-small" onClick={ this.removeLetters } disabled={ this.state.wordIndex <= 0 }>
                                                                <span className="icon is-small">
                                                                    <i className="fas fa-backspace"></i>
                                                                </span>
                                                            </button>
                                                        </p>
                                                        { this.state.disabled && (<button onClick={ this.checkAnswer } className={ `button is-small ${this.state.nameIsCorrect && 'is-success'}` }>
                                                            <span className="icon is-small">
                                                                <i className="fas fa-check-circle"></i>
                                                            </span>
                                                        </button>) }
                                                        <p className="subtitle is-6"></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <div className="tags">{ this.state.data[this.state.index] && this.state.data[this.state.index].scrambleLetters.map((letter,i) => (
                                                            <button disabled={ this.state.disabled } className="tag is-dark is-light is-medium" key={i} value={ letter } onClick={ this.handleGuess } styles={ { cursor: 'pointer' } }>{ letter }</button>
                                                        )) }</div>
                                                        <ProgressBar value={ this.state.index } max={ this.state.data.length - 1 } />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) }

                            </div>
                        </StyleRoot>
                }
            </>
        );
    }
}

export default MatchTranscriptedWordToPicture;