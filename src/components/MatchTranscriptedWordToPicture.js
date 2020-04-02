import React, { Component } from 'react';

class MatchTranscriptedWordToPicture extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:'',
            rusName:'',
            rusCompany:'',
            index:0
        }

        
    }

    componentDidMount() {
        
    }

    letterUnderlines(word) {
        let wordSlitted = word.split('')
        return wordSlitted
    }

    render(props) {
        console.log(this.props.data)
        
        
        return (
            <div className="columns is-multiline is-vcentered">
                { this.props.data && 
                    <div className="column is-12">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={this.props.data[this.state.index].picture} alt="" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{this.props.data[this.state.index].engName}</p>
                                        <p class="subtitle is-6">{this.props.data[this.state.index].companyEng}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{this.letterUnderlines(this.props.data[this.state.index].rusName).map(() => (
                                            <span>_ </span>
                                        ))}</p>
                                        <p class="subtitle is-6">{this.letterUnderlines(this.props.data[this.state.index].companyRus).map(() => (
                                            <span>_ </span>
                                        ))}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{this.props.data[this.state.index].rusName}</p>
                                        <p class="subtitle is-6">{this.props.data[this.state.index].companyRus}</p>
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