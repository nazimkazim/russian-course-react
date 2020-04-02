import React, { Component } from 'react';
var _ = require('lodash');


class MatchTranscriptedWordToPicture extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index:0,
            guessed:new Set()
        }

        
    }

    componentDidMount() {
        
    }

    letterUnderlines(word) {
        return word.split('').map(ltr => this.state.guessed.has(ltr) ? ltr :" _")
    
    }

    handleGuess = (evt) => {
        let ltr = evt.target.value;
        console.log(ltr)
        this.setState(st => ({
            guessed: st.guessed.add(ltr)
        }))
    }

    randomLetters(str1, str2 ) {
        let wordSplitted1 = str1.split('')
        let wordSplitted2 = str2.split('')
        let arr = [wordSplitted1,wordSplitted2].flat()
        let shuffled = _.shuffle(arr)
        return shuffled
    }

    render() {
        console.log(this.props.data)

        return (
            <div className="columns is-multiline is-vcentered">
                { this.props.data && 
                    <div className="column is-3">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={this.props.data[this.state.index].picture} alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{this.props.data[this.state.index].engName}</p>
                                        <p className="subtitle is-6">{this.props.data[this.state.index].companyEng}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{this.letterUnderlines(this.props.data[this.state.index].rusName)}</p>
                                        <p className="subtitle is-6">{this.letterUnderlines(this.props.data[this.state.index].companyRus)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <div className="tags">{this.randomLetters(this.props.data[this.state.index].companyRus, this.props.data[this.state.index].rusName).map((letter) => (
                                            <button className="tag is-dark is-light is-medium" value={letter} onClick={this.handleGuess} styles={{cursor:'pointer'}}>{letter.toLowerCase()}</button>
                                        ))}</div>
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