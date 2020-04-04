import React, { Component } from 'react';
var _ = require('lodash');


class MatchTranscriptedWordToPicture extends Component {
    constructor (props) {
        super(props);

        this.state = {
            index: 1,
            guessed: "_ _ _ _ _ _ _ _ _ _",
            wordIndex: 0,
            companyRus: '',
            rusName: '',
            randomLetters: [],
            disabled: false
        };


    }

    componentDidMount() {
        let splittedCompany = this.props.data[this.state.index].companyRus.trim();
        let splittedName = this.props.data[this.state.index].rusName.trim();
        let randomLetters = this.randomizeLetters(this.props.data[this.state.index].companyRus, this.props.data[this.state.index].rusName);
        this.setState({
            companyRus: splittedCompany, rusName: splittedName, randomLetters
        });
    }

    letterUnderlines(word) {
        return word;

    }

    handleGuess = (evt) => {
        let ltr = evt.target.value;
        console.log(ltr);

        this.setState(prevState => {
            const updatedState = prevState.guessed.substring(0, this.state.wordIndex) + ltr + prevState.guessed.substring(this.state.wordIndex + 2);
            return ({
                guessed: updatedState, wordIndex: this.state.wordIndex + 1
            });
        }, () => {
            if (this.state.wordIndex === this.state.guessed.length) {
                this.setState({
                    disabled: true
                });
            }
        });

    };

    removeLetters = () => {
        //console.log("clicked")
        this.setState(prevState => {
            let part1 = prevState.guessed.substring(0, prevState.wordIndex - 1);
            let part2 = prevState.guessed.substring(prevState.wordIndex, prevState.guessed.length);
            let updatedState = part1 + " _" + part2;

            return ({
                guessed: updatedState, wordIndex: this.state.wordIndex - 1
            });
        });

        if (this.state.wordIndex === this.state.guessed.length) {
            this.setState({
                disabled: false
            });
        }


    };

    randomizeLetters(str1, str2) {
        let wordSplitted1 = str1.split('');
        let wordSplitted2 = str2.split('');
        let arr = [wordSplitted1, wordSplitted2].flat();
        let shuffled = _.shuffle(arr);
        return shuffled;
    }

    render() {
        console.log(this.state.guessed.length === this.state.wordIndex);

        return (
            <div className="columns is-multiline is-vcentered">
                { this.props.data &&
                    <div className="column is-3">
                        <div className="card">
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
                                        <p className="title is-4">{ this.state.guessed.trim().split("").map((letter) => (
                                            letter
                                        )) }
                                            <button class="button is-small" onClick={ this.removeLetters }>
                                                <span class="icon is-small">
                                                    <i class="fas fa-backspace"></i>
                                                </span>
                                            </button>
                                        </p>
                                        { this.state.disabled && (<button class="button is-small">
                                            <span class="icon is-small">
                                                <i class="fas fa-check-circle"></i>
                                            </span>
                                        </button>) }
                                        <p className="subtitle is-6">{ this.letterUnderlines(this.state.companyRus) }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <div className="tags">{ this.state.randomLetters.map((letter) => (
                                            <button disabled={ this.state.disabled } className="tag is-dark is-light is-medium" value={ letter } onClick={ this.handleGuess } styles={ { cursor: 'pointer' } }>{ letter }</button>
                                        )) }</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default MatchTranscriptedWordToPicture;