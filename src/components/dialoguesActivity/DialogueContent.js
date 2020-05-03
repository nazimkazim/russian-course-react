import React, { useState } from 'react';
import DialogueModal from './DialogueModal';
import DialogueHelperWords from './DialogueHelperWords';
import ReactHtmlParser from 'react-html-parser';

function DialogueContent(props) {
    const [isActive, setModal] = useState(false);
    const [dropdownIsActive, setDropdown] = useState(false);



    return (
        <div className="media-content">
            <div className="content">
                <span>
                    <strong>{ props.name && props.name }</strong> <small>{ props.company && props.company }</small>
                    <br />
                    <span>{ props.L1 && ReactHtmlParser(props.L1) }</span>
                </span>
                <br />
                <br />
                { props.L2 && (
                    <>
                        <button className="button is-info is-small" onClick={ () => { setModal(!isActive); } }>Show answer</button>
                        <DialogueModal isActive={ isActive } L2={ props.L2 } setModal={ setModal } />
                    </>
                ) }

                { props.extra.length > 0 && (<DialogueHelperWords extra={ props.extra } setDropdown={ setDropdown } dropdownIsActive={ dropdownIsActive } />) }
            </div>
        </div>
    );
}

export default DialogueContent;