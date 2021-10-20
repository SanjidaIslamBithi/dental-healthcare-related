import React from 'react';

import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import TopDis from '../TopDs/TopDis';

const Home = () => {
    return (
        <div id="home">
        
            <Banner></Banner>
            <Services></Services>
            <TopDis></TopDis>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
           
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;