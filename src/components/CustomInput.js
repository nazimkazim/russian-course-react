import React, {useState} from 'react';
import {dialogue2CustomAnswer} from '../data/dialoguesData'
import Notification from '../components/Notification'

export default function CustomInput() {
  const [value, setValue] = useState("");
  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)

  

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (value === dialogue2CustomAnswer) {
        setCorrect(true)
        setTimeout(() => {
          setCorrect(false)
        }, 1500)
      } else {
        setIncorrect(true)
        setTimeout(() => {
          setIncorrect(false)
        }, 1500)
      }
    }
  }

  return (
    <div class="field">
      <div class="control">
        <input class="input is-primary" type="text" onChange={e => setValue(e.target.value)} onKeyDown={_handleKeyDown} placeholder="Type answer and press Enter to check answer" />
        <div className="marginBottom"></div>
        {correct && <Notification type="success" message="great job"/> }
        {incorrect && <Notification type="error" message="try again"/> }
      </div>
    </div>
  );
}
