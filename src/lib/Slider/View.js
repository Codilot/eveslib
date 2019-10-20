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
  slideOffset,
  handleMouseUp,
  handleMouseDown,
  startPosition,
  endPosition
}) => (
  <Styled
    slideWidth={slideWidth}
    slideHeight={slideHeight}
    numberOfSlides={data.length}
    slideOffset={slideOffset}

  >
    index:{activeSlideIndex}
    classes: {classes}
    offset:
    {slideOffset}
    start:
    {startPosition}
    end:
    {endPosition}
    <div
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      className={`slider-container ${classes}`}
    >
      {data.map(item => (
        <Slide
          key={item.index}
          url={item.src}
          title={item.title}
          slideWidth={slideWidth}
          slideHeight={slideHeight}
          isHighlighted={item.index === activeSlideIndex}
          onClick={() => handleSlideClick(item.index)}
        ></Slide>
      ))}
    </div>
  </Styled>
);

export default Slider;
