import React from 'react';

function DialogueModal(props) {

    return (
        <div className={ `modal ${props.isActive && ('is-active')}` }>
            <div className="modal-background" onClick={ () => { props.setModal(!props.isActive); } }>
                
            </div>
            <div className="modal-content">
                <div className="container">
                    <div className="notification">
                        { props.rus }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DialogueModal;