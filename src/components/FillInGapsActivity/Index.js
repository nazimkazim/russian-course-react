import React, { Component } from 'react';
import correct from '../../data/media/correct.wav';
import denied from '../../data/media/denied.mp3';
import Notification from '../Notification';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            answer: [],
            letters: ["а", "б", "в", "г", "д", "е", "ё", "ж", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "ю", "я"],
            index: 0,
            correct: false,
            activityIsFinished: false,
            isIncorrect: false
        };
    }


    onClickHandler = (evt) => {
        evt.preventDefault();
        let ltr = evt.target.value;
        let answer = [...this.state.answer];
        answer.push(ltr);
        this.setState({
            answer
        });
    };

    onChangeHandler = (evt) => {
        evt.preventDefault();
        let ltr = evt.target.value;
        let answer = [...this.state.answer];
        answer.push(ltr);
        this.setState({
            answer
        });
    };

    onKeyDownHandler = (e) => {
        if (e.keyCode === 8) {
            let answer = [...this.state.answer];
            answer.splice(-1, 1);
            this.setState({
                answer
            });
        }

        if (e.keyCode === 13) {
            if (this.props.data[this.state.index].answer === this.state.answer.join("")) {
                let sound = new Audio(correct);
                sound.play();
                this.setState({
                    correct: true
                }, () => {
                    setTimeout(
                        () => {
                            this.setState({
                                index: this.state.index + 1,
                                correct: false,
                                answer: []
                            });
                        }, 1000
                    );
                });
            } else {
                let sound = new Audio(denied);
                sound.play();
                this.setState({
                    isIncorrect: true
                });
                setTimeout(
                    () => {
                        this.setState({
                            isIncorrect: false
                        });
                    }, 1000
                );
            }

            if (this.props.data.length - 1 <= this.state.index) {
                this.setState({
                    activityIsFinished: true
                });
            }
        }
    };

    startAgainHandler = () => {
        this.setState({
            answer: [],
            letters: ["а", "б", "в", "г", "д", "е", "ё", "ж", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "ю", "я"],
            index: 0,
            correct: false,
            activityIsFinished: false,
            isIncorrect: false
        });
    };

    render() {
        //console.log(this.props.data);
        return (
            <div className="figa-activity-container">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input is-rounded" onKeyDown={ this.onKeyDownHandler } type="text" value={ this.state.answer.join("") } placeholder="Type an answer (Enter - submit answer, backspace - delete a letter)" />
                        { this.state.correct && <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span> }
                    </p>
                </div>
                <div className="figo-combination-container">
                    { this.state.activityIsFinished ? <button className="button is-success" onClick={ this.startAgainHandler }><i class="fas fa-redo"></i></button> : <span className="tag is-info is-medium">{ this.props.data[this.state.index].combination }</span> }

                </div>
                <hr />
                <div className="tags keyboard-container">
                    { this.state.letters.map((letter, index) => (
                        <button className="tag is-medium" key={ index } value={ letter } onClick={ this.onClickHandler } >
                            { letter }
                        </button>
                    )) }
                </div>
                { this.state.isIncorrect && <Notification message="Please try again" type="error" /> }
                { this.state.activityIsFinished && <Notification message="Great job" type="success" /> }
            </div>
        );
    }
}

export default Index;
