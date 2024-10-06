import React, { useState } from 'react';
import { AddFriendsIcon } from './add-friends-icon';
import { AddChatModal } from 'components/modals/add-chat-modal';

export const AddFriendsButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => { setIsModalOpen(true); }}>
        <AddFriendsIcon />
      </button>
      {isModalOpen && (
        <AddChatModal setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};
