import styled from "styled-components";

const Styled = styled.div`
  width: ${props => props.slideWidth * 2}px;
  background-color: #F8F8F8;
  overflow-x: hidden;

  @media (hover: none) {
    -webkit-overflow-scrolling: touch;
  }
  .slider-container {
    width: ${props => props.slideWidth * 4}px;
    transform: translateX(${props => props.slideWidth * 0.5}px);
  }
`;

export default Styled;
