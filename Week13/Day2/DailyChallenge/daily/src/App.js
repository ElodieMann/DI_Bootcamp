import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import img1 from './img/1.webp';
import img2 from './img/2.webp';
import img3 from './img/3.jpg';
import img4 from './img/4.webp';



class Carousels extends Component {
    render() {
        return (
            <Carousel>
            <div>
                <img src={img1} alt='HongKongImage'/>
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src={img2} alt='MacaoImage' />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src={img3} alt='JapanImage'/>
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src={img4} alt='LasVegasImage'/>
                <p className="legend">Las Vegas</p>
            </div>
        </Carousel>
        );
    }
};

function App() {
  return (
    <div>
      <Carousels />
    </div>
  );
}

export default App;

