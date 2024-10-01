import { useState, useRef } from 'react';


const useChatWebSocket = () => {
  const [messageList, setMessageList] = useState([]); 
  const [chatRoomId, setChatRoomIdState] = useState(null);
  const [chatRoomList, setChatRoomList] = useState([{id: "1", participants: [{id: 1, profile: {nickname: "준영", profilepic_id: 1}}], last_message: "그래"}, {id: 2, participants: [{id: 2, profile: {nickname: "준영", profilepic_id: 2}}], last_message: "그래"}]); 

  const chatRoomIdRef = useRef(chatRoomId); 
  const setChatRoomId = (id) => {
    setChatRoomIdState(id);  
    chatRoomIdRef.current = id;
  };

  return {
    messageList,
    setMessageList,
    chatRoomId,
    setChatRoomId,
    chatRoomList,
    setChatRoomList,
  };
};
export default useChatWebSocket;
