import React from 'react';
import DialogueImage from './DialogueImage';
import DialogueContent from './DialogueContent';
import CustomInput from '../CustomInput'

function dialogueContainer(props) {

    return (
        <>
            { props.dialogues.map((dialogue, index) => (
                <div key={index} className="media">
                    <DialogueImage image={ dialogue.image } />
                    <DialogueContent name={ dialogue.name } company={dialogue.company} L1={dialogue.L1} L2={dialogue.L2} extra={dialogue.extra} />
                </div>
            )) }
            {props.showInput && <CustomInput/>}
        </>
    );
}

export default dialogueContainer;
