import React from 'react';
import { MdVerifiedUser } from 'react-icons/md'

function VerifiedUser() {
    return (
        <div className="verifiedUser-style">
            <div className="verifiedUser-style-icon"><MdVerifiedUser className="verifiedUser-icon"/></div>
            <div>
                <h4>Verified User</h4>
                <p>Everyday thousands of new women and men add 
                    their profiles, hoping to 
                    find a genuine partner</p>
            </div>

        </div>
    )
}

export default VerifiedUser
