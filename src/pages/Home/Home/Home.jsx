import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyTabCategory from '../ToyTabCategory/ToyTabCategory';
import LatestToy from '../LatestToy/LatestToy';
import useTitle from '../../../hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        AOS.refresh();
    });
    useTitle(`Home`)
    return (
        <div data-aos="fade-up" >
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyTabCategory></ToyTabCategory>
            <LatestToy></LatestToy>

        </div>
    );
};

export default Home;