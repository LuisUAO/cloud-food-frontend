import React from 'react';

function NotificationsMessage({ itself, children }) {
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

function NotificationsChat({ token }) {
  return (
    <div class="box">
      <NotificationsMessage itself>Puto el que lo lea</NotificationsMessage>
      <NotificationsMessage>The Game</NotificationsMessage>
    </div>
  );
}

export default NotificationsChat;