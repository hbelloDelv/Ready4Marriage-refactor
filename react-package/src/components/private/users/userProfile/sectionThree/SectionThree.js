import React from 'react';
import Popularity from './Popularity';
import Gifts from './Gifts';
import '../userprofile.css';

function SectionThree() {
    return (
        <div className="UserProfile-SectionThree">
            <Popularity />
            <Gifts />
        </div>
    )
}

export default SectionThree
