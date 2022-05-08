
import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://i.ibb.co/bmBHHvJ/0e13c0a0c04befda2b72c1d5754a2368.jpg"
            }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://i.ibb.co/BGLYxQ4/64d38080f1d12109066e9ed3ed2de333.jpg"
            }
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://i.ibb.co/wYgQVN7/Atmospheric-Car-Poster-Splash-Background-Banner-Beam.jpg"
            }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default Banner;