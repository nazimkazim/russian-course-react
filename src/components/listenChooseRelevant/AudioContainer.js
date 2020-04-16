import React, { Component } from 'react';
import Card from './Card';
import AudioPlayer from './AudioPlayer';
var _ = require('lodash');


class AudioContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            images: [],
            index: 0,
            checkedItems: new Map()
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

    onCheckHandler = (e) => {
        e.preventDefault();
        /* function checkTrue(item) {
            return item.value === true;
        }
        const filteredItems = this.state.checkedItems.filter(checkTrue) */
        //console.log(this.state.checkedItems.value())
        let arr = [];
        // eslint-disable-next-line no-unused-vars
        for (let [key, value] of this.state.checkedItems) {
            //console.log(key,value)
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
        let arrWithAnswers = []
        filteredArr.map((el) => {
            return arrWithAnswers.push(el.value)
        })
        //console.log(arrWithAnswers)
        //console.log(this.props.data[this.state.index].answers.sort())
        if (_.isEqual(arrWithAnswers.sort(), this.props.data[this.state.index].answers.sort())) {
            console.log("true")
        }
    };


    render() {
        //console.log(this.props.data)
        //console.log(this.state.images)
        console.log(this.state.checkedItems);
        return (
            <div>

                <AudioPlayer audio={ this.props.data[this.state.index].audio } />
                <div className="columns is-vcentered is-multiline">
                    { this.state.images && this.state.images.map((image) => (
                        <div className="column is-3">
                            <Card image={ image.src } clickHandler={ this.handleChange } checked={ this.state.checkedItems.get(image.name) } name={ image.name } />
                        </div>
                    )) }

                </div>

                <button onClick={ this.onCheckHandler }>Check</button>
            </div>
        );
    }
}

export default AudioContainer;
