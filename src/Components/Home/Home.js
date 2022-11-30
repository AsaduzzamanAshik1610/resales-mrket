import React from 'react';
import pic1 from '../../assets/images/3204s-tv4.png'
import pic2 from '../../assets/images/istockphoto-refrigerator.jpg'
import pic3 from '../../assets/images/pexels-phone.webp'
import pic4 from '../../assets/images/vizio-tv.webp'
import OthersPage from '../OthersPage/OthersPage';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div className="carousel w-11/12 mt-10 mb-10 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={pic1} className="w-11/12 mx-auto my-auto h-80 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={pic2}className="w-11/12 mx-auto my-auto h-80 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic3}className="w-11/12 mx-auto my-auto h-80 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={pic4}className="w-11/12 mx-auto my-auto h-80" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Products></Products>
            <OthersPage></OthersPage>
        </div>
    );
};

export default Home;