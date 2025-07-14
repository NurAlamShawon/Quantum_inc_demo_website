import React from 'react';
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div>
            <Navbar2/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Authentication;