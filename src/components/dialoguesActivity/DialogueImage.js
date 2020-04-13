import React from 'react';

function dialogueImage(props) {
    return (
        <figure className="media-left">
            <p className="image is-64x64">
                <img src={props.image && props.image} alt="" />
            </p>
        </figure>
    );
}

export default dialogueImage;
