import React, {useState} from 'react';
import DialogueModal from './DialogueModal';

function DialogueContent(props) {
    const [isActive, setModal] = useState(false)
    
    return (
        <div className="media-content">
            <div className="content">
                <p>
                    <strong>{ props.name && props.name }</strong> <small>{ props.company && props.company }</small>
                    <br />
                    <p>Say: { props.eng }</p>
                </p>
                <button className="button is-info is-small" onClick={() => {setModal(!isActive)}}>Show answer</button>
                <DialogueModal isActive={isActive} rus={props.rus} setModal={setModal} />
            </div>

        </div>
    );
}

export default DialogueContent;