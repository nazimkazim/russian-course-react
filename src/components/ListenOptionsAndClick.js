import React, { Component } from 'react';
var _ = require('lodash');

class ListenOptionsAndClick extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: '',
            index:1,
            answer:''
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
                newObj.options = optionThree(arr);
                newArr.push(newObj);
            }

            arr.push(item.audio);
            //console.log(newArr[2]);
            //console.log(arr)
            return newArr;
        });

        //console.log(newArr);

        function optionThree(arr) {
            return _.shuffle(arr).slice(0, 3);
        }

        this.setState({
            data: newArr
        });
    }

    handleClick = () => {
        this.setState(prevState => {
           return {index: prevState.index + 1}
        })
    }


    render() {
        console.log(this.state.data)
        return (
            <div>
                {this.state.data && this.state.data[this.state.index][0].text}
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default ListenOptionsAndClick;
