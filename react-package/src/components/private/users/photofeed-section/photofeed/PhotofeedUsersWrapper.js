import React from 'react';
import PhotofeedUser from './PhotofeedUser'
import './photofeed.css'


function PhotofeedUsersWrapper() {
    return (
        <div className="photofeedUsersWrapper">
            <PhotofeedUser />
            <PhotofeedUser />
            <PhotofeedUser />
            <PhotofeedUser />
            <PhotofeedUser />
            <PhotofeedUser />
        </div>
    )
}

export default PhotofeedUsersWrapper
