import { useRef, useEffect } from 'react';

import { ReceiveSpeechBubble } from './receive-speech-bubble';
import { SendSpeechBubble } from './send-speech-bubble';

export const ChatRoomBody = () => {
  const textList = [
    { type: 'send', text: '그래' },
    { type: 'receive', text: '안녕' },
    { type: 'send', text: '그래' },
    { type: 'receive', text: '안녕' },
    { type: 'send', text: '그래' },
    { type: 'receive', text: '안녕' },
    { type: 'send', text: '그래' },
    { type: 'receive', text: '안녕' },
    { type: 'send', text: '그래' },
    { type: 'receive', text: '안녕' },
    { type: 'send', text: '그래' },
  ];

  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [textList]);

  return (
    <div className="flex flex-col h-full overflow-y-auto px-4 p-3 space-y-4">
      {textList.map((item, index) => {
        return item.type === 'receive' ? (
          <div className="self-start" key={index}>
            <ReceiveSpeechBubble text={item.text} />
          </div>
        ) : (
          <div className="self-end" key={index}>
            <SendSpeechBubble text={item.text} />
          </div>
        );
      })}
      <div ref={endOfMessagesRef} />;
    </div>
  );
};
