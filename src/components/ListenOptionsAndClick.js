import React, { Component } from 'react';
import correct from '../data/media/correct.wav'
import denied from '../data/media/denied.mp3'
var _ = require('lodash');


class ListenOptionsAndClick extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: '',
            index: 0,
            answer: '',
            optionsButtonIsClicked:false,
            isDisabled:true,
            win:false
        };
    }

    componentDidMount() {
        const obj = this.props.syllables.flat();
        let arr = [];
        let newArr = [];

        obj.map((item, index) => {
            let newObj = {};
            if (index > 2) {
                newObj = [{ text: item.text }, { answer: item.audio }];
                newObj.options = optionThree(arr, item.audio);
                newArr.push(newObj);
            }

            arr.push(item.audio);
            //console.log(newArr[2]);
            //console.log(arr)
            return newArr;
        });

        //console.log(newArr);

        function optionThree(arr, item) {
            let shuffledArr = _.shuffle(arr).slice(0, 3);
            shuffledArr.push(item);
            return _.shuffle(shuffledArr);
        }

        this.setState({
            data: _.shuffle(newArr).slice(0, 20)
        });
    }

    handleClick = () => {
        this.setState(prevState => {
            return { index: prevState.index + 1 };
        });
    };

    checkAnswer = () => {
        if (this.state.data[this.state.index][1].answer === this.state.answer) {
            let sound = new Audio(correct)
            sound.play()
            this.setState(prevState => {
                return { index: prevState.index + 1,isDisabled:true };
            });
            if (this.state.index >= this.state.data.length) {
                
            }
        } else {
            let sound = new Audio(denied)
            sound.play()
        }
    };

    render() {
        console.log(this.state.data);
        console.log(this.state.answer);

        return (
            <div className="card listen-options-card">
                <div className="card listen-options-card-syllable-header">
        <p className="listen-options-card-syllable">{ this.state.data && this.state.data[this.state.index][0].text }</p></div>
                <div className="columns buttons-container is-multiline is-vcentered">
                    { this.state.data && this.state.data[this.state.index].options.map((audio) => (
                        <div className="column is-half">
                            <button class="button is-success" onClick={ (e) => {
                                let aud = new Audio(audio);
                                aud.play();
                                this.setState({optionsButtonIsClicked:true}, function() {
                                    this.setState({isDisabled:false})
                                })
                                this.setState({ answer: audio });
                                
                                //this.state.optionsButtonIsClicked && this.setState({isDisabled:false})
                            } }>
                                <span class="icon is-small">
                                    <i class="fas fa-volume-up"></i>
                                </span>
                            </button >
                        </div>
                    )) }
                </div>
                    <div className="listen-options-button-check-container">
                    <button className="button is-success is-rounded" disabled={this.state.isDisabled} onClick={ this.checkAnswer }>check</button>
                    <hr/>
                    <progress class="progress is-primary" value={this.state.index} max={this.state.data.length}></progress>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default ListenOptionsAndClick;
