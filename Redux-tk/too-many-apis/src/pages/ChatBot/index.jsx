import { Container, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

// Components
import { MessageForm, MessageItem } from '../../components';

// Queries
import { useSendMessageMutation } from '../../store/services/chatBot/chatBotApi';

// Styles
import './ChatBot.css';

const ChatBot = () => {
  const [sendMessage, {isError, isLoading}] = useSendMessageMutation();
  const { messages } = useSelector((state) => state.chatBot);

  const messagesContent = (
    messages.map((message) => {
      return (
        <MessageItem
          key={message.id}
          content={message.content}
          type={message.type}
        />
      )
    }).reverse()
  );

  return (
    <div className="py-3">
      <Container>
        {isError ? (
          <Alert variant="warning">
            Something went wrong.
          </Alert>
        ) : (
          <div className="border border-primary rounded p-2">
            <div className="messages-container d-flex flex-column-reverse justify-content-start align-items-center mb-1 py-2 pe-2">
              {messagesContent}
            </div>
            <MessageForm
              sendMessageMutation={sendMessage}
              isLoading={isLoading}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ChatBot;