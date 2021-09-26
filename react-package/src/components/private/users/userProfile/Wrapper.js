import React from 'react';
import SectionOneWrapper from './sectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './sectionThree/SectionThree';

function Wrapper() {
    return (
        <div className="userProfile-bg">
            <div className="profileWrapper">
            <SectionOneWrapper />
            <SectionTwo />
            <SectionThree />
        </div>
        </div>
    )
}

export default Wrapper
