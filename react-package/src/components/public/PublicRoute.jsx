import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';


export default function PublicRoute( { children, ...props} ) {
    return (
        <>
        <Navbar />
        <Route {...props}>{children}</Route>
        </>
    )
}