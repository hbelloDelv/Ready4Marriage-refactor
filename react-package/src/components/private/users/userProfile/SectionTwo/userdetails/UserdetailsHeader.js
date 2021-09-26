import React from 'react';
import {FaHeart, FaEnvelope, FaMale, FaGift } from "react-icons/fa";

function UserdetailsHeader() {
    return (
        <div class="userdetailsHeader">
            <div className="userIdentity-one">
                <div className="userName">Austin Musa</div>
                <div className="userSpacing">.</div>
                <div className="userAge">35</div>
                <div className="heartImoji"><FaHeart className="heartImojiIcon"/></div>
            </div>

            <div className="userIdentity-two">
                <div className="userImageDiv"><FaMale className="userIdentityIcon"/></div>
                <div className="userCountry">Nigeria,</div>
                <div className="userLocation">Kaduna</div>
            </div>
            
            <div className="userIdentity-three">
                <div className="userButton"><button className="btn btn-primary bgMessageButton"> < FaEnvelope className="messageIcon"/> Messages</button></div>
                <div className="userGifts"><button className="btn btn-primary bgGiftButton">< FaGift className="giftIcon"/> Gifts</button></div>
                <div className="userForm">Form</div>
            </div>
        </div> 
        
    )
}

export default UserdetailsHeader
