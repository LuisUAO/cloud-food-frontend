import React from 'react';

function ChatMessage({ itself, children }) {
  const contentComponent = () =>
    <div class="level-item">
      <div class="notification is-info">
        {children}
      </div>
    </div>
    
  // Contenido del Mensaje
  const content = contentComponent();

  return (
    <nav className="level">
      <div class="level-left">
        { itself ? <></> : content}
      </div>

      <div class="level-right">
        { itself ? content : <></>}
      </div>
    </nav>
  )
}

function ChatMessages({ token }) {
  return (
    <div class="box">
      <ChatMessage itself>Puto el que lo lea</ChatMessage>
      <ChatMessage>The Game</ChatMessage>
    </div>
  );
}

export default ChatMessages;