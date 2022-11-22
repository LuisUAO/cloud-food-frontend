import React from 'react';
import { useState } from 'react';

function ChatPrompt({ onSend }) {
  const [message, setMessage] = useState("");
  const cbMessage = (e) => setMessage(e.target.value);
  const cbSend = (e) => onSend(message);

  return (
    <div class="box">
      <div class="field has-addons">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Mensaje al Usuario" onChange={cbMessage} value={message}/>
        </p>

        <p class="control">
          <button class="button is-info" onClick={cbSend}>
            <span class="icon">
              <i class="fas fa-paper-plane"></i>
            </span>
            <span>Enviar</span>
          </button>
        </p>
      </div>
    </div>
  );
}

export default ChatPrompt;