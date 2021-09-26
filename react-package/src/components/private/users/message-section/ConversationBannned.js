import React from 'react'
import './messages.css';
import { FaTrash } from 'react-icons/fa';

function ConversationBannned() {
    return (
        <div className="conversationBanned">
            <div className="conversationBannedContent">
                <div className="userNotfound">
                    <h4>User not Found</h4>
                    Profile deleted or banned
                </div>
                <div className="deletedConversation">
                    <button className="btn btn-danger"><FaTrash className="deletedConversationIcon"/> Delete conversation</button>
                </div>
            </div>
        </div>
    )
}

export default ConversationBannned
