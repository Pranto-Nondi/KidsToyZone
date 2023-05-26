import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyTabCategory from '../ToyTabCategory/ToyTabCategory';
import LatestToy from '../LatestToy/LatestToy';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useEffect(() => {
        scroll.scrollToTop({ smooth: true });
        AOS.init(); // Initialize AOS
    }, []);

    useTitle(`Home`);

    return (
        <div>
            <Banner />
            <Gallery />
            <ToyTabCategory />
            <LatestToy />
        </div>
    );
};

export default Home;


























