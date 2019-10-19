import React from "react";
import Slider from "../src/lib/Slider";
import AppStyled from "./AppStyled";

const App = ({ slidewith, slideHeight, sliderWidth=600 }) => (
  <AppStyled sliderWidth = {sliderWidth} >
    <Slider sliderWidth={sliderWidth} slideWidth={300} slideHeight={500}></Slider>
  </AppStyled>
);

export default App;
