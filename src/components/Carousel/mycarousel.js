import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../img/carousal/img1.jpg";
import Slide2 from "../../img/carousal/img4.jpg";
import Slide3 from "../../img/carousal/img3.jpg";
import ScrollDown from "../scroll-down/scrolldown";
import "./mycarousel.style.css";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item >
            <div classname="d-block w-100 "></div>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;