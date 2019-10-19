import { withStateHandlers } from "recompose";




export default withStateHandlers(
  ({ activeSlideIndex = 0, classes = "", slideWidth, slideOffset = slideWidth / 2 }) => ({
    activeSlideIndex,
    classes,
    slideOffset,
    slideWidth,
  }),
  {
    handleSlideClick: ({
      activeSlideIndex,
      slideOffset,
      slideWidth,

    }) => (index) => {
      if (activeSlideIndex < index) {
        return {
          activeSlideIndex: activeSlideIndex + 1,
          classes: "slide-forward",
          slideOffset:
            slideOffset - slideWidth 
        };
      }
      if (activeSlideIndex > index) {
        return {
          activeSlideIndex: activeSlideIndex - 1,
          classes: "slide-backward",
          slideOffset:
            slideOffset + slideWidth
        };
      }
    }
  }
);
