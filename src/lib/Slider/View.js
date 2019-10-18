import React from "react";
import data from "./data";
import Styled from "./Styled";
import Slide from "../Slide";

const Slider = ({slideWidth = 300, slideHeight = 400, activeSlideIndex }) => (
  <Styled slideWidth={slideWidth} slideHeight={slideHeight } NumberOfSlides={data.length}>
    {activeSlideIndex}
    
    <div className="slider-container">
      {data.map(item => (
        <Slide 
        key={item.index} 
        url={item.src} 
        title={item.title} 
        slideWidth={slideWidth} 
        slideHeight={slideHeight}
        ></Slide>
      ))}
    </div>
  </Styled>
);

export default Slider;
