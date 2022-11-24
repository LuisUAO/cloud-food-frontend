import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ChatMessages from '../components/chat/message';
import { ChatNavigator } from '../components/chat/navigator';
import ChatPrompt from '../components/chat/prompt';
import ChatSidebar from '../components/chat/siderbar';
import { useRestaurant } from '../hooks/restaurant';
import { UserContext } from '../hooks/user';
// Socket IO
import io from 'socket.io-client';
import { useState } from 'react';
// Conectar al Server Localhost
const socket = io("ws://localhost:4000");

export function ChatPage() {
  let { id } = useParams();
  let user = useContext(UserContext);
  let [messages, setMessages] = useState([]);
  let [names, setNames] = useState([]);
  // Cargar el Restaurante
  let [restaurant, restaurantReload] = useRestaurant(id, user.token);
  
  // ----------------
  // Conexion al Chat
  // ----------------

  useEffect(() => {
    socket.on("message", (msg) => setMessages(x => [...x, msg]));
    // Cargar Restaurante
    restaurantReload();

    // Apagar los sockets
    return () => {
      socket.emit("goodbye");
      // Desactivar los Sockets
      socket.off('lista-usuarios');
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    if (restaurant?.ok) {
      const room = restaurant.restaurante?._id;

      socket.emit("welcome", {
        name: user?.usuario?.name,
        restaurante: room
      });

      socket.on("lista-usuarios", (list) => 
        list.room == room && setNames(list));
    }
  }, [restaurant]);

  // ---------------------
  // Callbacks de Mensajes
  // ---------------------

  const onSend = (msg) => {
    const id = user?.usuario?._id;
    const name = user?.usuario?.name;
    socket.emit("message", {id, name, msg});
  }

  // Variables De Nombres
  const restaurante = restaurant?.restaurante?.nombre;
  const identificador = user?.usuario?._id;

  return (
      <>
          <ChatNavigator id={id} name={restaurante}/>
          <ChatPrompt onSend={onSend}></ChatPrompt>

          <div className="columns">
            <div className="column is-8">
              <ChatMessages user={identificador} messages={messages}/>
            </div>
            <div className="column is-4">
              <ChatSidebar users={names.lista} />
            </div>
          </div>
      </>
  )
}