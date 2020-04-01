import React, { Component } from 'react';
var _ = require('lodash');

class ListenOptionsAndClick extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: '',
            index: 1,
            answer: ''
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
            data: newArr
        });
    }

    handleClick = () => {
        this.setState(prevState => {
            return { index: prevState.index + 1 };
        });
    };

    render() {
        console.log(this.state.data);

        return (
            <div className="card listen-options-card">
                <div className="card listen-options-card-syllable-header">
                    <p className="listen-options-card-syllable">{ this.state.data && this.state.data[this.state.index][0].text }</p></div>
                <div className="columns is-multiline is-vcentered">
                    { this.state.data && this.state.data[this.state.index].options.map((audio) => (
                        <div className="column is-half">
                            <button class="button is-success" onClick={ () => { let aud = new Audio(audio); aud.play(); } }>
                                <span class="icon is-small">
                                    <i class="fas fa-volume-up"></i>
                                </span>
                            </button >
                        </div>
                    )) }
                </div>
                <button onClick={ this.handleClick }>click</button>
            </div>
        );
    }
}

export default ListenOptionsAndClick;
