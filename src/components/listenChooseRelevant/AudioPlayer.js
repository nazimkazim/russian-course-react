import React from 'react';

export default function AudioPlayer(props) {
    return (
        <div>
            <audio controls>
                <source src={ props.audio }
                    type="audio/mpeg" />
                    Your browser does not support the audio element.
            </audio>
        </div>
    );
}
