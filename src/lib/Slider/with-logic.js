import { withStateHandlers } from "recompose";

export default withStateHandlers(
  ({ activeSlideIndex = 0 }) => ({
    activeSlideIndex
  }),
  {
    toNext: ({ activeSlideIndex }) => () => ({
      activeSlideIndex: activeSlideIndex + 1
    }),
    toPrevious: ({ activeSlideIndex }) => () => ({
      activeSlideIndex: activeSlideIndex - 1
    })
  }
);
