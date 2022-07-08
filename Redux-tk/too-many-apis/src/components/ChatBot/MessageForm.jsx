import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Form, Button, Spinner } from 'react-bootstrap';

// Actions
import { sendMessage, getMessage } from '../../store/services/chatBot/chatBot.action';


const MessageForm = ({ sendMessageMutation, isLoading }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e, message) => {
    e.preventDefault();

    try {
      if (!message.trim()) {
        throw new Error('Write something properly.');
      }

      setMessage('');

      const response = await sendMessageMutation(message);

      dispatch(sendMessage(message));

      if (!response?.data?.status) {
        throw new Error('Something went wrong');
      }

      dispatch(getMessage(response.data.message));

    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  return (
    <Form onSubmit={(e) => handleSendMessage(e, message)} className="d-flex align-items-center">
      <Form.Control type="text" value={message} onChange={handleChange} />
      <Button
        type="submit"
        variant="primary"
        disabled={isLoading}
        style={{
          minWidth: 70
        }}
      >
        {isLoading ? (
          <Spinner size="sm" animation="border" />
        ) : 'Send'}
      </Button>
    </Form>
  );
};

export default MessageForm;