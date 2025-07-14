import React from 'react';
import Navbar from '../Components/Navbar';
import Joblisting from '../Components/Joblisting';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar/>
            <Joblisting></Joblisting>
            <Footer/>
            
        </div>
    );
};

export default HomeLayout;