import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import News from '../News/News';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';

const HomePage = () => {
    
    return (
        <>
            <Banner></Banner>
            <Feature></Feature>
            <Inventory></Inventory>
            <News></News>
            <Footer></Footer>
        </>
    );
};

export default HomePage;