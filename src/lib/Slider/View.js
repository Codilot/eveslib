import React from "react";
import Styled from "./Styled";
import Slide from "../Slide";
import data from "./data";

const Slider = ({
  slideWidth,
  slideHeight,
  activeSlideIndex,
  classes,
  handleSlideClick,
  slideOffset
}) => (
  <Styled
    slideWidth={slideWidth}
    slideHeight={slideHeight}
    numberOfSlides={data.length}
    slideOffset={slideOffset}
  >
    {activeSlideIndex}
    {classes}
    {slideOffset}
    <div className={`slider-container ${classes}`}>
      {data.map(item => (
        <Slide
          key={item.index}
          url={item.src}
          title={item.title}
          slideWidth={slideWidth}
          slideHeight={slideHeight}
          isHighlighted={item.index === activeSlideIndex}
          onClick={()=> handleSlideClick(item.index)}
        ></Slide>
      ))}
    </div>
  </Styled>
);

export default Slider;
