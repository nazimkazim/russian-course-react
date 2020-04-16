import React, { Component } from 'react';
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
        const newArray = [...this.state.checkedItems, item];
        this.setState(prevState => ({ checkedItems: newArray }));
    };


    render() {
        //console.log(this.props.data)
        //console.log(this.state.images)
        console.log(this.state.checkedItems);
        return (
            <div>
                <audio controls>
                    <source src={ this.props.data[this.state.index].audio }
                        type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                { this.state.images && this.state.images.map((image) => (
                    <div>
                        <figure class="image is-128x128">
                            <img src={ image.src } alt="" />
                        </figure>
                        <input type="checkbox" name={ image.name } onChange={ this.handleChange } />
                    </div>
                )) }
            </div>
        );
    }
}

export default AudioContainer;
