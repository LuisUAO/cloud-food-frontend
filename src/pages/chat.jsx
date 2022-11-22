import { useParams } from 'react-router-dom';
import ChatMessages from '../components/chat/chat';
import { ChatNavigator } from '../components/chat/navigator';
import ChatPrompt from '../components/chat/prompt';

export function ChatPage() {
  let { id } = useParams();

  return (
      <>
          <ChatNavigator/>
          <ChatPrompt></ChatPrompt>
          <ChatMessages></ChatMessages>
      </>
  )
}