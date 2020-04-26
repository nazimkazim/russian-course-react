import React, { Component } from 'react';

export default class Keyboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            letters: ["а", "б", "в", "г", "д", "е", "ё", "ж", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "ю", "я"]
        };
    }

    onClickHandler = (evt) => {
        evt.preventDefault();
        let ltr = evt.target.value;
        console.log(ltr)
    };
    render() {
        return (

            <div className="tags keyboard-container">
                { this.state.letters.map((letter, index) => (
                    <button className="tag" key={ index } value={ letter } onClick={ this.onClickHandler }>
                        { letter }
                    </button>
                )) }
            </div>


        );
    }
}
