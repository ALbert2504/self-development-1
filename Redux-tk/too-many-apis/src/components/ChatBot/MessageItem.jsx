import { memo } from 'react';

const MessageItem = ({ content, type }) => {
  const classes = type === 'sent'
    ? 'bg-primary text-white align-self-end'
    : 'border border-primary align-self-start'

  return (
    <span className={`rounded p-2 ${classes}`}
    >
      {content}
    </span>
  );
};

export default memo(MessageItem);