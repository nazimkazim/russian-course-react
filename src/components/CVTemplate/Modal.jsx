import React from 'react';
import './modal.css'

function Modal({ prompt, isActive, setIsActive }) {
  console.log(prompt);
  return (
    <div className={`modal ${isActive}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <div class='card'>
          <div class='card-content' styles={{wordBreak:'break-all'}}>
            <div class='content'>
              <h2><strong>Воспрос</strong>:{' '}{prompt.question.toUpperCase()}</h2>
              <h2><strong>Ответ</strong>:{' '}{prompt.answer.toUpperCase()}</h2>
            </div>
          </div>
        </div>
      </div>
      <button
        className='modal-close is-large'
        onClick={() => {
          setIsActive('');
        }}
        aria-label='close'></button>
    </div>
  );
}

export default Modal;
