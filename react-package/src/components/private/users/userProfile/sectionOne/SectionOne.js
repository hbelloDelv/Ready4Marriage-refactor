import React from 'react';
import SectionOneImage from './SectionOneImage';
import SectionOnePrivatePictures from './SectionOnePrivatePictures';
import SectionOneButton from './SectionOneButton';
import '../userprofile.css'

function SectionOne() {
    return (
        <div className="UserProfile-SectionOne">
            <div className="userProfile-cardWrapper">
                <SectionOneImage />
                <SectionOnePrivatePictures />
                <SectionOneButton />
            </div>
        </div>
    )
}

export default SectionOne

