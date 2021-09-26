import React from 'react';
import ReadyForMarrige from './ReadyForMarrige';
import Documents from './Documents';
import Info from './Info';
import Support from './Support';
import AllRightReserve from './AllRightReserve';
import  './footer-style.css'

function FooterWrapper() {
    return (
        <>
        <div className="footerWrapper-style">
            <ReadyForMarrige />
            <Documents />
            <Info />
            <Support />
        </div>
        <AllRightReserve />
        </>
    )
}

export default FooterWrapper
