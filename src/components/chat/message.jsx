import React from 'react';

function ChatMessage({ name, message, itself}) {
  const contentComponent = () =>
    <div class="level-item">
      <div class={`notification ${itself ? "is-info" : "is-success"}`}>
        <div className="content">
          <h6 class="subtitle is-6">{name}</h6>
          <p>{message}</p>
        </div>
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

function ChatMessages({ user, messages }) {
  return (
    <div class="box">
      {
        messages && messages.length > 0 
        ? 
        messages.map(x => 
          <ChatMessage itself={x.id == user} name={x.name} message={x.msg}/>
        )
        : 
        <h1 class="subtitle is-centered">Puede Hablar con el Vendedor</h1>
      }
    </div>
  );
}

export default ChatMessages;