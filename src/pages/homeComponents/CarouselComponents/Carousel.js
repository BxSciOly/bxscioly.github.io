import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import * as FaIcons from "react-icons/fa";
import "./carousel.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaIcons.FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevSlide}
      />
      <FaIcons.FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextSlide}
      />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Scioly Images" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
