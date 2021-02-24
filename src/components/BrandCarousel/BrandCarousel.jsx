import React from 'react';
import {Carousel} from 'react-bootstrap';

const BrandCarousel = () => {

    return (
        <div className="col-12">
            <Carousel>
                <Carousel.Item>
                    <div className="card-deck">
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://i.pinimg.com/originals/bd/c8/1a/bdc81a948abd4361288cf3a2d709261e.jpg"/>

                        </div>
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://euromail.ru/upload/shops/1065/image-1436362013-758792.jpg"/>

                        </div>
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://brandindustry.co.za/wp-content/uploads/2017/09/samsung-00-logo.png"/>

                        </div>
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://brandwiki.ru/up/brands/sony.png"/>

                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-deck">
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://tula.maxi-shopping.ru/images/cms/data/city-tula/arendatoram/logo/levis.jpg"/>

                        </div>
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREEeLNtIzSqfwmnstAs08XITPdJCEJtcrhg&usqp=CAU"/>

                        </div>
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://kasta.ua/imgw/loc/0x0/io/brand-logo/6515/a0ed954a-97a2-4658-9589-f4e24262c74e.png"/>

                        </div>
                        <div className="card">
                            <img className="d-block mx-auto w-50"
                                 src="https://pmall.uz/images/feature_variant/2/New_Balance.png"/>

                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}
export default BrandCarousel;