import styled from "styled-components";

const Styled = styled.div`
    display: inline-block;
    width: ${props => props.slideWidth}px;
    height: ${props => props.slideHeight}px;
    margin: auto;
    .image {
    opacity:0.2;
    width: 250px;
    height: 250px;
    background: url(${props => props.imgUrl});
    background-size: cover;
    border-radius: 3px;
    transition: opacity 0.5s ease-in-out 0.1s;
    }
    .image.highlighted {
      opacity:1;
    }
  }
`;

export default Styled;
