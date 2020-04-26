import React, { Component } from 'react';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            answer: [],
            letters: ["а", "б", "в", "г", "д", "е", "ё", "ж", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "ю", "я"]
        };
    }

    onClickHandler = (evt) => {
        evt.preventDefault();
        let ltr = evt.target.value;
        let answer = [...this.state.answer];
        answer.push(ltr);
        this.setState({
            answer
        });
    };

    onKeyDownDelete = (e) => {
        if (e.keyCode === 8) {
            let answer = [...this.state.answer];
            answer.splice(-1, 1);
            this.setState({
                answer
            });
        }
    };

    render() {
        console.log(this.state.answer);
        return (
            <div>
                <input class="input is-rounded" onKeyDown={ this.onKeyDownDelete } type="text" value={ this.state.answer.join("") } placeholder="Rounded input"></input>
                <div className="tags keyboard-container">
                    { this.state.letters.map((letter, index) => (
                        <button className="tag" key={ index } value={ letter } onClick={ this.onClickHandler } >
                            { letter }
                        </button>
                    )) }
                </div>
            </div>
        );
    }
}

export default Index;
