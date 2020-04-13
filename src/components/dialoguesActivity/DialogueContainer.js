import React from 'react';
import DialogueImage from './DialogueImage';
import DialogueContent from './DialogueContent';

function dialogueContainer(props) {

    return (
        <>
            { props.dialogues.map((dialogue) => (
                <div className="media" key={dialogue.eng}>
                    <DialogueImage image={ dialogue.image } />
                    <DialogueContent name={ dialogue.name } company={dialogue.company} eng={dialogue.eng} rus={dialogue.rus} extra={dialogue.extra} />
                </div>
            )) }
        </>
    );
}

export default dialogueContainer;
