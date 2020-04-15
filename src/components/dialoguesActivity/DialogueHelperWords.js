import React from 'react';

function DialogueHelperWords(props) {
    console.log(props.extra.length > 0 && props.extra);
    return (
        <div className={ `dropdown ${props.dropdownIsActive && 'is-active'} dialogue-dropdown` }>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={ () => { props.setDropdown(!props.dropdownIsActive); } }>
                    <span>Show helper words</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    { props.extra.length > 0 && props.extra.map((item,index) => (
                        <span href="#" className="dropdown-item" key={index}>
                            <strong>{ item.L1 }</strong> - {item.L2 }
                        </span>
                    )) }
                </div>
            </div>
        </div>
    );
}

export default DialogueHelperWords;
