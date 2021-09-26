import React from 'react';
import SampleImage from './image/imag1.jpg'

function SectionOneImage() {
    return (
        <div className="userProfileImage">
            {/* Image you frustrated me */}
            <img src={SampleImage} alt={"userImage"} />
        </div>
    )
}

export default SectionOneImage


