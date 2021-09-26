import React from 'react';
import AdvantageHeader from './AdvantageHeader';
import ExpandingAudience from './ExpandingAudience'
import Convenience from './Convenience'
import Support from './Support'
import  './advantageSection-style.css'

function Wrapper() {
    return (
        <>
         <AdvantageHeader />
        <div className="advantage-wrapper">
            <ExpandingAudience />
            <Convenience />
            <Support />
        </div>
        </>
    )
}

export default Wrapper
