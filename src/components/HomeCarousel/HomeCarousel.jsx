import React from 'react';
import {Carousel} from 'react-bootstrap';

const HomeCarousel = () => {

    return (

        <div className="col-12">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{width: "600px"}}
                        src="https://7ns3u38klvh1d264d2i1jx3d-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Untitled-design-73.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/2728/6638/files/dickies-banner_1024x1024.png?v=1565769455"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/paradigmpress-uploads/wp-content/uploads/2020/08/shutterstock_image-87.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>


    )
}

export default HomeCarousel;