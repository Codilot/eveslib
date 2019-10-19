import styled from "styled-components";

const Styled = styled.div`
  width: ${props => props.slideWidth * 2}px;
  background-color: #f8f8f8;
  overflow-x: hidden;

  @media (hover: none) {
    -webkit-overflow-scrolling: touch;
  }
  .slider-container {
    width: ${props => props.slideWidth * props.numberOfSlides}px;
    transform: translateX(${props => props.slideOffset}px);
    transition: transform 0.5s ease-in-out 0.1s;
  }
`;

export default Styled;
