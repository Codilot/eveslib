import React from "react";
import Styled from "./Styled";

const Slide = ({
  url,
  title,
  slideHeight,
  slideWidth,
  isHighlighted,
  onClick
}) => (
  <Styled
    imgUrl={url}
    slideHeight={slideHeight}
    slideWidth={slideWidth}
    onClick={onClick}
  >
    <div className={`image ${isHighlighted ? "highlighted" : ""}`}></div>
    <div className="title">{title}</div>
  </Styled>
);

export default Slide;
