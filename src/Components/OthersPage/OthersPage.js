import React from 'react';

const OthersPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 ml-12 m-5 lg:grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-5">
                <figure><img src="https://www.cnet.com/a/img/resize/48ade9b2a58559b3974319a0b4ef0aff4f8bf17e/hub/2022/10/18/cfeb9075-3fd1-465a-959f-a543aac0a573/tcl-6-series-tv-r6-2022-6368.jpg?auto=webp&fit=crop&height=528&width=940" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product.1</h2>
                    <p className='m-5'>a system for converting visual images (with sound) into electrical signals, transmitting them by radio or other means, and displaying them electronically on a screen</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-5">
                <figure><img src="https://www.cnet.com/a/img/resize/21510f21c9b739339426cd5dab7e50e081e93255/hub/2022/10/18/b643bc41-614e-4a5e-acaa-649281580f68/tcl-6-series-tv-r6-2022-6396.jpg?auto=webp&fit=crop&height=236&width=420" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product.2</h2>
                    <p className='m-5'>a system for converting visual images (with sound) into electrical signals, transmitting them by radio or other means, and displaying them electronically on a screen</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-5">
                <figure><img src="http://img.youtube.com/vi/TN9emxDx444/maxresdefault.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product.3</h2>
                    <p className='m-5'>a system for converting visual images (with sound) into electrical signals, transmitting them by radio or other means, and displaying them electronically on a screen</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OthersPage;