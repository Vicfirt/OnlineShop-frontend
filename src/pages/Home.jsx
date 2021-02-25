import React from 'react';
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import BrandCarousel from "../components/BrandCarousel/BrandCarousel";


const Home = () => {
    return (
        <div>
            <HomeCarousel/>
            <div className="mt-5">
                <BrandCarousel/>
            </div>
        </div>
    )
}

export default Home;