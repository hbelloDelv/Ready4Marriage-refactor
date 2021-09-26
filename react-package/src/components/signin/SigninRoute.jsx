import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../public/footer-section/footer/FooterWrapper'


function SigninRoute( { children, ...props} ) {
    return (
        <>  
        <Route {...props}>{children}</Route>
        <Footer />
        </>
    )
}

export default SigninRoute
