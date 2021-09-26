import React from 'react';
import './messages.css';
import {FaCheck, FaTrash, FaCaretDown } from 'react-icons/fa';

function MessagesContent() {
    return (
        <div className="messageContentWrapper">
            <div className="messageSectionsWrapper">
                <div className="messageLeftSection">
                    <div className="searchContact">
                        <div className="form-group" >
                            <input type="text" placeholder="Search contact" className="form-control searchContactForm"/>
                        </div>
                    </div>
                    <div className="messageStatus">
                        No conversation yet!
                    </div>
                    <div className="creditPerMessage">
                        1 Credit Per Message
                    </div>
                </div>
                <div className="messageRightSection">
                    <div className="messageRightSection-firstColumn">
                    <div className="messageRightSection-content">
                        <div className="userMessageImage">Image</div>
                        <div className="userMessageName">John Doe</div>
                        <div className="userMessageStatus"><FaCheck className="userMessageStatusIcon"/></div>
                    </div>
                   
                    <div className="messageLeftSection-content">
                        <div className="userMessageDeleteButton"><FaTrash /> </div>
                        <div className="userMessageForm"><FaCaretDown /></div>
                    </div>
                    </div>
                    <div className="messageRightSection-secondColumn">
                         <div className="displayMessage">
                             <div className="messageDate">
                                 9/09/2021
                             </div>
                             <div className="messageDisplayWrapper">
                                 <div className="messageDisplayImage">Image</div>
                                 <div className="messageDisplayText">Hello Moses 😀 How are you? 😜</div>
                                 <div className="messageDisplayTime">8:47</div>
                                 <div className="messageDisplayAnimate">Animate</div>
                             </div>
                         </div>
                    </div>
                        <div className="messageRightSection-thirdColumn">    
                                <div className="form-group textInputDiv" >
                                    <input type="text" placeholder="Enter your message..." className="form-control"/>
                                </div>
                                <div className="Button-one">Click1</div>
                                <div className="Button-one">Click2</div>
                                <div className="Button-one">Click3</div>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default MessagesContent
