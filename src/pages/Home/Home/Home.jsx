import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyTabCategory from '../ToyTabCategory/ToyTabCategory';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyTabCategory></ToyTabCategory>
           
        </div>
    );
};

export default Home;