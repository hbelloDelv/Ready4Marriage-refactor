import React from 'react'
import SecurityPriorityHeader from './SecurityPriorityHeader';
import VerifiedUser from './VerifiedUser';
import Confidentiality from './Confidentiality';
import SecuritySystem from './SecuritySystem';
import  './security-sectionStyle.css'


function Wrapper() {
    return (
        <>
        <SecurityPriorityHeader />
        <div className="securityWrapper-style" >
            <VerifiedUser />
            <Confidentiality />
            < SecuritySystem />
        </div>
        </>
    )
}

export default Wrapper
