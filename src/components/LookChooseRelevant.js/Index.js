import React, { Component } from 'react';
import Card from './Card';
import Instruction from '../Instruction';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            numbers: [],
            index: 0,
            answer: '',
            isNotClicked: false,
            correct: false,
            isLoading: false
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
    };
    render() {
        //console.log(this.props.data)
        //console.log(this.state.numbers)
        //console.log(this.state.answer)
        return (
            <div className="lookChooseRelevant-container">
                <Card image={ this.props.data[this.state.index].picture } onNextHandler={ this.onNextHandler } isLoading={ this.state.isLoading } numbers={ this.state.numbers } onCheckHandler={ this.onCheckHandler } correct={ this.state.correct } answer={ this.state.answer } onClickHandler={ this.onClickHandler } instruction={ <Instruction name={ this.props.data[this.state.index].rus } engName={ this.props.data[this.state.index].eng } /> } />
            </div>
        );
    }
}

export default Index;
