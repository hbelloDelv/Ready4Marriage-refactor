import React from 'react';
import UserdetailsHeader from './UserdetailsHeader';
import Gender from './Gender'
import Description from './Description';
import AboutmeHeader from './AboutmeHeader';
import ContactsHeader from './ContactsHeader';
import Aboutme from './Aboutme';
import Contacts from './Contacts';

function Wrapper() {
    return (
        <div className="userdetailsWrapper">
            <UserdetailsHeader />
            <Gender />
            <Description />
            <AboutmeHeader />
            <Aboutme />
            <ContactsHeader />
            <Contacts />
        </div>
    )
}

export default Wrapper
