import React, { Component } from 'react';
import Card from './Card';
import Instruction from '../Instruction';
import Notification from '../Notification';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            numbers: [],
            index: 0,
            answer: '',
            isNotClicked: false,
            correct: false,
            isLoading: false,
            gameIsFinished: false
        };
    }

    componentDidMount() {
        let numbersArr = [];
        this.props.data.map(item => {
            return numbersArr.push(item.answer);
        });
        this.setState({
            numbers: numbersArr
        });
    }

    onNextHandler = () => {
        this.setState({
            index: this.state.index + 1,
            isNotClicked: false,
            correct: false,
            answer: ""
        });
    };

    onClickHandler = (e) => {
        let answer = e.target.value;
        this.setState({ answer });
    };

    onCheckHandler = () => {
        this.setState({
            isLoading: true
        });
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 2000);
        if (this.props.data[this.state.index].answer === this.state.answer) {
            setTimeout(() => {
                this.setState({
                    correct: true,
                    isLoading: false
                });
            }, 2000);
        }

        if (this.props.data.length - 1 <= this.state.index) {
            this.setState({
                gameIsFinished: true
            });
        }
    };

    startAgain = () => {
        this.setState({
            numbers: [],
            index: 0,
            answer: '',
            isNotClicked: false,
            correct: false,
            isLoading: false,
            gameIsFinished: false
        });
        this.updateImages()
    };

    updateImages = () => {
        let numbersArr = [];
        this.props.data.map(item => {
            return numbersArr.push(item.answer);
        });
        this.setState({
            numbers: numbersArr
        });
    }
    render() {
        //console.log(this.props.data)
        //console.log(this.state.numbers)
        //console.log(this.state.answer)
        return (
            <div className="lookChooseRelevant-container">
                <Card image={ this.props.data[this.state.index].picture } notification={ <Notification message="Greate job!" type="success" /> } startAgainHandler={ this.startAgain } gameIsFinished={ this.state.gameIsFinished } onNextHandler={ this.onNextHandler } isLoading={ this.state.isLoading } numbers={ this.state.numbers } onCheckHandler={ this.onCheckHandler } correct={ this.state.correct } answer={ this.state.answer } onClickHandler={ this.onClickHandler } instruction={ <Instruction name={ this.props.data[this.state.index].rus } engName={ this.props.data[this.state.index].eng } /> } />
            </div>
        );
    }
}

export default Index;
