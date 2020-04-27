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
            correct: false
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

    onClickHandler = (e) => {
        let answer = e.target.value;
        this.setState({ answer });
    };

    onCheckHandler = () => {
        if (this.props.data[this.state.index].answer === this.state.answer) {
            this.setState({
                correct: true
            });
        }
    };
    render() {
        //console.log(this.props.data)
        //console.log(this.state.numbers)
        //console.log(this.state.answer)
        return (
            <div>
                <Card image={ this.props.data[this.state.index].picture } numbers={ this.state.numbers } onCheckHandler={ this.onCheckHandler } correct={ this.state.correct } answer={ this.state.answer } onClickHandler={ this.onClickHandler } instruction={ <Instruction name={ this.props.data[this.state.index].rus } engName={ this.props.data[this.state.index].eng } /> } />
            </div>
        );
    }
}

export default Index;
