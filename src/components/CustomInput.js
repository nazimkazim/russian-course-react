import React, {useState} from 'react';

export default function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <div class="field">
      <div class="control">
        <input class="input is-primary" type="text" onChange={e => setValue(e.target.value)} placeholder="Primary input" />
      </div>
    </div>
  );
}
