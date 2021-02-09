import React from 'react';
import './modal.css'

function Modal({ prompt, isActive, setIsActive }) {
  const handleClose = () => {
    setIsActive(false)
  }
  return (
    <div className={`modal ${isActive}`} onClick={handleClose}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <div class='card'>
          <div class='card-content' styles={{wordBreak:'break-all'}}>
            <div class='content'>
              <h4><strong>Воспрос</strong>:{' '}{prompt.question.toUpperCase()}</h4>
              <h4><strong>Ответ</strong>:{' '}{prompt.answer.toUpperCase()}</h4>
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
