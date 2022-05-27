import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Ceo from './Ceo';
import OurNewProduct from './OurNewProduct';
import Products from './products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Ceo></Ceo>
            <OurNewProduct></OurNewProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;