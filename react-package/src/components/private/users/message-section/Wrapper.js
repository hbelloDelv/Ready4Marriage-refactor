import React from 'react';
import './messages.css'
import MessagesContent from './MessagesContent';
import ConversationBannned from './ConversationBannned';

function Wrapper() {
    return (
        <div className="messagesWrapper">
            <MessagesContent />
            <ConversationBannned />
        </div>
    )
}

export default Wrapper
