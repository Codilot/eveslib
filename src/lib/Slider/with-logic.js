import { withStateHandlers, compose } from "recompose";

export default compose(
  withStateHandlers(
    ({
      activeSlideIndex = 0,
      classes = "",
      sliderWidth,
      slideWidth = Math.floor(sliderWidth / 3),
      slideOffset = slideWidth / 2,
      endPosition,
      startPosition
    }) => ({
      activeSlideIndex,
      classes,
      slideOffset,
      slideWidth,
      endPosition,
      startPosition
    }),
    {
      handleSlideClick: ({
        activeSlideIndex,
        slideOffset,
        slideWidth
      }) => index => {
        if (activeSlideIndex < index) {
          return {
            activeSlideIndex: activeSlideIndex + 1,
            classes: "slide-forward",
            slideOffset: slideOffset - slideWidth
          };
        }
        if (activeSlideIndex > index) {
          return {
            activeSlideIndex: activeSlideIndex - 1,
            classes: "slide-backward",
            slideOffset: slideOffset + slideWidth
          };
        }
      },
      handleMouseDown: () => event => ({
        startPosition: event.clientX
      }),
      handleMouseUp: ({
        activeSlideIndex,
        startPosition,
        slideOffset,
        slideWidth
      }) => event => {
        if (event.clientX > startPosition) {
          console.log("forward");
          return {
            endPosition: event.clientX,
            activeSlideIndex: activeSlideIndex + 1,
            classes: "slide-forward",
            slideOffset: slideOffset - slideWidth
          };
        }
        if (event.clientX < startPosition) {
          console.log("back");
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
  ),
  withStateHandlers(
    ({
      activeSlideIndex,
      classes = "",
      slideOffset,
      endPosition,
      startPosition,
      slideWidth,
    }) => ({
      activeSlideIndex,
      classes,
      slideOffset,
      slideWidth,
      endPosition,
      startPosition
    }),
    {
      handleMouseDown: () => event => ({
        startPosition: event.clientX
      }),
      handleMouseUp: ({
        activeSlideIndex,
        startPosition,
        slideOffset,
        slideWidth
      }) => event => {
        if (event.clientX > startPosition) {
          console.log("forward");
          return {
            endPosition: event.clientX,
            activeSlideIndex: activeSlideIndex + 1,
            classes: "slide-forward",
            slideOffset: slideOffset - slideWidth
          };
        }
        if (event.clientX < startPosition) {
          console.log("back");
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
