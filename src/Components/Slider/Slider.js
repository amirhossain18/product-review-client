import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
const Slider = () => {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 mt-1"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mt-1"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              className="d-block w-100 mt-1"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;