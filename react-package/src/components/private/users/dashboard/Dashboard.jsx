import React from 'react';
import './dashboard.css';
import PhotoHeader from '../photofeed-section/photofeed/PhotofeedHeader'
import PhotofeedSection from '../photofeed-section/photofeed/PhotofeedUsersWrapper';
import PhotoForm from '../photofeed-section/photofeedForm/Form';


function Dashboard() {
    return (
        <div className="dashboard-bg">
            <PhotoHeader />
            <PhotofeedSection />
            <PhotoForm />
        </div>
    )
}

export default Dashboard
