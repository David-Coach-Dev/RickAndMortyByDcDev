import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/Image File.png"
import slider1 from "../../assets/slider1.jpg"
import slider2 from "../../assets/slider2.jpg"
// import slider3 from "../../assets/slider3.jpg"
import slider3 from "../../assets/slider3 .jpg"

// Styles
import "./Carousel.Styles.scss"

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
          width={1440}
          height={480}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
          width={1440}
          height={480}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
          width={1440}
          height={480}
        />

      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
