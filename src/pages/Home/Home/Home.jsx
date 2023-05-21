import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyTabCategory from '../ToyTabCategory/ToyTabCategory';
import LatestToy from '../LatestToy/LatestToy';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyTabCategory></ToyTabCategory>
            <LatestToy></LatestToy>

        </div>
    );
};

export default Home;