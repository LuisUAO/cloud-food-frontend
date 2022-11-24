import React from 'react';

function ChatSidebar({ users }) {
  return (
    <aside class="menu box">
      <p class="menu-label">
        Usuarios Conectados
      </p>
      <ul class="menu-list">
        { users && users.map(x => <li><a>{x}</a></li>) }
      </ul>
    </aside>
  );
};

export default ChatSidebar;