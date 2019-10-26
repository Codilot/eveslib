import { withStateHandlers, compose } from "recompose";
import data from "./data";

export default compose(
  withStateHandlers(
    ({
      numberOfSlides = data.length,
      activeSlideIndex = 0,
      classes = "",
      sliderWidth,
      slideWidth = Math.floor(sliderWidth / 3),
      slideOffset = slideWidth / 2,
      endPosition,
      startPosition,
    }) => ({
      activeSlideIndex,
      classes,
      slideOffset,
      slideWidth,
      endPosition,
      startPosition,
      numberOfSlides,
    }),
    {
      handleMouseDown: () => event => ({
        startPosition: event.clientX
      }),
      handleMouseUp: ({
        activeSlideIndex,
        startPosition,
        slideOffset,
        slideWidth,
        numberOfSlides
      }) => event => {
        if (activeSlideIndex < (numberOfSlides -1) && event.clientX < startPosition) {
          console.log("forward", numberOfSlides);
          event.preventDefault();
          return {
            endPosition: event.clientX,
            activeSlideIndex: activeSlideIndex + 1,
            classes: "slide-forward",
            slideOffset: slideOffset - slideWidth
          };
        }
        if (activeSlideIndex > 0 && event.clientX > startPosition) {
          console.log("back");
          event.preventDefault();
          return {
            endPosition: event.clientX,
            activeSlideIndex: activeSlideIndex - 1,
            classes: "slide-backward",
            slideOffset: slideOffset + slideWidth
          };
        }
        return { endPosition: event.clientX };
      }
    }
  )
);
