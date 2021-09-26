import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from  './users/navbar/Navbar';
import Footer from '../public/footer-section/footer/FooterWrapper';

export default function PrivateRoute( { children, ...props} ) {
    return (
        <>
        <Navbar />
        <Route {...props}>{children}</Route>
        <Footer />
        </>
    )
}
